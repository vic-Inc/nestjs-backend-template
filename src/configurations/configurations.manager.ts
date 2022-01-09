import { Injectable } from '@nestjs/common';
import { variableNames } from './configurations.configs';

@Injectable()
export class ConfigurationsManager {
  public get app() {
    return {
      port: process.env[variableNames.app.port],
    };
  }

  public get mongo() {
    return {
      port: process.env[variableNames.mongo.port],
      host: process.env[variableNames.mongo.host],
      user: process.env[variableNames.mongo.user],
      password: process.env[variableNames.mongo.password],
      query: process.env[variableNames.mongo.query],
      database: process.env[variableNames.mongo.database],
    };
  }

  public get currency() {
    return {
      endpoint: process.env[variableNames.currency.endpoint],
      key: process.env[variableNames.currency.key],
      conversions: process.env[variableNames.currency.conversions]?.split(','),
      required: process.env[variableNames.currency.required]?.split(','),
    };
  }
}
