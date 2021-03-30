
import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DbService } from './shared-services/db.service';

@Module({
    controllers: [AppController],
    providers: [
        AppService, 
        DbService
    ]
})
export class AppModule { }
