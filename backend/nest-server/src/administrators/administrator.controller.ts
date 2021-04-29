
import { Controller, Get, Param, Request, UnauthorizedException } from '@nestjs/common';
import { FitcomUserRole, JwtContent } from 'src/users/user.interfaces';
import { JwtService } from './../shared-services/jwt.service';
import { Administrator, FitcomAdministratorsOverview } from './administrator.interfaces';
import { AdministratorServcie } from './administrator.service';

@Controller('administrators')
export class AdministratorContoller {
 
    constructor(
        private readonly administratorServcie: AdministratorServcie,
        private readonly jwtService: JwtService
    ) {}

    @Get()
    async getAdministrators(@Request() request: Request): Promise<FitcomAdministratorsOverview> {
        const {userRole} = this.jwtService.authorizeAndGetJWTContent<JwtContent>(request);
        if (userRole !== FitcomUserRole.fitcomAdministrator) throw new UnauthorizedException;
        return await this.administratorServcie.getAdministrators();
    }

    @Get(':userId')
    async getFitcomAdministrator(@Param('userId') userId: string, @Request() request: Request): Promise<Administrator> {
        const {userRole} = this.jwtService.authorizeAndGetJWTContent<JwtContent>(request);
        if (userRole !== FitcomUserRole.fitcomAdministrator) throw new UnauthorizedException;
        return await this.administratorServcie.getAdministrator(userId);
    }

}
