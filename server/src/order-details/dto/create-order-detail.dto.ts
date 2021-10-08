import { ApiProperty } from '@nestjs/swagger';
export class CreateOrderDetailReqDto {
  @ApiProperty()
  productId: string;

  @ApiProperty()
  discountId: string;

  @ApiProperty()
  quantity: number;

  @ApiProperty()
  price: number;
}

export class CreateOrderDetailDto extends CreateOrderDetailReqDto {
  orderId: string;
}
