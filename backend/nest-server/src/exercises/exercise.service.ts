
import { Injectable, NotFoundException } from '@nestjs/common';
import { DbService } from './../shared-services/db.service';
import { v4 as uuidv4 } from 'uuid';
import { Exercise, ExerciseForPost } from './exercise.interfaces';

@Injectable()
export class ExerciseService {

    constructor(private readonly dbService: DbService) {}

    async getExercises(): Promise<Exercise[]> {
        const exercises = await this.dbService.query<Exercise>(`
            SELECT id, title, requiresEquipment
            FROM Exercises
        `);
        exercises.forEach(exercise => exercise.requiresEquipment = Boolean(exercise.requiresEquipment));
        return exercises;
    }

    async getExercise(exerciseId: string): Promise<Exercise> {
        const [exercise] = await this.dbService.query<Exercise>(`
            SELECT id, title, requiresEquipment
            FROM Exercises WHERE id = '${exerciseId}'
        `);
        if (!exercise) throw new NotFoundException;
        exercise.requiresEquipment = Boolean(exercise.requiresEquipment);
        return exercise;
    }

    async createExercise(exercise: ExerciseForPost): Promise<Exercise> {
        const exerciseId = uuidv4();
        await this.dbService.query<Exercise>(`
            INSERT INTO Exercises (id, title, requiresEquipment) VALUE
            ('${exerciseId}', '${exercise.title}', ${exercise.requiresEquipment})
        `);
        return { id: exerciseId, ...exercise };
    }

    async putExercise(exercise: Exercise): Promise<void> {
        await this.dbService.query<Exercise>(`
            UPDATE Exercises SET
            title = '${exercise.title}',
            requiresEquipment = ${exercise.requiresEquipment}
            WHERE id = '${exercise.id}'
        `);
    }

}
