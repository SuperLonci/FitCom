
import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import * as mysql from 'mysql2/promise';

@Injectable()
export class EnvironmentService {

    root: string;
    dbConfiguration: mysql.ConnectionOptions;
    jwtPrivateKey: string;
    mailConfiguration: {
        name: string
        email: string
        password: string
    }

    constructor(private configService: ConfigService) {
        this.root = this.configService.get<string>('root'),
        this.dbConfiguration = {
            host: this.configService.get<string>('db_host'),
            user: this.configService.get<string>('db_user'),
            password: this.configService.get<string>('db_user_password'),
            database: this.configService.get<string>('db_database')
        };
        this.jwtPrivateKey = this.configService.get<string>('jwt_private_key');
        this.mailConfiguration = {
            name: this.configService.get<string>('mail_name'),
            email: this.configService.get<string>('mail_address'),
            password: this.configService.get<string>('mail_password')
        };
    }

}
