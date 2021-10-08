import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateDiscountDto } from './dto/create-discount.dto';
import { UpdateDiscountDto } from './dto/update-discount.dto';
import { Discounts } from './entities/discount.entity';

@Injectable()
export class DiscountsService {
  constructor(
    @InjectRepository(Discounts)
    private accesscodeRepository: Repository<Discounts>,
  ) {}
  create(createDiscountDto: CreateDiscountDto) {
    return 'This action adds a new discount';
  }

  findAll() {
    return `This action returns all discounts`;
  }

  findOne(id: string) {
    return new Discounts();
  }

  update(id: string, updateDiscountDto: UpdateDiscountDto) {
    return `This action updates a #${id} discount`;
  }

  remove(id: string) {
    return `This action removes a #${id} discount`;
  }
}
