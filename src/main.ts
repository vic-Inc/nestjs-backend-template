import { INestApplication, ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { validationPipeOptions } from './app.configs';
import { AppModule } from './app.module';

const initializeGlobalPipes = (app: INestApplication) => {
  app.useGlobalPipes(new ValidationPipe(validationPipeOptions));
};

(async () => {
  const app = await NestFactory.create(AppModule);
  initializeGlobalPipes(app);
  await app.listen(process.env.PORT || 4000);
})();
