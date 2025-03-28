import { Column, Entity, PrimaryGeneratedColumn, OneToOne } from 'typeorm';

import { IdCard } from './id-card.entity';
@Entity({
  name: 'user',
})
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({
    name: 'firstname',
    length: 50,
  })
  firstname: string;

  @Column({
    name: 'lastaname',
    length: 50,
  })
  lastaname: string;

  @Column({
    name: 'age',
    type: 'int',
  })
  age: number;

  @OneToOne(() => IdCard, (idCard) => idCard.user)
  idCard: IdCard;
}
