
import { ForbiddenException, Injectable, NotFoundException } from '@nestjs/common';
import { JwtService } from 'src/shared-services/jwt.service';
import { DbService } from '../shared-services/db.service';
import { AuhtenticationResponse, Credentials, UserAuthenticationDatabaseResult, UserForRegistration } from './user.interfaces';

@Injectable()
export class UserService {

    constructor(
        private readonly dbService: DbService,
        private readonly jwtService: JwtService
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
