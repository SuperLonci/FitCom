
import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { ServeStaticModule } from '@nestjs/serve-static';
import { join } from 'path';
import { ExerciseController } from './exercises/exercise.controller';
import { ExerciseService } from './exercises/exercise.service';
import { FitnessCenterController } from './fitness-centers/fitness-center.controller';
import { FitnessCenterService } from './fitness-centers/fitness-center.service';

import { DbService } from './shared-services/db.service';
import { EnvironmentService } from './shared-services/environment.service';
import { JwtService } from './shared-services/jwt.service';
import { MailService } from './shared-services/mail.service';
import { TrainingsplanController } from './trainingsplans/trainingsplan.controller';
import { TrainingsplanService } from './trainingsplans/trainingsplan.service';
import { UserController } from './users/user.controller';
import { UserService } from './users/user.service';

@Module({
    controllers: [
        UserController,
        ExerciseController,
        FitnessCenterController,
        TrainingsplanController
    ],
    providers: [
        DbService,
        EnvironmentService,
        JwtService,
        MailService,

        UserService,
        ExerciseService,
        FitnessCenterService,
        TrainingsplanService
    ],
    imports: [
        ConfigModule.forRoot(),
        ServeStaticModule.forRoot({
            rootPath: join(__dirname, '..', 'angular-frontend')
        })
    ]
})
export class AppModule {}
