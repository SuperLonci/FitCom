
import { Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from './../shared-services/jwt.service';
import { Credentials } from './../interfaces';
import { DbService } from './../shared-services/db.service';
import { AdministratorAuthenticationResponse, Administrator } from './administrator.interfaces';

@Injectable()
export class AdministratorServcie {

    constructor(
        private readonly dbService: DbService,
        private readonly jwtService: JwtService
    ) {}

    async authenticate(credentials: Credentials): Promise<AdministratorAuthenticationResponse> {
        const [user] = await this.dbService.query<Administrator>(`
            SELECT id, firstName, lastName, email FROM FitcomAdministrators
            WHERE email = '${credentials.email}' AND password = SHA2(CONCAT('${credentials.password}', id), 512)
        `);
        if (!user) throw new UnauthorizedException;
        return {
            jwt: this.jwtService.sign({
                adminId: user.id
            }),
            user: user
        };
    }

    async authorize(adminId: string): Promise<AdministratorAuthenticationResponse> {
        const [user] = await this.dbService.query<Administrator>(`
            SELECT id, firstName, lastName, email FROM FitcomAdministrators
            WHERE id = '${adminId}'
        `);
        if (!user) throw new UnauthorizedException;
        return {
            jwt: this.jwtService.sign({
                adminId: user.id
            }),
            user: user
        };
    }

}
