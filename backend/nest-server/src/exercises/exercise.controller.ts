
import { Controller, Get, Post, Request } from '@nestjs/common';
import { Exercise, ExerciseForPostRequest } from './exercise.interfaces';
import { ExerciseService } from './exercise.service';

@Controller('exercises')
export class ExerciseController {
    
    constructor(private readonly exerciseService: ExerciseService) {}

    @Get()
    async getExercises(): Promise<Exercise[]> {
        return await this.exerciseService.getExercises();
    }

    @Post()
    async createExercise(@Request() request: Request): Promise<Exercise> {
        const exercise = request.body as unknown as ExerciseForPostRequest;
        return await this.exerciseService.createExercise(exercise);
    }

}
