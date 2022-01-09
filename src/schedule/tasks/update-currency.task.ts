import { ConsoleLogger, Injectable } from '@nestjs/common';
import { ConfigurationsManager } from 'src/configurations/configurations.manager';
import { Log } from 'src/decorators/log/log.decorator';
import { CurrencyService } from 'src/entities/currency/currency.service';
import { ScheduledTask } from '../schedule.types';

@Injectable()
export class UpdateCurrencyTask implements ScheduledTask {
  constructor(private readonly currencyService: CurrencyService, private readonly configs: ConfigurationsManager) {}

  @Log
  public async execute() {
    for (const currencyCode of this.configs.currency.required) {
      await this.currencyService.updateCurrencyConversions(currencyCode);
    }
  }
}
