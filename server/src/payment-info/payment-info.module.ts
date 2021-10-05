import { Module } from '@nestjs/common';
import { PaymentInfoService } from './payment-info.service';
import { PaymentInfoController } from './payment-info.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PaymentInfo } from './entities/payment-info.entity';
import { Users } from 'src/users/entities/users.entity';
import { UsersController } from 'src/users/users.controller';
import { UsersService } from 'src/users/users.service';

@Module({
  imports: [TypeOrmModule.forFeature([PaymentInfo, Users])],
  controllers: [PaymentInfoController, UsersController],
  providers: [PaymentInfoService, UsersService],
})
export class PaymentInfoModule {}
