
import { Controller, Request, Param, UnauthorizedException, Get } from '@nestjs/common';
import { JwtService } from 'src/shared-services/jwt.service';
import { FitcomUserRole, JwtContent } from 'src/users/user.interfaces';
import { FitnessCenterStaffService } from './fitness-center-staff.service';

@Controller('api/staff')
export class FitnessCenterStaffController {

    constructor(
        private readonly fitnessCenterStaffService: FitnessCenterStaffService,
        private readonly jwtService: JwtService
    ) {}

    @Get()
    async getAdministrators(@Request() request: Request): Promise<void> {
        const {userRole} = this.jwtService.authorizeAndGetJWTContent<JwtContent>(request);
        if (userRole !== FitcomUserRole.fitcomAdministrator) throw new UnauthorizedException;
        // return await this.fitnessCenterStaffService.();
    }

    @Get(':userId')
    async getFitcomAdministrator(@Param('userId') userId: string, @Request() request: Request): Promise<void> {
        const {userRole} = this.jwtService.authorizeAndGetJWTContent<JwtContent>(request);
        if (userRole !== FitcomUserRole.fitcomAdministrator) throw new UnauthorizedException;
        // return await this.fitnessCenterStaffService.(userId);
    }

}
