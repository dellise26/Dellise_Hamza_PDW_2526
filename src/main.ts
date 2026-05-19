import { NestFactory } from '@nestjs/core';
import { ValidationPipe } from '@nestjs/common';
import { AppModule } from './home/app.module';
import { ValidationException } from '@common/api';
import { HttpExceptionFilter } from '@common/config';
import { swaggerConfiguration } from '@common/documentation';
import { ApiInterceptor } from '@common/api';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.useGlobalFilters(new HttpExceptionFilter());

  app.useGlobalPipes(
    new ValidationPipe({
      exceptionFactory: (validationErrors) =>
        new ValidationException(validationErrors),
    }),
  );

  app.useGlobalInterceptors(new ApiInterceptor());

  swaggerConfiguration.config(app);

  await app.listen(3000);
}
bootstrap();