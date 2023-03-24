import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import * as CookieParser from 'cookie-parser';
const SessionParser = require('cookie-session');

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.use(SessionParser({ keys: ['ssasajasa'] }));

  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: false,
    }),
  );
  await app.listen(3000);
}
bootstrap();
