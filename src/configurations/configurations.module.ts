import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { environmentFilePaths } from './configurations.configs';
import { ConfigurationsManager } from './configurations.manager';

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: environmentFilePaths,
    }),
  ],
  providers: [ConfigurationsManager],
  exports: [ConfigurationsManager],
})
export class ConfigurationsModule {}
