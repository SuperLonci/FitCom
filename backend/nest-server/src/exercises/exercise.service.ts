
import { Injectable } from '@nestjs/common';
import { DbService } from './../shared-services/db.service';

@Injectable()
export class ExerciseService {
    
    constructor(private readonly dbService: DbService) {}

    async getExercises(): Promise<any> {
        return await this.dbService.query(`
            SELECT
            Exercises.id,
            Exercises.title,
            Exercises.type
            FROM Exercises
        `);
    }

}
