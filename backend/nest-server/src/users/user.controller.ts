
import { BadRequestException, Controller, Param, Post, Request } from '@nestjs/common';
import { UserService } from './user.service';
import { JwtService } from 'src/shared-services/jwt.service';

import { AuhtenticationResponse, Credentials, UserForRegistration } from './user.interfaces';

@Controller('users')
export class UserController {

    constructor(
        private readonly userService: UserService,
        private readonly jwtService: JwtService
    ) {}

    @Post('auhtenticate')
    async auhtenticate(@Request() request: Request): Promise<AuhtenticationResponse> {
        const credentials = request.body as unknown as Credentials;
        if (credentials.email === '' || credentials.password === '') throw new BadRequestException;
        return await this.userService.auhtenticate(credentials);
    }

    @Post('authorize')
    async authorize(@Request() request: Request): Promise<AuhtenticationResponse> {
        const jwt = (request.headers as unknown as { authorization: string }).authorization;
        return this.userService.authorize(jwt);
    }

    @Post('register/:activationToken')
    async register(@Param('activationToken') activationToken: string, @Request() request: Request): Promise<AuhtenticationResponse> {
        const staff = request.body as unknown as UserForRegistration;
        return await this.userService.register(activationToken, staff);
    }

}
