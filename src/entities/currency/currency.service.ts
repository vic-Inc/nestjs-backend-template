import { Injectable } from '@nestjs/common';
import { ConfigurationsManager } from 'src/configurations/configurations.manager';
import { LatestCurrencyDto } from 'src/http-request/providers/currency/currency.dto';
import { CurrencyApiProvider } from 'src/http-request/providers/currency/currency.provider';
import { CurrencyDao } from './currency.dao';

@Injectable()
export class CurrencyService {
  constructor(
    private readonly currencyApi: CurrencyApiProvider,
    private readonly currencyDao: CurrencyDao,
    private readonly configs: ConfigurationsManager,
  ) {}

  public updateCurrencyConversions = async (currencyCode: string) => {
    const latestConversions = await this.currencyApi.getCurrenciesConvertions(currencyCode);
    const filteredConversions = this.filterRequiredConversionsFromResponse(latestConversions);
    return this.createOrUpdateCurrency(currencyCode, filteredConversions);
  };

  public createOrUpdateCurrency = async (currencyCode: string, conversions: Record<string, number>) => {
    const currency = await this.currencyDao.findByCode(currencyCode);
    if (!currency) {
      return this.currencyDao.create(currencyCode, conversions);
    }
    return this.currencyDao.findOneAndUpdate(currencyCode, conversions);
  };

  private filterRequiredConversionsFromResponse = (latestConversions: LatestCurrencyDto) => {
    return this.configs.currency.conversions.reduce((mapping, currencyCode) => {
      return { ...mapping, [currencyCode]: latestConversions.conversions[currencyCode] };
    }, {});
  };
}
