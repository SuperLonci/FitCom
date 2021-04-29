
import { Injectable } from '@nestjs/common';
import { DbService } from '../shared-services/db.service';

@Injectable()
export class FitnessCenterStaffService {

    constructor(private readonly dbService: DbService) {}

    // async getStaff(): Promise<void> {}

    // async getStaff(userId: string): Promise<void> {}

}
