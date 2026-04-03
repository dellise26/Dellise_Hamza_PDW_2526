import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Credential, Token } from './model';
import { TokenService } from './jwt/token.service';

@Module({
  imports: [TypeOrmModule.forFeature([Credential, Token])],
  providers: [TokenService],
})
export class SecurityModule {}
