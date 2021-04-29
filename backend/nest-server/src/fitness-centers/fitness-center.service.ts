
import { Injectable } from '@nestjs/common';
import { StaffService } from './../staff/staff.service';
import { DbService } from './../shared-services/db.service';
import { FitnessCenterForAdministrationOverview, FitnessCenterForPost } from './fitness-center.interfaces';
import { v4 as uuidv4 } from 'uuid';


@Injectable()
export class FintessCenterService {

    constructor(
        private readonly dbService: DbService,
        private readonly staffService: StaffService
    ) {}

    async getFitnessCenters(): Promise<FitnessCenterForAdministrationOverview[]> {
        return await this.dbService.query<FitnessCenterForAdministrationOverview>(`
            SELECT id, title, city, ownerId FROM Fitnesscenters
        `);
    }

    async create(fitnessCenter: FitnessCenterForPost): Promise<void> {
        const fitnessCenterId = uuidv4();
        const ownerId = await this.staffService.create(fitnessCenterId, fitnessCenter.ownerEmail);
        await this.dbService.query(`
            INSERT INTO Fitnesscenters (id, title, ownerId, createdAt, country, city, postCode, street, streetNumber, email, phoneNumber, faxNumber)
            VALUE ('${fitnessCenterId}', '${fitnessCenter.title}', '${ownerId}', CURRENT_DATE, '${fitnessCenter.country}', '${fitnessCenter.city}', '${fitnessCenter.postCode}', '${fitnessCenter.street}', '${fitnessCenter.streetNumber}', '${fitnessCenter.email}', '${fitnessCenter.phoneNumber}', '${fitnessCenter.faxNumber}')
        `);
    }

}
