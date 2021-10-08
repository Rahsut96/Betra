import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateInventoryDto } from './dto/create-inventory.dto';
import { UpdateInventoryDto } from './dto/update-inventory.dto';
import { Inventory } from './entities/inventory.entity';

@Injectable()
export class InventoryService {
  constructor(
    @InjectRepository(Inventory)
    private inventoryRepository: Repository<Inventory>,
  ) {}

  create(createInventoryDto: CreateInventoryDto) {
    return this.inventoryRepository.save(createInventoryDto);
  }

  findAll() {
    return this.inventoryRepository.find();
  }

  findOne(id: string) {
    return this.inventoryRepository.findOne(id);
  }

  findWhere(query: any, option?: any) {
    return this.inventoryRepository.find({ where: query, ...option });
  }

  update(id: string, updateInventoryDto: UpdateInventoryDto) {
    return this.inventoryRepository.update(id, updateInventoryDto);
  }

  remove(id: string) {
    return this.inventoryRepository.softDelete(id);
  }
}
