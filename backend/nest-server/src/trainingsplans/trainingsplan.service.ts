
import { Injectable, NotFoundException } from '@nestjs/common';
import { DbService } from './../shared-services/db.service';
import { v4 as uuidv4 } from 'uuid';

import { TrainingsplanForPostRequest } from './trainingsplan.interfaces';

@Injectable()
export class TrainingsplanService {

    constructor(private readonly dbService: DbService) {}

    async getTrainingsplans(): Promise<any> {
        return await this.dbService.query(`
            SELECT Trainingsplans.id, Trainingsplans.title, Trainingsplans.description, Trainingsplans.creatorId, Users.firstName as creatorFirstName, Users.lastname as creatorLastName FROM Trainingsplans
            LEFT JOIN Users
            ON Users.id = Trainingsplans.creatorId
        `);
    }

    async getTrainingsplan(trainingsplanId: string): Promise<any> {
        const [trainingsplan] = await this.dbService.query<{id: string, trainingsDays: {id: string, exercises: any[]}[]}>(`
            SELECT Trainingsplans.id, Trainingsplans.title, Trainingsplans.description, Trainingsplans.creatorId, Users.firstName as creatorFirstName, Users.lastname as creatorLastName FROM Trainingsplans
            LEFT JOIN Users
            ON Users.id = Trainingsplans.creatorId
            WHERE Trainingsplans.id = '${trainingsplanId}'
        `);
        
        if (!trainingsplan) throw new NotFoundException;
        
        trainingsplan.trainingsDays = await this.dbService.query(`
            SELECT * FROM TrainingsplanDays WHERE trainingsplanId = '${trainingsplan.id}'
        `);
        
        for (const trainingsplanDay of trainingsplan.trainingsDays) {
            trainingsplanDay.exercises = await this.dbService.query(`
                SELECT TrainingsplanDayExercises.id, TrainingsplanDayExercises.index, TrainingsplanDayExercises.exerciseId, Exercises.title, Exercises.description, FitnessCenterExercises.fintessCentersDescription, Exercises.requiresEquipment FROM TrainingsplanDayExercises
                LEFT JOIN FitnessCenterExercises
                ON FitnessCenterExercises.id = TrainingsplanDayExercises.exerciseId
                LEFT JOIN Exercises
                ON FitnessCenterExercises.exerciseId = Exercises.id
                WHERE trainingsplanDayId = '${trainingsplanDay.id}'
            `);

            for (const trainingsplanDayExercises of trainingsplanDay.exercises) {
                trainingsplanDayExercises.requiresEquipment = Boolean(trainingsplanDayExercises.requiresEquipment);
                trainingsplanDayExercises.sets = await this.dbService.query(`
                    SELECT * FROM TrainingsplanDayExerciseSets WHERE trainingsplanDayExerciseId = '${trainingsplanDayExercises.id}'
                `);
            }
        }
        
        return trainingsplan;
    }

    async createTrainingsplan(userId: string, trainingsplan: TrainingsplanForPostRequest): Promise<any> {
        const trainingsplanId = uuidv4();
        await this.dbService.query(`
            INSERT INTO Trainingsplans (id, creatorId, title, description)
            VALUE ('${trainingsplanId}', '${userId}', '${trainingsplan.title}', '${trainingsplan.description}')
        `);

        trainingsplan.trainingsplanDays.forEach(async (trainingsplanDay) => {
            const trainingsplanDayId = uuidv4();
            await this.dbService.query(`
                INSERT INTO TrainingsplanDays (id, trainingsplanId, \`index\`, title, description)
                VALUE ('${trainingsplanDayId}', '${trainingsplanId}', ${trainingsplanDay.index}, '${trainingsplanDay.title}', '${trainingsplanDay.description}')
            `);

            trainingsplanDay.trainingsplanDayExercises.forEach(async trainingsplanDayExercise => {
                const trainingsplanDayExerciseId = uuidv4();
                await this.dbService.query(`
                    INSERT INTO TrainingsplanDayExercises (id, trainingsplanDayId, \`index\`, exerciseId)
                    VALUE ('${trainingsplanDayExerciseId}', '${trainingsplanDayId}', ${trainingsplanDayExercise.index}, '${trainingsplanDayExercise.exerciseId}')
                `);

                trainingsplanDayExercise.trainingsplanDayExerciseSets.forEach(async trainingsplanDayExerciseSet => {
                    const trainingsplanDayExerciseSetId = uuidv4();
                    await this.dbService.query(`
                        INSERT INTO TrainingsplanDayExerciseSets (id, trainingsplanDayExerciseId, \`index\`, weight, repeatments)
                        VALUE ('${trainingsplanDayExerciseSetId}', '${trainingsplanDayExerciseId}', ${trainingsplanDayExerciseSet.index}, ${trainingsplanDayExerciseSet.weight}, ${trainingsplanDayExerciseSet.repeatments})
                    `);
                });
            });
        });

        return await this.getTrainingsplan(trainingsplanId);
    }

}
