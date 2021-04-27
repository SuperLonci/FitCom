
import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { ServeStaticModule } from '@nestjs/serve-static';
import { join } from 'path';
import { AdministratorContoller } from './administrators/administrator.controller';
import { AdministratorServcie } from './administrators/administrator.service';
import { FintessCenterController } from './fitness-centers/fitness-center.controller';
import { FintessCenterService } from './fitness-centers/fitness-center.service';

import { DbService } from './shared-services/db.service';
import { EnvironmentService } from './shared-services/environment.service';
import { JwtService } from './shared-services/jwt.service';
import { MailService } from './shared-services/mail.service';
import { StaffController } from './staff/staff.controller';
import { StaffService } from './staff/staff.service';

@Module({
    controllers: [
        AdministratorContoller,
        FintessCenterController,
        StaffController
    ],
    providers: [
        DbService,
        EnvironmentService,
        JwtService,
        MailService,
        AdministratorServcie,
        FintessCenterService,
        StaffService
    ],
    imports: [
        ConfigModule.forRoot({ envFilePath:  ['.env', '../.env'] }),
        ServeStaticModule.forRoot({
            rootPath: join(__dirname, '..', 'angular-frontend')
        })
    ]
})
export class AppModule {}
