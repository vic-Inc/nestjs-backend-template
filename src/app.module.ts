import { Module } from '@nestjs/common';

import { CurrencyModule } from './entities/currency/currency.module';
import { HttpRequestModule } from './http-request/http-request.module';
import { MongoModule } from './mongo/mongo.module';
import { ScheduleTaskModule } from './schedule/schedule.module';

@Module({
  imports: [ScheduleTaskModule, MongoModule, HttpRequestModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
