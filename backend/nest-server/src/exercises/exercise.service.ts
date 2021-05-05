
import { Injectable } from '@nestjs/common';
import { DbService } from './../shared-services/db.service';
import { Exercise, ExerciseForPostRequest } from './exercise.interfaces';
import { v4 as uuidv4 } from 'uuid';

@Injectable()
export class ExerciseService {
    
    constructor(private readonly dbService: DbService) {}

    async getExercises(): Promise<Exercise[]> {
        return await this.dbService.query<Exercise>(`
            SELECT
            Exercises.id,
            Exercises.type,
            Exercises.requiresEquipment,
            Exercises.requiresTrainingspartner,
            Exercises.title,
            Exercises.description
            FROM Exercises
        `).then(
            (exercises => exercises.map(exercise => {
                exercise.requiresEquipment = Boolean(exercise.requiresEquipment);
                exercise.requiresTrainingspartner = Boolean(exercise.requiresTrainingspartner);
                return exercise;
            }))
        );
    }

    async createExercise(exercise: ExerciseForPostRequest): Promise<Exercise> {
        const exerciseId = uuidv4();
        await this.dbService.query(`
            INSERT INTO Exercises (id, type, requiresEquipment, requiresTrainingspartner, title, description)
            VALUE ('${exerciseId}', '${exercise.type}', ${exercise.requiresEquipment}, ${exercise.requiresTrainingspartner}, '${exercise.title}', '${exercise.description}')
        `);
        return { id: exerciseId, ...exercise };
    }

}
