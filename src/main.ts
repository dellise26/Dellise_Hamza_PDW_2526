import { NestFactory } from '@nestjs/core';
import { ValidationPipe } from '@nestjs/common';
import { AppModule } from './home/app.module';
import { ValidationException } from '@common/api';
import { HttpExceptionFilter } from '@common/config';
import { swaggerConfiguration } from '@common/documentation';

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
