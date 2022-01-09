import { Injectable } from '@nestjs/common';
import { HttpRequestProvider } from 'src/http-request/http-request.provider';

@Injectable()
export class KunaApiProvider extends HttpRequestProvider {
  constructor() {
    super(process.env.KUNA_ENDPOINT);
  }

  public getCryptoInformation = (marketCodes: string) => {
    return this.post('/v3/tickers', {
      params: { symbols: marketCodes },
    });
  };
}
