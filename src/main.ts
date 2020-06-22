import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import * as bodyParser from 'body-parser';

async function bootstrap() {
  const app = await NestFactory.create(AppModule, {
    bodyParser: true,
  });
  // app.use(bodyParser.json());
  // app.use(bodyParser.urlencoded({ extended: true }));
  app.enableCors();
  await app.listen(3000);
  console.log('Server loaded at 3000....');
}
bootstrap();
