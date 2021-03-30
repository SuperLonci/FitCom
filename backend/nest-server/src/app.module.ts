
import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DbService } from './shared-services/db.service';
import { EnvironmentService } from './shared-services/environment.service';

@Module({
    controllers: [AppController],
    providers: [
        AppService, 
        DbService,
        EnvironmentService
    ],
    imports: [ConfigModule.forRoot()]
})
export class AppModule { }
