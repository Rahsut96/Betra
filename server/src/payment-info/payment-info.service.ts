import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreatePaymentInfoDto } from './dto/create-payment-info.dto';
import { UpdatePaymentInfoDto } from './dto/update-payment-info.dto';
import { PaymentInfo } from './entities/payment-info.entity';

@Injectable()
export class PaymentInfoService {
  constructor(
    @InjectRepository(PaymentInfo)
    private inventoryRepository: Repository<PaymentInfo>,
  ) {}

  async create(createPaymentInfoDto: CreatePaymentInfoDto) {
    const inventory = await this.inventoryRepository.save(createPaymentInfoDto);
    return { message: 'Inventory created successfully !', data: inventory };
  }

  findAll() {
    return this.inventoryRepository.find();
  }

  findOne(id: string) {
    return this.inventoryRepository.findOne(id);
  }

  update(id: string, updatePaymentInfoDto: UpdatePaymentInfoDto) {
    return this.inventoryRepository.update(id, updatePaymentInfoDto);
  }

  remove(id: string) {
    return this.inventoryRepository.softDelete(id);
  }
}
