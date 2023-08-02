import { NestFactory } from '@nestjs/core';
import { AppModule } from './modules/app/app.module';
// Для доступа к env
import { ConfigService } from '@nestjs/config';
// для валидации ValidationPipe
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const configService = app.get(ConfigService);
  const port = configService.get('port');

  app.useGlobalPipes(new ValidationPipe());

  await app.listen(port);
}
bootstrap();
