import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import helmet from 'helmet';

declare const publicRouter: unknown;

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.use(helmet());
  app.use('/public', publicRouter);
  await app.listen(3000);
}
