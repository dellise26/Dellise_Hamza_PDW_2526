import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsOptional, IsBoolean } from 'class-validator';

export class SignInPayload {
  @ApiProperty()
  @IsNotEmpty()
  username: string;

  @ApiProperty()
  @IsNotEmpty()
  password: string;

  @ApiProperty()
  @IsOptional()
  googleHash: string;

  @ApiProperty()
  @IsOptional()
  facebookHash: string;

  @ApiProperty()
  @IsBoolean()
  @IsOptional()
  socialLogin: boolean;
}