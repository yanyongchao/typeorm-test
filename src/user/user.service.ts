import { Injectable } from '@nestjs/common';
import { InjectEntityManager } from '@nestjs/typeorm';
import { EntityManager } from 'typeorm';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { User } from './entities/user.entity';
import { IdCard } from './entities/id-card.entity';
import { Employee } from './entities/employee.entity';
import { Department } from './entities/department.entity';

@Injectable()
export class UserService {
  
  @InjectEntityManager()
  private manager: EntityManager;

  async initData() {
    const user = new User();
    user.firstname = 'guang';
    user.lastaname = 'guang';
    user.age = 20;
    
    const idCard = new IdCard();
    idCard.cardName = '1111111';
    idCard.user = user;
    
    await this.manager.save(User, user);
    await this.manager.save(IdCard, idCard);
  }

  async initData2() {
    const e1 = new Employee();
    e1.name = '张三';

    const e2 = new Employee();
    e2.name = '李四';

    const e3 = new Employee();
    e3.name = '王五';

    const d1 = new Department();
    d1.name = '技术部';
    d1.employees = [e1, e2, e3];


    await this.manager.save(Department, d1);

  }

  create(createUserDto: CreateUserDto) {
    console.log('createUserDto', createUserDto);
    this.manager.save(User, createUserDto);
  }

  findAll() {
    return this.manager.find(User)
  }

  findOne(id: number) {
    return this.manager.findOne(User, {
      where: { id },
      relations: {
        idCard: true,
      }
    })

  }

  update(id: number, updateUserDto: UpdateUserDto) {
    this.manager.save(User, {
      id: id,
      ...updateUserDto
    })
  }

  remove(id: number) {
    this.manager.delete(User, id);
  }
}