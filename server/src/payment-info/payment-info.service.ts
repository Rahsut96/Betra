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
    private paymentInfoRepository: Repository<PaymentInfo>,
  ) {}

  create(createPaymentInfoDto: CreatePaymentInfoDto) {
    return this.paymentInfoRepository.save(createPaymentInfoDto);
  }

  findAll() {
    return this.paymentInfoRepository.find();
  }

  findOne(id: string) {
    return this.paymentInfoRepository.findOne(id);
  }

  update(id: string, updatePaymentInfoDto: UpdatePaymentInfoDto) {
    return this.paymentInfoRepository.update(id, updatePaymentInfoDto);
  }

  remove(id: string) {
    return this.paymentInfoRepository.softDelete(id);
  }
}
