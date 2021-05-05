
import { Injectable } from '@nestjs/common';
import { DbService } from 'src/shared-services/db.service';
import { FitcomAdministrator, FitcomAdministrators, InvitedFitcomAdministrator } from './fitcom-administrator.interfaces';

@Injectable()
export class FitcomAdministratorService {

    constructor(private readonly dbService: DbService) {}

    async getFitcomAdministrators(): Promise<FitcomAdministrators> {
        const administrators = await this.dbService.query<FitcomAdministrator>(`
            SELECT
            Users.id,
            Users.firstName,
            Users.lastName,
            Users.email,
            Users.birthDate,
            FitcomAdministrators.invitedBy,
            FitcomAdministrators.invitedAt,
            (
                SELECT CONCAT(Users.firstName, ' ', Users.lastName)
                FROM Users
                WHERE Users.id = FitcomAdministrators.invitedBy
            ) as invitedByName
            FROM FitcomAdministrators
            LEFT JOIN Users
            ON Users.id = FitcomAdministrators.userId WHERE Users.ActivationToken IS NULL
        `);
        const invitedAdministrators = await this.dbService.query<InvitedFitcomAdministrator>(`
            SELECT
            Users.id,
            Users.email,
            FitcomAdministrators.invitedAt,
            FitcomAdministrators.invitedBy,
            (
                SELECT CONCAT(Users.firstName, ' ', Users.lastName)
                FROM Users
                WHERE Users.id = FitcomAdministrators.invitedBy
            ) as invitedByName
            FROM FitcomAdministrators
            LEFT JOIN Users
            ON Users.id = FitcomAdministrators.userId WHERE Users.ActivationToken IS NOT NULL
        `);
        return {
            administrators: administrators,
            invitedAdministrators: invitedAdministrators
        };
    }

}
