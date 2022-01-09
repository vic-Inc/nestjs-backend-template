import { ConsoleLogger, Module } from '@nestjs/common';
import { ScheduleModule } from '@nestjs/schedule';
import { ConfigurationsModule } from 'src/configurations/configurations.module';
import { CurrencyModule } from 'src/entities/currency/currency.module';
import { ScheduleService } from './schedule.service';
import { UpdateCurrencyTask } from './tasks/update-currency.task';

@Module({
  imports: [ScheduleModule.forRoot(), ConfigurationsModule, CurrencyModule],
  providers: [ScheduleService, ConsoleLogger, UpdateCurrencyTask],
  exports: [ScheduleService],
})
export class ScheduleTaskModule {}
