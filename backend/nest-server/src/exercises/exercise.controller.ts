
import { Controller, Get } from '@nestjs/common';
import { ExerciseService } from './exercise.service';

@Controller('exercises')
export class ExerciseController {
    
    constructor(private readonly exerciseService: ExerciseService) {}

    @Get()
    async getExercises(): Promise<any> {
        return await this.exerciseService.getExercises();
    }

}
