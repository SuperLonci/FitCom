
import { Controller, Get, Post, Request, UnauthorizedException } from '@nestjs/common';
import { JwtService } from 'src/shared-services/jwt.service';
import { FitcomUserRole, JwtContent } from 'src/users/user.interfaces';
import { FitnessCenterForAdministrationOverview, FitnessCenterForPost } from './fitness-center.interfaces';
import { FintessCenterService } from './fitness-center.service';

@Controller('fitness-centers')
export class FintessCenterController {

    constructor(
        private readonly fintessCenterService: FintessCenterService,
        private readonly jwtService: JwtService
    ) {}
    
    @Get()
    async getFitnessCenters(@Request() request: Request): Promise<FitnessCenterForAdministrationOverview[]> {
        const {userRole} = this.jwtService.authorizeAndGetJWTContent<JwtContent>(request);
        if (userRole !== FitcomUserRole.fitcomAdministrator) throw new UnauthorizedException;
        return await this.fintessCenterService.getFitnessCenters();
    }

    @Post()
    async create(@Request() request: Request): Promise<void> {
        const {userRole} = this.jwtService.authorizeAndGetJWTContent(request);
        if (userRole !== FitcomUserRole.fitcomAdministrator) throw new UnauthorizedException;
        const fitnessCenter = request.body as unknown as FitnessCenterForPost;
        return await this.fintessCenterService.create(fitnessCenter);
    }

}
