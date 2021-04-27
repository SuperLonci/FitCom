
import { Injectable, NotFoundException } from '@nestjs/common';
import { DbService } from './../shared-services/db.service';
import { v4 as uuidv4 } from 'uuid';
import { MailService } from 'src/shared-services/mail.service';
import { StaffForPost } from './staff.interfaces';
import { JwtService } from 'src/shared-services/jwt.service';
import { EnvironmentService } from 'src/shared-services/environment.service';

@Injectable()
export class StaffService {

    constructor(
        private readonly dbService: DbService,
        private readonly mailService: MailService,
        private readonly jwtService: JwtService,
        private readonly environmentService: EnvironmentService
    ) {}

    async register(activationToken: string, staff: StaffForPost): Promise<any> {
        const [user] = await this.dbService.query<{id: string, isAdmin: boolean}>(`
            SELECT id FROM FitnessCenterStaff WHERE activationToken = '${activationToken}'
        `);
        if (!user) throw new NotFoundException;
        await this.dbService.query(`
            UPDATE FitnessCenterStaff
            SET
            gender = '${staff.gender}',
            firstName = '${staff.firstName}',
            lastName = '${staff.lastName}',
            birthDate = '${staff.birthDate}',
            password = SHA2(CONCAT('${staff.password}', '${user.id}'), 512),
            activationToken = NULL
            WHERE id = '${user.id}'
        `);
        return {
            jwt: this.jwtService.sign({
                staffId: user.id,
                isAdmin: user.isAdmin
            }),
            user: {
                // id etc
            }
        };
    }

    async create(fitnessCenterId: string, staffEmail: string): Promise<string> {
        const staffId: string = uuidv4();
        const activationToken: string = uuidv4();
        await this.dbService.query(`
            INSERT INTO FitnessCenterStaff (id, fitnessCenterId, isAdmin, email, activationToken)
            VALUE ('${staffId}', '${fitnessCenterId}', TRUE, '${staffEmail}', '${activationToken}')
        `);
        this.mailService.sendMail(staffEmail, 'Registriere dich als Mitarbeiter in deinem Fitnessstudio', `${this.environmentService.frontendRoot}/Registrieren/${activationToken}`);
        return staffId;
    }

}
