import { Injectable } from '@nestjs/common';
import { Cron, CronExpression, Interval } from '@nestjs/schedule';
import { UpdateCurrencyTask } from './tasks/update-currency.task';

@Injectable()
export class ScheduleService {
  constructor(private readonly updateCurrency: UpdateCurrencyTask) {}

  @Cron(CronExpression.EVERY_8_HOURS)
  public updateCurrencyConversions() {
    this.updateCurrency.execute();
  }

  // TODO: implement
  @Cron(CronExpression.EVERY_9_HOURS)
  public sendNotificationToUserIfCryptoIsAppropriate() {}
}
