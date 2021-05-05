
import { Controller, Get, Post, Request, UnauthorizedException } from '@nestjs/common';
import { JwtService } from 'src/shared-services/jwt.service';
import { AuthenticationResponse, Credentials } from './user.interfaces';
import { UserService } from './user.service';

@Controller('users')
export class UserController {

    constructor(
        private readonly userService: UserService,
        private readonly jwtService: JwtService
    ) {}

    @Post('authentication')
    async authentication(@Request() request: Request): Promise<AuthenticationResponse> {
        const credentials = request.body as unknown as Credentials;
        return await this.userService.authentication(credentials);
    }

    @Post('authorization')
    async authorization(@Request() request: Request): Promise<AuthenticationResponse> {
        return await this.userService.authorization(request);
    }

}
