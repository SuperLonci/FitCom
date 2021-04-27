
import { Controller, Post, Request, UnauthorizedException } from '@nestjs/common';
import { JwtService } from 'src/shared-services/jwt.service';
import { FitnessCenterForPost } from './fitness-center.interfaces';
import { FintessCenterService } from './fitness-center.service';

@Controller('fitness-centers')
export class FintessCenterController {

    constructor(
        private readonly fintessCenterService: FintessCenterService,
        private readonly jwtService: JwtService
    ) {}

    @Post()
    async create(@Request() request: Request): Promise<void> {
        const {adminId} = this.jwtService.authorizeAndGetJWTContent(request);
        if (!adminId) throw new UnauthorizedException;
        const fitnessCenter = request.body as unknown as FitnessCenterForPost;
        return await this.fintessCenterService.create(fitnessCenter);
    }

}
