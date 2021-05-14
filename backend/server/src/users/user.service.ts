
import { ForbiddenException, Injectable, NotFoundException } from '@nestjs/common';
import { JwtService } from './../_services/jwt.service';
import { DbService } from './../_services/db.service';
import { Credentials, JwtResponse, UserProfile } from './user.interfaces';

@Injectable()
export class UserService {

    constructor(
        private readonly dbService: DbService,
        private readonly jwtService: JwtService
    ) {}

    readonly selectUserQuery: string = `
        SELECT
        Users.id as userId,
        Users.firstName,
        Users.lastName,
        Users.activationToken
        FROM Users
    `;

    async authentication(credentials: Credentials): Promise<JwtResponse> {
        const [user] = await this.dbService.query<{activationToken: string}>( `${this.selectUserQuery}
            WHERE email = '${credentials.email}' AND password = SHA2(CONCAT('${credentials.password}', id), 512)
        `);
        if (!user) throw new NotFoundException;
        if (user.activationToken) throw new ForbiddenException;
        delete user.activationToken;
        return await this.generateJwtResponse(user);
    }

    async authorization(userId: string): Promise<JwtResponse> {
        const [user] = await this.dbService.query<{activationToken: string}>( `${this.selectUserQuery}
            WHERE id = '${userId}'
        `);
        if (user.activationToken) throw new ForbiddenException;
        return await this.generateJwtResponse(user);
    }

    async registration(activationToken: string): Promise<JwtResponse> {
        const [user] = await this.dbService.query<{activationToken: string}>( `${this.selectUserQuery}
            WHERE activationToken = '${activationToken}'
        `);
        return await this.generateJwtResponse(user);
    }

    async generateJwtResponse(user: any): Promise<JwtResponse> {
        delete user.activationToken;
        if (!user) throw new NotFoundException;
        return {
            user,
            jwt: this.jwtService.sign({
                userId: user.userId
            })
        };
    }

    async getProfile(userId: string): Promise<UserProfile> {
        const [user] = await this.dbService.query<UserProfile>(`
            SELECT firstName, lastName, birthDate, email FROM Users WHERE id = '${userId}'
        `);
        if (!user) throw new NotFoundException;
        return user;
    }

    async editPassword(userId: string, password: string): Promise<void> {
        await this.dbService.query(`
            UPDATE Users SET
            password = SHA2(CONCAT('${password}', id), 512)
            WHERE id = '${userId}'
        `);
    }

}
