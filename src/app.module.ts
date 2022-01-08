import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongoModule } from './mongo/mongo.module';
import { ScheduleTaskModule } from './schedule/schedule.module';

@Module({
  imports: [ScheduleTaskModule, MongoModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
