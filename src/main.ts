import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.useGlobalPipes(new ValidationPipe()); // Nest irá validar as entradas do body apartir da class que criamos para body das requisições

  await app.listen(3000);
}
bootstrap();
