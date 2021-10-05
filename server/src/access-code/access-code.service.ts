import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateAccesscodeDto } from './dto/create-accessCode.dto';
import { UpdateAccesscodeDto } from './dto/update-accessCode.dto';
import { AccessCode } from './entities/accessCode.entity';

@Injectable()
export class AccesscodeService {
  constructor(
    @InjectRepository(AccessCode)
    private accesscodeRepository: Repository<AccessCode>,
  ) {}

  create(createAccesscodeDto: CreateAccesscodeDto) {
    return this.accesscodeRepository.save(createAccesscodeDto);
  }

  findAll() {
    return this.accesscodeRepository.find();
  }

  findOne(id: string) {
    return this.accesscodeRepository.findOne(id);
  }

  update(id: string, updateAccesscodeDto: UpdateAccesscodeDto) {
    return this.accesscodeRepository.update(id, updateAccesscodeDto);
  }

  remove(id: string) {
    return this.accesscodeRepository.softDelete(id);
  }
}
