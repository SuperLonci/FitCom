
import { ForbiddenException, Injectable, NotFoundException } from '@nestjs/common';
import { EnvironmentService } from 'src/shared-services/environment.service';
import { MailService } from 'src/shared-services/mail.service';
import { DbService } from './../shared-services/db.service';
import { JwtService } from './../shared-services/jwt.service';
import { v4 as uuidv4 } from 'uuid';
import { AuthenticationResponse, Credentials, DatabaseUserResponse, FitnessCenterForMember, FitnessCenterForStaff, JwtContent, UserForPostRequest } from './user.interfaces';

@Injectable()
export class UserService {
    
    constructor(
        private readonly dbService: DbService,
        private readonly jwtService: JwtService,
        private readonly environmentService: EnvironmentService,
        private readonly mailService: MailService
    ) {}

    async authentication(credentials: Credentials): Promise<AuthenticationResponse> {
        const [user] = await this.dbService.query<DatabaseUserResponse>(`
            SELECT
            Users.id as userId,
            Users.firstName,
            Users.lastName,
            Users.activationToken,
            EXISTS(
                SELECT * FROM FitcomAdministrators WHERE FitcomAdministrators.userId = Users.id
            ) as isFitcomAdministrator
            FROM Users
            WHERE email = '${credentials.email}' AND password = SHA2(CONCAT('${credentials.password}', id), 512)
        `);
        return await this.generateAuthenticationResponseFor(user);
    }

    async authorization(request: Request): Promise<AuthenticationResponse> {
        const {userId} = this.jwtService.verifyHttpRequest<JwtContent>(request);
        const [user] = await this.dbService.query<DatabaseUserResponse>(`
            SELECT
            Users.id as userId,
            Users.firstName,
            Users.lastName,
            Users.activationToken,
            EXISTS(
                SELECT * FROM FitcomAdministrators WHERE FitcomAdministrators.userId = Users.id
            ) as isFitcomAdministrator
            FROM Users
            WHERE id = '${userId}'
        `);
        return await this.generateAuthenticationResponseFor(user);
    }

    async generateAuthenticationResponseFor(user: DatabaseUserResponse): Promise<AuthenticationResponse> {
        if (!user) throw new NotFoundException;
        if (user.activationToken) throw new ForbiddenException;
        delete user.activationToken;

        user.isFitcomAdministrator = Boolean(user.isFitcomAdministrator);
        user.isStaffInFitnessCenters = await this.getFitnessCenterStaffRoles(user.userId);
        user.isMemberInFitnessCenters = await this.getFitnessCenterMemberRoles(user.userId);
        
        return {
            ...user,
            jwt: this.jwtService.sign({
                userId: user.userId,
                isFitcomAdministrator: user.isFitcomAdministrator,
                isStaffInFitnessCenters: user.isStaffInFitnessCenters.map(e => {
                    const n = {...e};
                    delete n.fitnessCenterTitle;
                    return n;
                }),
                isMemberInFitnessCenters: user.isMemberInFitnessCenters.map(e => {
                    const n = {...e};
                    delete n.fitnessCenterTitle;
                    return n;
                })
            })
        };
    }

    async getFitnessCenterStaffRoles(userId: string): Promise<FitnessCenterForStaff[]> {
        const roles = await this.dbService.query<FitnessCenterForStaff>(`
            SELECT
            FitnessCenters.title as fitnessCenterTitle,
            FitnessCenterStaff.fitnessCenterId,
            FitnessCenterStaff.canAcceptInvitations,
            FitnessCenterStaff.canWatchMembers,
            FitnessCenterStaff.canCreateTrainingsplans
            FROM FitnessCenterStaff
            LEFT JOIN FitnessCenters
            ON FitnessCenterStaff.fitnessCenterId = FitnessCenters.id
            WHERE userId = '${userId}'
        `);

        roles.forEach(fitnessCenterStaffRole => {
            fitnessCenterStaffRole.canAcceptInvitations = Boolean(fitnessCenterStaffRole.canAcceptInvitations);
            fitnessCenterStaffRole.canWatchMembers = Boolean(fitnessCenterStaffRole.canWatchMembers);
            fitnessCenterStaffRole.canCreateTrainingsplans = Boolean(fitnessCenterStaffRole.canCreateTrainingsplans);
        });
        return roles;
    }

    async getFitnessCenterMemberRoles(userId: string): Promise<FitnessCenterForMember[]> {
        return await this.dbService.query<FitnessCenterForMember>(`
            SELECT
            FitnessCenters.title as fitnessCenterTitle,
            FitnessCenterMembers.fitnessCenterId
            FROM FitnessCenterMembers
            LEFT JOIN FitnessCenters
            ON FitnessCenterMembers.fitnessCenterId = FitnessCenters.id
            WHERE userId = '${userId}'
        `);
    }

    async inviteUser(email: string): Promise<string> {
        const userId = uuidv4();
        const activationToken = uuidv4();
        await this.dbService.query(`
            INSERT Users (id, email, password, firstName, lastName, activationToken)
            VALUE ('${userId}', '${email}', '', '', '', '${activationToken}')
        `);
        await this.mailService.send(
            email, 
            'Fitcom Registrierung', 
            `
                Du wurdest dazu eingeladen ein Fitcom Administrator zu werden. <br>
                Klicke den folgenden Button um deine Registrierung abzuschließen. <br> <br>
                <a
                    href="${this.environmentService.frontendRoot}/Registrierung/${activationToken}"
                    style="background-color: black; color: white; padding: 8px; border-radius: 4px; text-decoration: none">
                    Registrieren
                </a>
                <br>
            `);

        return userId;
    }

    // async registration(activationToken: string, user: UserForPostRequest): Promise<AuthenticationResponse> {
    //     const [userResult] = await this.dbService.query<{id: string}>(`
    //         SELECT id, role FROM Users WHERE activationToken = '${activationToken}'
    //     `);
    //     if (!(userResult && userResult.id)) throw new NotFoundException;
    //     await this.dbService.query(`
    //         UPDATE Users SET
    //         firstName = '${user.firstName}',
    //         lastName = '${user.lastName}',
    //         gender = '${user.gender}',
    //         birthDate = ${user.birthDate === '' ? 'NULL': `'${user.birthDate}'`},
    //         password = SHA2(CONCAT('${user.password}', id), 512),
    //         activationToken = NULL
    //         WHERE activationToken = '${activationToken}'
    //     `);
        
        
    //     return this.generateAuthenticationResponseFor({id: userResult.id, ...user});
    // }

}
