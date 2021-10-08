import { PartialType } from '@nestjs/mapped-types';
import { Timestamp } from 'typeorm';
import { CreateOrderDto } from './create-order.dto';

export class UpdateOrderDto extends PartialType(CreateOrderDto) {
  financialStatus: string;

  fulfilledAt: Timestamp;
}
