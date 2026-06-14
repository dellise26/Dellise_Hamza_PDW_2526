import { ApiProperty } from '@nestjs/swagger';
import { IsEmail, IsNotEmpty, IsOptional, Length } from 'class-validator';

export class SignupPayload {
  @ApiProperty()
  @IsNotEmpty()
  @Length(1, 10)
  username: string;

  @ApiProperty()
  @IsNotEmpty()
  @Length(1, 10)
  password: string;

  @ApiProperty()
  @IsNotEmpty()
  @IsEmail()
  mail: string;

  @ApiProperty()
  @IsOptional()
  googleHash: string;

  @ApiProperty()
  @IsOptional()
  facebookHash: string;
}