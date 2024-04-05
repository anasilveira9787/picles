import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ShelterModule } from './shelter/shelter.module';
import { MongooseModule } from '@nestjs/mongoose';

require('dotenv').config();

@Module({
  imports: [ShelterModule, 
  MongooseModule.forRoot('connectionString')],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
