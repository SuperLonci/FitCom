
import { Controller, Request, Param, UnauthorizedException, Get, Delete, Post } from '@nestjs/common';
import { FitnessCenterStaffService } from './fitness-center-staff.service';
import { JwtService } from 'src/shared-services/jwt.service';

import { FitcomUserRole, JwtContent } from 'src/users/user.interfaces';

@Controller('api/staff')
export class FitnessCenterStaffController {

    constructor(
        private readonly fitnessCenterStaffService: FitnessCenterStaffService,
        private readonly jwtService: JwtService
    ) {}

    @Get()
    async getAll(@Request() request: Request): Promise<void> {
        const {userRole} = this.jwtService.authorizeAndGetJWTContent<JwtContent>(request);
        if (userRole !== FitcomUserRole.fitnessCenterAdministrator) throw new UnauthorizedException;
        this.fitnessCenterStaffService.getAll();
    }
    
    @Get(':staffId')
    async getOne(@Request() request: Request, @Param('staffId') staffId: string): Promise<void> {
        const {userRole} = this.jwtService.authorizeAndGetJWTContent<JwtContent>(request);
        if (userRole !== FitcomUserRole.fitnessCenterAdministrator) throw new UnauthorizedException;
        this.fitnessCenterStaffService.getOne(staffId);
    }
    
    @Post(':email')
    async create(@Request() request: Request, @Param('email') email: string): Promise<void> {
        const {userRole, userId} = this.jwtService.authorizeAndGetJWTContent<JwtContent>(request);
        if (userRole !== FitcomUserRole.fitnessCenterAdministrator) throw new UnauthorizedException;
        this.fitnessCenterStaffService.create(email, userId);
    }

    @Delete(':staffId')
    async delete(@Request() request: Request, @Param('staffId') staffId: string): Promise<void> {
        const {userRole} = this.jwtService.authorizeAndGetJWTContent<JwtContent>(request);
        if (userRole !== FitcomUserRole.fitnessCenterAdministrator) throw new UnauthorizedException;
        this.fitnessCenterStaffService.delete(staffId);
    }



    // @Get()
    // async getAdministrators(@Request() request: Request): Promise<void> {
    //     const {userRole} = this.jwtService.authorizeAndGetJWTContent<JwtContent>(request);
    //     if (userRole !== FitcomUserRole.fitcomAdministrator) throw new UnauthorizedException;
    //     // return await this.fitnessCenterStaffService.();
    // }

    // @Get(':userId')
    // async getFitcomAdministrator(@Param('userId') userId: string, @Request() request: Request): Promise<void> {
    //     const {userRole} = this.jwtService.authorizeAndGetJWTContent<JwtContent>(request);
    //     if (userRole !== FitcomUserRole.fitcomAdministrator) throw new UnauthorizedException;
    //     // return await this.fitnessCenterStaffService.(userId);
    // }

}
