import { INestApplication, ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { validationPipeOptions } from './app.configs';
import { AppModule } from './app.module';

(async () => {
  const app = await NestFactory.create(AppModule);

  app.useGlobalPipes(new ValidationPipe(validationPipeOptions));

  await app.listen(process.env.PORT || 4000);
})();
