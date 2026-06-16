import { NestFactory } from '@nestjs/core';
import { ValidationPipe, Logger } from '@nestjs/common';
import { AppModule } from './home/app.module';
import { ConfigKey, configManager, HttpExceptionFilter } from '@common/config';
import { ValidationException, ApiInterceptor } from '@common/api';
import { swaggerConfiguration } from '@common/documentation';

const bootstrap = async () => {
  const app = await NestFactory.create(AppModule);
  app.enableCors({ origin: 'http://localhost:4200' });
  app.setGlobalPrefix(configManager.getValue(ConfigKey.APP_BASE_URL));
  swaggerConfiguration.config(app);
  app.useGlobalFilters(new HttpExceptionFilter());
  app.useGlobalPipes(
    new ValidationPipe({
      exceptionFactory: (validationErrors) =>
        new ValidationException(validationErrors),
    }),
  );
  app.useGlobalInterceptors(new ApiInterceptor());
  await app.listen(parseInt(configManager.getValue(ConfigKey.APP_PORT), 10));
};

bootstrap().then(() => {
  const logger = new Logger('Main Logger');
  logger.log('Server is started !!');
});
