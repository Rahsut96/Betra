// import { Users } from 'src/users/entities/users.entity';
import { ApiProperty, OmitType } from '@nestjs/swagger';
import { CreateOrderDetailReqDto } from '../../order-details/dto/create-order-detail.dto';

export class CreateOrderReqDto {
  // totalPrice: Double;

  @ApiProperty()
  currency: string;

  @ApiProperty()
  discountId: string;

  @ApiProperty()
  tax: string;

  @ApiProperty({ type: () => CreateOrderDetailReqDto })
  orderItems: CreateOrderDetailReqDto[];
}

export class CreateOrderDto extends OmitType(CreateOrderReqDto, [
  'discountId',
  'orderItems',
] as const) {}
