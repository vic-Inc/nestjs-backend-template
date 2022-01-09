import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { ConfigurationsModule } from 'src/configurations/configurations.module';
import { HttpRequestModule } from 'src/http-request/http-request.module';
import { CurrencyApiProvider } from 'src/http-request/providers/currency/currency.provider';
import { CurrencyDao } from './currency.dao';
import { currencyModelDefinition } from './currency.schema';
import { CurrencyService } from './currency.service';

@Module({
  imports: [MongooseModule.forFeature([currencyModelDefinition]), ConfigurationsModule, HttpRequestModule],
  providers: [CurrencyService, CurrencyDao, CurrencyApiProvider],
  exports: [CurrencyService, CurrencyDao, CurrencyApiProvider],
})
export class CurrencyModule {}
