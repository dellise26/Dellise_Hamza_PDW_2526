import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Builder } from 'builder-pattern';
import { isNil } from 'lodash';
import { Dvd } from './model/entity';
import { DvdCreatePayload, DvdUpdatePayload } from './model/payload';
import { CrudService } from '@common/api';
import {
  DvdCreateException,
  DvdDeleteException,
  DvdListException,
  DvdNotFoundException,
  DvdUpdateException,
} from './dvd.exception';

@Injectable()
export class DvdService implements CrudService<Dvd, DvdCreatePayload, DvdUpdatePayload, string> {
  constructor(@InjectRepository(Dvd) private readonly repository: Repository<Dvd>) {}

  async create(payload: DvdCreatePayload): Promise<Dvd> {
    try {
      return await this.repository.save(Builder<Dvd>()
        .title(payload.title)
        .director(payload.director)
        .description(payload.description)
        .genre(payload.genre)
        .releaseYear(payload.releaseYear)
        .price(payload.price)
        .stock(payload.stock)
        .build());
    } catch (e) {
      throw new DvdCreateException();
    }
  }

  async delete(id: string): Promise<void> {
    try {
      const detail = await this.detail(id);
      await this.repository.remove(detail);
    } catch (e) {
      throw new DvdDeleteException();
    }
  }

  async detail(id: string): Promise<Dvd> {
    const result = await this.repository.findOneBy({ dvd_id: id });
    if (!(isNil(result))) {
      return result;
    }
    throw new DvdNotFoundException();
  }

  getAll(): Promise<Dvd[]> {
    try {
      return this.repository.find();
    } catch (e) {
      throw new DvdListException();
    }
  }

  async update(payload: DvdUpdatePayload): Promise<Dvd> {
    try {
      let detail = await this.detail(payload.dvd_id);
      detail.title = payload.title;
      detail.director = payload.director;
      detail.description = payload.description;
      detail.genre = payload.genre;
      detail.releaseYear = payload.releaseYear;
      detail.price = payload.price;
      detail.stock = payload.stock;
      return await this.repository.save(detail);
    } catch (e) {
      throw new DvdUpdateException();
    }
  }
}
