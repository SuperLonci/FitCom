
import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { ServeStaticModule } from '@nestjs/serve-static';

import { DbService } from './_services/db.service';
import { EnvironmentService } from './_services/environment.service';
import { JwtService } from './_services/jwt.service';
import { MailService } from './_services/mail.service';

@Module({
    controllers: [],
    providers: [
        DbService,
        EnvironmentService,
        JwtService,
        MailService
    ],
    imports: [
        ConfigModule.forRoot(),
        ServeStaticModule.forRoot({
            rootPath:  `${__dirname}/../web-app`
        })
    ]
})
export class AppModule {}
