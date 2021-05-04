
import { ForbiddenException, Injectable, NotFoundException } from '@nestjs/common';
import { DbService } from './../shared-services/db.service';
import { JwtService } from './../shared-services/jwt.service';
import { AuthenticationResponse, Credentials, DatabaseUserResponse, FitnessCenterForMember, FitnessCenterForStaff } from './user.interfaces';

@Injectable()
export class UserService {
    
    constructor(
        private readonly dbService: DbService,
        private readonly jwtService: JwtService
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

}
