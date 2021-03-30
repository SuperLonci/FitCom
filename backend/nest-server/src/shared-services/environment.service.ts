
import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import * as mysql from 'mysql2/promise';

@Injectable()
export class EnvironmentService {

    constructor(private configService: ConfigService) { }

    dbConfiguration(): mysql.ConnectionOptions {
        return {
            host: this.configService.get<string>('db_host'),
            user: this.configService.get<string>('db_user'),
            password: this.configService.get<string>('db_user_password'),
            database: this.configService.get<string>('db_database')
        };
    }

}
