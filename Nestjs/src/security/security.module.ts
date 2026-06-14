import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { JwtModule } from '@nestjs/jwt';
import { Credential, Token } from './model';
import { TokenService } from './jwt/token.service';
import { SecurityService } from './service/security.service';
import { SecurityController } from './security.controller';
import { configManager } from '@common/config';
import { ConfigKey } from '@common/config/enum';

@Module({
  imports: [
    JwtModule.register({
      global: true,
      secret: configManager.getValue(ConfigKey.JWT_TOKEN_SECRET),
      signOptions: {
        expiresIn: configManager.getValue(ConfigKey.JWT_TOKEN_EXPIRE_IN) as any,
      },
    }),
    TypeOrmModule.forFeature([Credential, Token]),
  ],
  exports: [SecurityService],
  providers: [SecurityService, TokenService],
  controllers: [SecurityController],
})
export class SecurityModule {}