import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateSupplierDto } from './dto/create-supplier.dto';
import { UpdateSupplierDto } from './dto/update-supplier.dto';
import { Supplier } from './entities/supplier.entity';

@Injectable()
export class SuppliersService {
  constructor(
    @InjectRepository(Supplier)
    private suppliersRepository: Repository<Supplier>,
  ) {}

  async create(createSupplierDto: CreateSupplierDto) {
    return await this.suppliersRepository.save(createSupplierDto);
  }

  findAll() {
    return this.suppliersRepository.find();
  }

  findOne(id: string) {
    return this.suppliersRepository.findOne(id);
  }

  update(id: string, updateSupplierDto: UpdateSupplierDto) {
    return this.suppliersRepository.update(id, updateSupplierDto);
  }

  remove(id: string) {
    return this.suppliersRepository.softDelete(id);
  }
}
