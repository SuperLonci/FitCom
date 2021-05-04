
import { Controller, Get, Param, Post, Request } from '@nestjs/common';
import { TrainingsplanForPostRequest } from './trainingsplan.interfaces';
import { TrainingsplanService } from './trainingsplan.service';

@Controller('trainingsplans')
export class TrainingsplanController {

    constructor(private readonly trainingsplanService: TrainingsplanService) {}

    @Get()
    async getTrainingsplans(): Promise<any> {
        return await this.trainingsplanService.getTrainingsplans();
    }

    @Get(':trainingsplanId')
    async getTrainingsplan(@Param('trainingsplanId') trainingsplanId: string): Promise<any> {
        return await this.trainingsplanService.getTrainingsplan(trainingsplanId);
    }

    @Post()
    async createTrainingsplan(@Request() request: Request): Promise<any> {
        const trainingsplan = request.body as unknown as TrainingsplanForPostRequest;
        const userId = 'eacd43b4-f1e1-430c-905a-2ae90710d6f4';
        return await this.trainingsplanService.createTrainingsplan(userId, trainingsplan);
    }

}
