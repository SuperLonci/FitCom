
import { Injectable } from '@nestjs/common';
import { DbService } from './../shared-services/db.service';
import { StaffForInitialPost } from './staff.interfaces';
import { v4 as uuidv4 } from 'uuid';
import { MailService } from 'src/shared-services/mail.service';

@Injectable()
export class StaffService {

    constructor(
        private readonly dbService: DbService,
        private readonly mailService: MailService
    ) {}

    async create(fitnessCenterId: string, staff: StaffForInitialPost): Promise<string> {
        const staffId: string = uuidv4();
        const activationToken: string = uuidv4();
        await this.dbService.query(`
            INSERT INTO FitnessCenterStaff (id, fitnessCenterId, isAdmin, gender, firstName, lastName, birthDate, email, password, activationToken)
            VALUE ('${staffId}', '${fitnessCenterId}', TRUE, '${staff.gender}', '${staff.firstName}', '${staff.lastName}', ${staff.birthDate}, '${staff.email}', '', '${activationToken}')
        `);
        this.mailService.sendMail(staff.email, 'Aktivieren deinen Account', 'Link auf Seite zum vervollständigen des benutzerkontos und festlegen des Passworts');
        return staffId;
    }

}
