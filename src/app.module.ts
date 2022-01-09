import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { HttpRequestModule } from './http-request/http-request.module';
import { MongoModule } from './mongo/mongo.module';
import { ScheduleTaskModule } from './schedule/schedule.module';

@Module({
  imports: [ScheduleTaskModule, MongoModule, HttpRequestModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
