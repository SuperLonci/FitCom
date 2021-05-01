
import { Controller, Delete, Get, Param, Post, Request, UnauthorizedException } from '@nestjs/common';
import { AdministratorServcie } from './administrator.service';
import { JwtService } from './../shared-services/jwt.service';

import { FitcomUserRole, JwtContent, User } from './../users/user.interfaces';
import { Administrator, FitcomAdministratorsOverview } from './administrator.interfaces';

@Controller('administrators')
export class AdministratorContoller {
 
    constructor(
        private readonly administratorServcie: AdministratorServcie,
        private readonly jwtService: JwtService
    ) {}

    @Get()
    async getAll(@Request() request: Request): Promise<void> {
        const {userRole} = this.jwtService.verifyHttpRequest<JwtContent>(request);
        if (userRole !== FitcomUserRole.fitcomAdministrator) throw new UnauthorizedException;
        return await this.administratorServcie.getAll();
    }
    
    // @Get(':administratorId')
    // async getOne(@Request() request: Request, @Param('administratorId') administratorId: string): Promise<User> {
    //     const {userRole} = this.jwtService.verifyHttpRequest<JwtContent>(request);
    //     if (userRole !== FitcomUserRole.fitcomAdministrator) throw new UnauthorizedException;
    //     return await this.administratorServcie.getOne(administratorId);
    // }
    
    @Post(':email')
    async create(@Request() request: Request, @Param('email') email: string): Promise<void> {
        const {userRole, userId} = this.jwtService.verifyHttpRequest<JwtContent>(request);
        if (userRole !== FitcomUserRole.fitcomAdministrator) throw new UnauthorizedException;
        return await this.administratorServcie.create(email, userId);
    }

    @Delete(':administratorId')
    async delete(@Request() request: Request, @Param('administratorId') administratorId: string): Promise<void> {
        const {userRole} = this.jwtService.verifyHttpRequest<JwtContent>(request);
        if (userRole !== FitcomUserRole.fitcomAdministrator) throw new UnauthorizedException;
        return await this.administratorServcie.delete(administratorId);
    }









    // @Get()
    // async getAdministrators(@Request() request: Request): Promise<FitcomAdministratorsOverview> {
    //     const {userRole} = this.jwtService.authorizeAndGetJWTContent<JwtContent>(request);
    //     if (userRole !== FitcomUserRole.fitcomAdministrator) throw new UnauthorizedException;
    //     return await this.administratorServcie.getAdministrators();
    // }

    // @Get(':userId')
    // async getFitcomAdministrator(@Param('userId') userId: string, @Request() request: Request): Promise<Administrator> {
    //     const {userRole} = this.jwtService.authorizeAndGetJWTContent<JwtContent>(request);
    //     if (userRole !== FitcomUserRole.fitcomAdministrator) throw new UnauthorizedException;
    //     return await this.administratorServcie.getAdministrator(userId);
    // }

}
