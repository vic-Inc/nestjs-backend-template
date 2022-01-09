import { HttpModule, HttpService } from '@nestjs/axios';
import { Module } from '@nestjs/common';
import { ConfigurationsModule } from 'src/configurations/configurations.module';
import { CurrencyApiProvider } from './providers/currency/currency.provider';

@Module({
  imports: [HttpModule, ConfigurationsModule],
  exports: [CurrencyApiProvider, HttpModule],
  providers: [CurrencyApiProvider],
})
export class HttpRequestModule {}
