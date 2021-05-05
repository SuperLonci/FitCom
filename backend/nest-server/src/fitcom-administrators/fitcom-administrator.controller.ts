
import { Controller, Get, Post, Request, UnauthorizedException } from '@nestjs/common';
import { JwtService } from './../shared-services/jwt.service';
import { FitcomAdministratorForPostRequest, FitcomAdministrators } from './fitcom-administrator.interfaces';
import { FitcomAdministratorService } from './fitcom-administrator.service';

@Controller('fitcom-administrators')
export class FitcomAdministratorController {

    constructor(
        private readonly fitcomAdministratorService: FitcomAdministratorService,
        private readonly jwtService: JwtService
    ) {}

    @Get()
    async getFitcomAdministrators(@Request() request: Request): Promise<FitcomAdministrators> {
        const {isFitcomAdministrator} = this.jwtService.verifyHttpRequest(request);
        if (!isFitcomAdministrator) throw new UnauthorizedException;
        return await this.fitcomAdministratorService.getFitcomAdministrators();
    }

    @Post()
    async inviteFitcomAdministrator(@Request() request: Request): Promise<void> {
        const {userId, isFitcomAdministrator} = this.jwtService.verifyHttpRequest(request);
        if (!isFitcomAdministrator) throw new UnauthorizedException;
        const {email} = request.body as unknown as FitcomAdministratorForPostRequest;
        return await this.fitcomAdministratorService.inviteFitcomAdministrator(email, userId);
    }

}
