import { Column, Entity, PrimaryColumn } from 'typeorm';
import { ulid } from 'ulid';
import { BaseEntity } from '@common/model';
import { DvdGenre } from '../../enum';

@Entity()
export class Dvd extends BaseEntity {
  @PrimaryColumn('varchar', { length: 26, default: () => `'${ulid()}'` })
  dvd_id: string;

  @Column({ length: 80, nullable: false })
  title: string;

  @Column({ length: 80, nullable: true })
  director: string;

  @Column('text', { nullable: true })
  description: string;

  @Column({ length: 15, nullable: true, default: DvdGenre.OTHER })
  genre: DvdGenre;

  @Column({ nullable: true })
  releaseYear: number;

  @Column({ nullable: false })
  price: number;

  @Column({ nullable: false, default: 0 })
  stock: number;
}
