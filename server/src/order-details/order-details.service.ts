import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateOrderDetailDto } from './dto/create-order-detail.dto';
import { UpdateOrderDetailDto } from './dto/update-order-detail.dto';
import { OrderDetail } from './entities/order-detail.entity';

@Injectable()
export class OrderDetailsService {
  constructor(
    @InjectRepository(OrderDetail)
    private ordersDetailRepository: Repository<OrderDetail>,
  ) {}

  create(createOrderDetailDto: CreateOrderDetailDto) {
    return this.ordersDetailRepository.save(createOrderDetailDto);
  }

  async insert(createOrderDetailDto: CreateOrderDetailDto[]) {
    await this.ordersDetailRepository
      .createQueryBuilder()
      .insert()
      .into(OrderDetail)
      .values(createOrderDetailDto)
      .execute();
  }

  findAll() {
    return this.ordersDetailRepository.find();
  }

  findOne(id: string) {
    return this.ordersDetailRepository.findOne(id);
  }

  findByOrderId(orderId: string) {
    return this.ordersDetailRepository.findOne({ where: { orderId } });
  }

  update(id: string, updateOrderDetailDto: UpdateOrderDetailDto) {
    return this.ordersDetailRepository.update(id, updateOrderDetailDto);
  }

  remove(id: string) {
    return this.ordersDetailRepository.softDelete(id);
  }
}
