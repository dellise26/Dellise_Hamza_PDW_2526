import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';
import { DvdService } from './dvd.service';
import { DvdCreatePayload, DvdUpdatePayload } from './model/payload';
import { Dvd } from './model/entity';

@ApiBearerAuth('access-token')
@ApiTags('DVD')
@Controller('dvd')
export class DvdController {
  constructor(private readonly service: DvdService) {}

  @Post('create')
  create(@Body() payload: DvdCreatePayload): Promise<Dvd> {
    return this.service.create(payload);
  }

  @Delete('delete/:id')
  delete(@Param('id') id: string): Promise<void> {
    return this.service.delete(id);
  }

  @Get('detail/:id')
  detail(@Param('id') id: string): Promise<Dvd> {
    return this.service.detail(id);
  }

  @Get('list')
  getAll(): Promise<Dvd[]> {
    return this.service.getAll();
  }

  @Put('update')
  update(@Body() payload: DvdUpdatePayload): Promise<Dvd> {
    return this.service.update(payload);
  }
}
