
import { Controller, Get, Request, UnauthorizedException } from '@nestjs/common';
import { JwtService } from './../shared-services/jwt.service';
import { FitcomAdministrators } from './fitcom-administrator.interfaces';
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

}
