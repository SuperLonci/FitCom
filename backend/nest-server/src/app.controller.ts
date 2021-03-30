
import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';
import { DbService } from './shared-services/db.service';

@Controller()
export class AppController {
    constructor(private readonly appService: AppService, private dbService: DbService) {}

    @Get('test')
    async getHello(): Promise<{Tables_in_db_fitcom: string}[]> {
        return await this.dbService.query<{Tables_in_db_fitcom: string}>('SHOW TABLES');
    }
}
