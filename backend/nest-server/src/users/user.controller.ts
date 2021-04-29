
import { Controller, Get, Param, Post, Request, UnauthorizedException } from '@nestjs/common';
import { UserService } from './user.service';
import { AuhtenticationResponse, CreateUserResponse, Credentials, FitcomUserRole, JwtContent, UserForRegistration } from './user.interfaces';
import { JwtService } from 'src/shared-services/jwt.service';

@Controller('users')
export class UserController {

    constructor(
        private readonly userService: UserService,
        private readonly jwtService: JwtService
    ) {}

    @Post('auhtenticate')
    async auhtenticate(@Request() request: Request): Promise<AuhtenticationResponse> {
        const credentials = request.body as unknown as Credentials;
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


    @Post('fitcomAdministrator/:email')
    async createFitcomAdministrator(@Param('email') email: string, @Request() request: Request): Promise<CreateUserResponse> {
        const {userRole} = this.jwtService.authorizeAndGetJWTContent<JwtContent>(request);
        if (userRole !== FitcomUserRole.fitcomAdministrator) throw new UnauthorizedException;
        return await this.userService.invite(email, FitcomUserRole.fitcomAdministrator);
    }

    // @Post('fitnessCenterStaff')
    // async createFitnessCenterStaff(@Request() request: Request): Promise<void> {
    //     const {userRole} = this.jwtService.authorizeAndGetJWTContent<JwtContent>(request);
    //     if (userRole !== FitcomUserRole.fitnessCenterAdministrator) throw new UnauthorizedException;
    //     return await this.userService.invite();
    // }

}
