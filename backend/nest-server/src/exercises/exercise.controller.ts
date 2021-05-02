
import { BadRequestException, Controller, Get, Param, Patch, Post, Put, Request } from '@nestjs/common';
import { Exercise, ExerciseForPost } from './exercise.interfaces';
import { ExerciseService } from './exercise.service';

@Controller('exercises')
export class ExerciseController {

    constructor(private readonly exerciseService: ExerciseService) {}

    @Get()
    async getExercises(): Promise<Exercise[]> {
        return await this.exerciseService.getExercises();
    }

    @Get(':exerciseId')
    async getExercise(@Param('exerciseId') exerciseId: string): Promise<Exercise> {
        return await this.exerciseService.getExercise(exerciseId);
    }

    @Post()
    async createExercise(@Request() request: Request): Promise<Exercise> {
        const exercise = request.body as unknown as ExerciseForPost;
        if (!('title' in exercise && 'requiresEquipment' in exercise))
            throw new BadRequestException;
        return await this.exerciseService.createExercise(exercise);
    }

    @Put()
    async putExercise(@Request() request: Request): Promise<void> {
        const exercise = request.body as unknown as Exercise;
        if (!('id' in exercise && 'title' in exercise && 'requiresEquipment' in exercise))
            throw new BadRequestException;
        return await this.exerciseService.putExercise(exercise);
    }



    // @Patch()
    // async patchExercise(@Request() request: Request): Promise<void> {

    // }

}
