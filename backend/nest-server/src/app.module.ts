
import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { ServeStaticModule } from '@nestjs/serve-static';
import { join } from 'path';
import { AdministratorContoller } from './administrators/administrator.controller';
import { AdministratorServcie } from './administrators/administrator.service';
import { FintessCenterController } from './fitness-centers/fitness-center.controller';
import { FintessCenterService } from './fitness-centers/fitness-center.service';
import { UserController } from './users/user.controller';
import { UserService } from './users/user.service';

import { DbService } from './shared-services/db.service';
import { EnvironmentService } from './shared-services/environment.service';
import { JwtService } from './shared-services/jwt.service';
import { MailService } from './shared-services/mail.service';
import { FitnessCenterStaffController } from './fitness-center-staff/fitness-center-staff.controller';
import { FitnessCenterStaffService } from './fitness-center-staff/fitness-center-staff.service';
import { ExerciseController } from './exercises/exercise.controller';
import { ExerciseService } from './exercises/exercise.service';

@Module({
    controllers: [
        UserController,
        
        AdministratorContoller,
        FintessCenterController,
        FitnessCenterStaffController,
        ExerciseController
    ],
    providers: [
        DbService,
        EnvironmentService,
        JwtService,
        MailService,
        
        UserService,
        ExerciseService,

        AdministratorServcie,
        FintessCenterService,
        FitnessCenterStaffService
    ],
    imports: [
        ConfigModule.forRoot({ envFilePath:  ['.env', '../.env'] }),
        ServeStaticModule.forRoot({
            rootPath: join(__dirname, '..', 'angular-frontend')
        })
    ]
})
export class AppModule {}
