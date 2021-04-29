
import { ForbiddenException, Injectable, NotFoundException } from '@nestjs/common';
import { JwtService } from 'src/shared-services/jwt.service';
import { DbService } from '../shared-services/db.service';
import { AuhtenticationResponse, Credentials, FitcomUserRole, UserAuthenticationDatabaseResult, UserForRegistration } from './user.interfaces';
import { v4 as uuidv4 } from 'uuid';
import { MailService } from 'src/shared-services/mail.service';
import { EnvironmentService } from 'src/shared-services/environment.service';

@Injectable()
export class UserService {

    constructor(
        private readonly dbService: DbService,
        private readonly jwtService: JwtService,
        private readonly mailService: MailService,
        private readonly environmentService: EnvironmentService
    ) {}

    async auhtenticate(credentials: Credentials): Promise<AuhtenticationResponse> {
        const [user] = await this.dbService.query<UserAuthenticationDatabaseResult>(`
            SELECT id, role, activationToken FROM Users
            WHERE email = '${credentials.email}' AND password = SHA2(CONCAT('${credentials.password}', id), 512)
        `);
        if (!user) throw new NotFoundException; // 404
        if (user.activationToken) throw new ForbiddenException; // 403
        return {
            jwt: this.jwtService.sign({
                userId: user.id,
                userRole: user.role
            })
        };
    }

    async authorize(jwt: string): Promise<AuhtenticationResponse> {
        const jwtContent = this.jwtService.getContentAndVerify<{userId: string, userRole: string}>(jwt);
        return {
            jwt: this.jwtService.sign({
                userId: jwtContent.userId,
                userRole: jwtContent.userRole
            })
        };
    }

    async invite(email: string, userRole: FitcomUserRole): Promise<string> {
        const userId: string = uuidv4();
        const activationToken: string = uuidv4();
        await this.dbService.query(`
            INSERT INTO Users (id, email, role, activationToken)
            VALUE ('${userId}', '${email}', '${userRole}', '${activationToken}')
        `);
        this.mailService.sendMail(email, 'Fitcom Registrierung', `${this.environmentService.frontendRoot}/Registrierung/${activationToken}`);
        return userId;
    }

    async register(activationToken: string, user: UserForRegistration): Promise<AuhtenticationResponse> {
        const [userResult] = await this.dbService.query<{id: string, role: string}>(`
            SELECT id, role FROM Users WHERE activationToken = '${activationToken}'
        `);
        if (!(userResult && userResult.id && userResult.role)) throw new NotFoundException;
        await this.dbService.query(`
            UPDATE Users SET
            firstName = '${user.firstName}',
            lastName = '${user.lastName}',
            gender = '${user.gender}',
            birthDate = ${user.birthDate === '' ? 'NULL': user.birthDate},
            password = SHA2(CONCAT('${user.password}', id), 512),
            activationToken = NULL
            WHERE activationToken = '${activationToken}'
        `);
        return {
            jwt: this.jwtService.sign({
                userId: userResult.id,
                userRole: userResult.role
            })
        };
    }

}
