
import { Controller, Get, Request, UnauthorizedException } from '@nestjs/common';
import { JwtService } from './../shared-services/jwt.service';
import { FitnessCenterService } from './fitness-center.service';

@Controller('fitness-centers')
export class FitnessCenterController {

    constructor(
        private readonly fitnessCenterService: FitnessCenterService,
        private readonly jwtService: JwtService
    ) {}

    @Get()
    async getFitnessCenters(@Request() request: Request): Promise<any[]> {
        const {isFitcomAdministrator} = this.jwtService.verifyHttpRequest(request);
        if (!isFitcomAdministrator) throw new UnauthorizedException;
        return await this.fitnessCenterService.getFitnessCenters();
    }

}
