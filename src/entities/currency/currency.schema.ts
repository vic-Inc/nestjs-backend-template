import { ModelDefinition, Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema()
export class CurrencyModel {
  @Prop({ type: String, unique: true }) currencyCode: string;

  @Prop({ type: Object }) conversions: Record<string, number>;
}

export type CurrencyDocument = CurrencyModel & Document;

export const CurrencySchema = SchemaFactory.createForClass(CurrencyModel);

export const currencyModelDefinition: ModelDefinition = {
  name: CurrencyModel.name,
  schema: CurrencySchema,
};
