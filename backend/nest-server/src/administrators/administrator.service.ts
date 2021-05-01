
import { Injectable, NotFoundException } from '@nestjs/common';
import { DbService } from './../shared-services/db.service';
import { UserService } from './../users/user.service';

import { Administrator, AdministratorForAdministrationOverview, FitcomAdministratorsOverview } from './administrator.interfaces';
import { FitcomUserRole, User } from './../users/user.interfaces';

@Injectable()
export class AdministratorServcie {

    constructor(
        private readonly dbService: DbService,
        private readonly userService: UserService
    ) {}

    async getAll(): Promise<void> {
        await this.dbService.query(`
            SELECT id, role, firstName, createdAt, createdBy, (activationToken IS NOT NULL) as invitationPending FROM Users
        `);
    }
    
    // async getOne(administratorId: string): Promise<User> {
    //     return await this.userService.get(administratorId, `role = '${FitcomUserRole.fitcomAdministrator}'`);
    // }
    
    async create(email: string, creatorId: string): Promise<void> {
        this.userService.inviteUser(email, FitcomUserRole.fitcomAdministrator, creatorId);
    }

    
    async delete(administratorId: string): Promise<void> {
        await this.dbService.query(`
            DELETE FROM Users WHERE ... ${administratorId}
        `);
    }







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
