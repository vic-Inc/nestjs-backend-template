import { Injectable } from '@nestjs/common';
import { ConfigurationsManager } from 'src/configurations/configurations.manager';
import { SerializeResponse } from 'src/decorators/serializer/serializer.decorator';
import { HttpRequestProvider } from 'src/http-request/http-request.provider';
import { LatestCurrencyDto } from './currency.dto';

@Injectable()
export class CurrencyApiProvider extends HttpRequestProvider {
  constructor(private readonly configs: ConfigurationsManager) {
    super(process.env.CURRENCY_ENDPOINT);
  }

  @SerializeResponse(LatestCurrencyDto)
  public getCurrenciesConvertions(baseCurrency: string) {
    return this.get<LatestCurrencyDto>('/api/v2/latest', {
      params: {
        apikey: this.configs.currency.key,
        base_currency: baseCurrency,
      },
    });
  }
}
