
import { Controller, Post, Request, UnauthorizedException } from '@nestjs/common';
import { JwtService } from './../shared-services/jwt.service';
import { Credentials } from './../interfaces';
import { AdministratorAuthenticationResponse } from './administrator.interfaces';
import { AdministratorServcie } from './administrator.service';

@Controller('administrators')
export class AdministratorContoller {
 
    constructor(
        private readonly administratorServcie: AdministratorServcie,
        private readonly jwtService: JwtService
    ) {}

    @Post('authenticate')
    async authenticate(@Request() request: Request): Promise<AdministratorAuthenticationResponse> {
        const credentials = request.body as unknown as Credentials;
        if ('email' in credentials && 'password' in credentials) return await this.administratorServcie.authenticate(credentials);
    }

    @Post('authorize')
    async authorize(@Request() request: Request): Promise<AdministratorAuthenticationResponse> {
        const {adminId} = this.jwtService.authorizeAndGetJWTContent(request);
        if (adminId) return await this.administratorServcie.authorize(adminId);
        throw UnauthorizedException;
    }

}
