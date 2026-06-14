import {
  Entity,
  PrimaryColumn,
  Column,
  ManyToMany,
  JoinTable,
  JoinColumn,
  OneToOne,
} from 'typeorm';
import { ulid } from 'ulid';
import { Car } from './car.entity';

@Entity()
export class Person {
  @PrimaryColumn('varchar', { length: 26, default: () => `'${ulid()}'` })
  person_id: string;

  @Column({ nullable: true })
  firstname: string;

  @Column({ nullable: true })
  lastname: string;

  @Column({ nullable: true })
  gender: string;

  @Column({ nullable: true })
  birthdate: Date;

  /*@OneToMany(()=>Car, (car)=>, car.owner,{cascade:true,eager:true})
  cars:Car[];*/

  /*@ManyToMany(()=>Car, (car)=> car.owners)
  @JoinTable({ 
    name:'car_park', 
    inverseJoinColumn: {name:'car_id_fk', referencedColumnName:'car_id'}, 
    joinColumn:{name:'person_id_fk', referencedColumnName:'person_id'} 
    }) 
    cars:Car[];*/

  @OneToOne(() => Car)
  @JoinColumn({ name: 'car_id_fk', referencedColumnName: 'car_id' })
  cars: Car;
}
