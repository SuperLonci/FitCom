
import { Injectable } from '@nestjs/common';
import { DbService } from 'src/_services/db.service';


@Injectable()
export class UserService {

    constructor(private readonly dbService: DbService) {}

    async test(): Promise<any> {
        return await this.dbService.query(`
            SHOW TABLES;
        `);
    }

}
