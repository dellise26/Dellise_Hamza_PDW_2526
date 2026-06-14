import {
  Column,
  Entity,
  JoinColumn,
  ManyToMany,
  ManyToOne,
  OneToOne,
  PrimaryColumn,
} from 'typeorm';
import { ulid } from 'ulid';
import { Person } from './person.entity';

@Entity()
export class Car {
  @PrimaryColumn('varchar', { length: 26, default: () => `'${ulid()}'` })
  car_id: string;

  @Column({ nullable: false })
  brand: string;

  @Column({ nullable: true })
  color: string;

  /*@ManyToOne(() => Person, (person) => person.cars,{eager:false})
  @JoinColumn({referencedColumnName:'person_id', name:'person_id_fk'})
  owner: Person*/

  /*@ManyToMany(()=>Person, (person)=> person.cars)   
  owners:Person[];*/

  @OneToOne(() => Person)
  owner: Person;
}
