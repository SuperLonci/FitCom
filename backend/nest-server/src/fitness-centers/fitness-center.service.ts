
import { Injectable } from '@nestjs/common';
import { DbService } from './../shared-services/db.service';
import { FitnessCenterForAdministrationOverview, FitnessCenterForPost } from './fitness-center.interfaces';
import { v4 as uuidv4 } from 'uuid';
import { UserService } from 'src/users/user.service';
import { FitcomUserRole } from 'src/users/user.interfaces';


@Injectable()
export class FintessCenterService {

    constructor(
        private readonly dbService: DbService,
        private readonly userService: UserService
    ) {}

    async getFitnessCenters(): Promise<FitnessCenterForAdministrationOverview[]> {
        return await this.dbService.query<FitnessCenterForAdministrationOverview>(`
            SELECT Fitnesscenters.id, Fitnesscenters.title, Fitnesscenters.city, Fitnesscenters.ownerId, 
            CONCAT(Users.firstName, ' ', Users.lastName) as owner, 
            (Users.activationToken IS NOT NULL) as isPending
            FROM Fitnesscenters
            LEFT JOIN Users
            ON Fitnesscenters.ownerId = Users.id
        `);
    }

    async create(fitnessCenter: FitnessCenterForPost): Promise<void> {
        const fitnessCenterId = uuidv4();
        const {userId} = await this.userService.invite(fitnessCenter.ownerEmail, FitcomUserRole.fitnessCenterAdministrator);
        await this.dbService.query(`
            INSERT INTO Fitnesscenters (id, title, ownerId, createdAt, country, city, postCode, street, streetNumber, email, phoneNumber, faxNumber)
            VALUE ('${fitnessCenterId}', '${fitnessCenter.title}', '${userId}', CURRENT_DATE, '${fitnessCenter.country}', '${fitnessCenter.city}', '${fitnessCenter.postCode}', '${fitnessCenter.street}', '${fitnessCenter.streetNumber}', '${fitnessCenter.email}', '${fitnessCenter.phoneNumber}', '${fitnessCenter.faxNumber}')
        `);
        await this.dbService.query(`
            INSERT INTO FitnessCenterStaff (userId, fitnessCenterId)
            VALUE ('${userId}', '${fitnessCenterId}')
        `);
    }

}
