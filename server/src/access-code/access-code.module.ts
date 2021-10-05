import { Module } from '@nestjs/common';
import { AccesscodeService } from './access-code.service';
import { AccesscodeController } from './access-code.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AccessCode } from './entities/accessCode.entity';
import { Users } from 'src/users/entities/users.entity';
import { UsersController } from 'src/users/users.controller';
import { UsersService } from 'src/users/users.service';

@Module({
  imports: [TypeOrmModule.forFeature([AccessCode, Users])],
  controllers: [AccesscodeController, UsersController],
  providers: [AccesscodeService, UsersService],
})
export class AccesscodeModule {}
