import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateOrderDto } from './dto/create-order.dto';
import { UpdateOrderDto } from './dto/update-order.dto';
import { Orders } from './entities/order.entity';

@Injectable()
export class OrdersService {
  constructor(
    @InjectRepository(Orders)
    private ordersRepository: Repository<Orders>,
  ) {}

  create(createOrderDto: CreateOrderDto) {
    return this.ordersRepository.save(createOrderDto);
  }

  findAll() {
    return this.ordersRepository.find();
  }

  findOne(id: string) {
    return this.ordersRepository.findOne(id);
  }
  findByUserId(userId: string) {
    return this.ordersRepository.findOne({ where: { userId } });
  }

  update(id: string, updateOrderDto: UpdateOrderDto) {
    return this.ordersRepository.update(id, updateOrderDto);
  }

  remove(id: string) {
    return this.ordersRepository.softDelete(id);
  }
}
