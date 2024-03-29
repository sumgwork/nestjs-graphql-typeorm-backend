import { BaseExceptionFilter, NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalFilters(new BaseExceptionFilter());

  await app.listen(process.env.PORT || 4000);
}
bootstrap();

console.log('process.env.NODE_ENV', process.env.NODE_ENV);
