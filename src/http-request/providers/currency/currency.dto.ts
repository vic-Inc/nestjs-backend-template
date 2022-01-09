import { JSONProperty } from 'src/decorators/serializer/serializer.decorator';

export class LatestCurrencyDto {
  @JSONProperty('data')
  conversions: Record<string, number>;
}
