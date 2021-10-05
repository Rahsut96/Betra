import { Module } from '@nestjs/common';
import { AccesscodeService } from './access-code.service';
import { AccesscodeController } from './access-code.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AccessCode } from './entities/accessCode.entity';

@Module({
  imports: [TypeOrmModule.forFeature([AccessCode])],
  controllers: [AccesscodeController],
  providers: [AccesscodeService]
})
export class AccesscodeModule {}
