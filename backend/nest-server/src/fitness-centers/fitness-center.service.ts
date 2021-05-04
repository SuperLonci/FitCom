
import { Injectable } from '@nestjs/common';
import { DbService } from './../shared-services/db.service';

@Injectable()
export class FitnessCenterService {

    constructor(private readonly dbService: DbService) {}

    async getFitnessCenters(): Promise<any[]> {
        return await this.dbService.query(`
            SELECT
            FitnessCenters.id,
            FitnessCenters.title
            FROM FitnessCenters
        `);
    }

}
