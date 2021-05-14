
import { Controller, Get, Param, Post, Request } from '@nestjs/common';
import { JwtService } from 'src/_services/jwt.service';
import { Credentials, EditPasswordRequest, JwtContent, JwtResponse, UserProfile } from './user.interfaces';
import { UserService } from './user.service';

@Controller('users')
export class UserController {

    constructor(
        private readonly userService: UserService,
        private readonly jwtService: JwtService
    ) {}

    @Post('authentication')
    async authentication(@Request() request: Request): Promise<JwtResponse> {
        const credentials = new Credentials(request.body);
        // remove later
        await new Promise(resolve => setTimeout(resolve, 1000));
        return await this.userService.authentication(credentials);
    }

    @Post('authorization')
    async authorization(@Request() request: Request): Promise<JwtResponse> {
        const {userId} = this.jwtService.verifyHttpRequest<JwtContent>(request);
        return await this.userService.authorization(userId);
    }

    @Post('registration/:activationToken')
    async registration(@Request() request: Request, @Param('activationToken') activationToken: string): Promise<JwtResponse> {
        const x = request.body as unknown as unknown;
        return await this.userService.registration(activationToken);
    }

    @Get('profile')
    async getProfile(@Request() request: Request): Promise<UserProfile> {
        const {userId} = this.jwtService.verifyHttpRequest<JwtContent>(request);
        return await this.userService.getProfile(userId);
    }

    @Post('edit-password')
    async editPassword(@Request() request: Request): Promise<void> {
        const {userId} = this.jwtService.verifyHttpRequest<JwtContent>(request);
        const {password} = new EditPasswordRequest(request.body);
        return await this.userService.editPassword(userId, password);
    }

}
