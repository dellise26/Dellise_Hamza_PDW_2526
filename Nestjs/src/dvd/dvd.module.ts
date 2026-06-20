import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Dvd } from './model/entity';
import { DvdController } from './dvd.controller';
import { DvdService } from './dvd.service';

@Module({
  imports: [TypeOrmModule.forFeature([Dvd])],
  controllers: [DvdController],
  providers: [DvdService],
})
export class DvdModule {}
