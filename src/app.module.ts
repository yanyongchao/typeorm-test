import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { User } from './user/entities/user.entity';
import { UserModule } from './user/user.module';
import { IdCard } from './user/entities/id-card.entity';
import { Employee } from './user/entities/employee.entity';
import { Department } from './user/entities/department.entity';

@Module({
  imports: [UserModule, 
    TypeOrmModule.forRoot({
      type: "mysql",
      host: "127.0.0.1",
      port: 3306,
      username: "root",
      password: "123456",
      database: "typeorm_test",
      synchronize: true,
      logging: true,
      entities: [User, IdCard, Employee, Department],
      poolSize: 10,
      connectorPackage: 'mysql2',
      extra: {
          authPlugin: 'sha256_password',
      }
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}