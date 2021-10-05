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

  async create(createAccesscodeDto: CreateAccesscodeDto) {
    const inventory = await this.accesscodeRepository.save(createAccesscodeDto);
    return { message: 'AccessCode created successfully !', data: inventory };
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
