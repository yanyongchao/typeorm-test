import {
  Column,
  Entity,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { Department } from './department.entity';
import { Exclude, Expose, Transform } from 'class-transformer';

@Entity()
export class Employee {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({
    length: 50,
  })
  @Transform(({ value }) => '邮箱是：' + value)
  name: string;

  @ManyToOne(() => Department, (department) => department.employees)
  department: Department;
}
