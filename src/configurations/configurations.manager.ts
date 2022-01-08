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
      connectionString: process.env[variableNames.mongo.connectionString],
    };
  }
}
