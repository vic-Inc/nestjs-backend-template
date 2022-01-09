import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CurrencyDocument, CurrencyModel } from './currency.schema';

@Injectable()
export class CurrencyDao {
  constructor(@InjectModel(CurrencyModel.name) private readonly currencyModel: Model<CurrencyDocument>) {}

  public create = (currencyCode: string, conversions: Record<string, number>) => {
    return this.currencyModel.create({ currencyCode, conversions });
  };

  public findByCode = (currencyCode: string) => {
    return this.currencyModel.findOne({ currencyCode });
  };

  public findOneAndUpdate = (currencyCode: string, conversions: Record<string, number>) => {
    return this.currencyModel.findOneAndUpdate({ currencyCode }, { $set: { conversions } });
  };
}
