
import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { ServeStaticModule } from '@nestjs/serve-static';
import { UserController } from './users/user.controller';
import { UserService } from './users/user.service';

import { DbService } from './_services/db.service';
import { EnvironmentService } from './_services/environment.service';
import { JwtService } from './_services/jwt.service';
import { MailService } from './_services/mail.service';

@Module({
    controllers: [
        UserController
    ],
    providers: [
        DbService,
        EnvironmentService,
        JwtService,
        MailService,
        UserService
    ],
    imports: [
        ConfigModule.forRoot(),
        ServeStaticModule.forRoot({
            rootPath:  `${__dirname}/../web-app`
        })
    ]
})
export class AppModule {}
