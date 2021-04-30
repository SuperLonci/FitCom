
import { Injectable, NotFoundException } from '@nestjs/common';
import { DbService } from '../shared-services/db.service';
import { UserService } from './../users/user.service';
import { v4 as uuidv4 } from 'uuid';

@Injectable()
export class FitnessCenterStaffService {

    constructor(
        private readonly dbService: DbService,
        private readonly userService: UserService
    ) {}

    async getAll(): Promise<void> {
        //
    }
    
    async getOne(staffId: string): Promise<void> {
        const [staff] = await this.dbService.query(`
            DELETE FROM Users WHERE ...
        `);
        if (!staff) throw new NotFoundException;
        // return staff;
    }
    
    
    async create(email: string, creatorId: string): Promise<void> {
        // this.userService.invite()
    }

    
    async delete(staffId: string): Promise<void> {
        //
    }

}
