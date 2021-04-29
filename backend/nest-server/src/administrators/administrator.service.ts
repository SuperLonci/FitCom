
import { Injectable, NotFoundException } from '@nestjs/common';
import { DbService } from './../shared-services/db.service';
import { Administrator, AdministratorForAdministrationOverview, FitcomAdministratorsOverview } from './administrator.interfaces';

@Injectable()
export class AdministratorServcie {

    constructor(private readonly dbService: DbService) {}

    async getAdministrators(): Promise<FitcomAdministratorsOverview> {
        const administrators = await this.dbService.query<AdministratorForAdministrationOverview>(`
            SELECT id, firstName, lastName FROM Users WHERE role = 'fitcomAdministrator' AND activationToken IS NULL
        `);
        const pendingAdministrators = await this.dbService.query<{id: string, email: string}>(`
            SELECT id, email FROM Users WHERE role = 'fitcomAdministrator' AND activationToken IS NOT NULL
        `);
        return {
            administrators: administrators,
            pendingAdministrators: pendingAdministrators
        };
    }

    async getAdministrator(userId: string): Promise<Administrator> {
        const [administrator] = await this.dbService.query<Administrator>(`
            SELECT id, gender, firstName, lastName, birthDate, email FROM Users WHERE id = '${userId}'
        `);
        if (!administrator) throw new NotFoundException;
        return administrator;
    }

}
