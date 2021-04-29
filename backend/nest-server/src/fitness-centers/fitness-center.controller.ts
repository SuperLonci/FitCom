
import { Controller, Get, Post, Request, UnauthorizedException } from '@nestjs/common';
import { JwtService } from 'src/shared-services/jwt.service';
import { JwtContent } from 'src/users/user.interfaces';
import { FitnessCenterForPost } from './fitness-center.interfaces';
import { FintessCenterService } from './fitness-center.service';

@Controller('fitness-centers')
export class FintessCenterController {

    constructor(
        private readonly fintessCenterService: FintessCenterService,
        private readonly jwtService: JwtService
    ) {}
    
    @Get()
    async getFitnessCenterOverview(@Request() request: Request): Promise<void> {
        const {userRole} = this.jwtService.authorizeAndGetJWTContent<JwtContent>(request);
        console.log(userRole);
    }

    // @Post()
    // async create(@Request() request: Request): Promise<void> {
    //     const {adminId} = this.jwtService.authorizeAndGetJWTContent(request);
    //     if (!adminId) throw new UnauthorizedException;
    //     const fitnessCenter = request.body as unknown as FitnessCenterForPost;
    //     return await this.fintessCenterService.create(fitnessCenter);
    // }

}
