import { ApiProperty } from '@nestjs/swagger';
import { IsEnum, IsNotEmpty, IsNumber, IsOptional, IsString, Length, MaxLength } from 'class-validator';
import { DvdGenre } from '../../enum';

export class DvdCreatePayload {
  @ApiProperty()
  @IsNotEmpty()
  @Length(1, 80)
  title: string;

  @ApiProperty()
  @IsString()
  @IsOptional()
  @MaxLength(80)
  director: string;

  @ApiProperty()
  @IsString()
  @IsOptional()
  description: string;

  @ApiProperty()
  @IsOptional()
  @IsEnum(DvdGenre)
  genre: DvdGenre;

  @ApiProperty()
  @IsNumber()
  @IsOptional()
  releaseYear: number;

  @ApiProperty()
  @IsNumber()
  @IsNotEmpty()
  price: number;

  @ApiProperty()
  @IsNumber()
  @IsNotEmpty()
  stock: number;
}
