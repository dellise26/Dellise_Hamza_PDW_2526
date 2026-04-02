import { NestFactory } from '@nestjs/core';
import { ValidationPipe } from '@nestjs/common';
import { AppModule } from './app.module';
import { HttpExceptionFilter } from '@common/config/exception/http-exception.filter';
import { ValidationException } from '@common/api';
import { swaggerConfiguration } from '@common/documentation/swagger.configuration';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // Activation du filtre global [cite: 333]
  app.useGlobalFilters(new HttpExceptionFilter());

  // Activation de la validation globale avec notre exception personnalisée [cite: 345]
  app.useGlobalPipes(
    new ValidationPipe({
      exceptionFactory: (validationErrors) =>
        new ValidationException(validationErrors),
    }),
  );

  swaggerConfiguration.config(app);

  await app.listen(3000);
}
bootstrap();
