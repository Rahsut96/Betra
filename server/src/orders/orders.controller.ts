import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  UseGuards,
} from '@nestjs/common';
import { OrdersService } from './orders.service';
import { CreateOrderReqDto } from './dto/create-order.dto';
import { UpdateOrderDto } from './dto/update-order.dto';
import { UsersService } from 'src/users/users.service';
import { OrderDetailsService } from 'src/order-details/order-details.service';
import { InventoryService } from 'src/inventory/inventory.service';
import { RpcException } from '@nestjs/microservices';
import { LessThan } from 'typeorm';
import { ApiTags } from '@nestjs/swagger';
import { Orders } from './entities/order.entity';
import { FIN_STATUS } from 'src/constants';
import { DiscountsService } from 'src/discounts/discounts.service';
import { OrderDetail } from 'src/order-details/entities/order-detail.entity';
import { AuthGuard } from '@nestjs/passport';

@ApiTags('Orders')
@Controller({
  version: '1',
  path: 'orders',
})
export class OrdersController {
  constructor(
    private readonly ordersService: OrdersService,
    private readonly orderDetailService: OrderDetailsService,
    private readonly discountService: DiscountsService,
    private readonly inventoryService: InventoryService,
    private readonly userService: UsersService,
  ) {}

  @Post(':userId')
  @UseGuards(AuthGuard())
  async create(
    @Body() createOrderDto: CreateOrderReqDto,
    @Param('userId') userId: string,
  ) {
    // TODO: 1, read userid from Auth state
    // TODO: 2, Auth requiered
    const user = await this.userService.findOne(userId);

    if (user) {
      const { orderItems: orderReqItems, discountId } = createOrderDto;
      const discount = this.discountService.findOne(discountId);
      const query = orderReqItems?.map(({ productId, quantity }) => ({
        productId,
        stock: LessThan(quantity),
      }));

      const invalidProducts = await this.inventoryService.findWhere(query);
      if (invalidProducts?.length) {
        throw new RpcException('Invalid order quantity');
      }
      // Creating order
      const orderPayload = new Orders();

      orderPayload.financialStatus = FIN_STATUS.PENDING;
      orderPayload.orderNumber = 1;
      orderPayload.currency = createOrderDto.currency;
      orderPayload.tax = createOrderDto.tax;
      orderPayload.currency = createOrderDto.currency;
      orderPayload.discount = discount;
      orderPayload.user = user;
      orderPayload.totalPrice = orderReqItems.reduce(
        (prev, current) => prev + current.price * current.quantity,
        0.0,
      );
      // const orderData = this.ordersService.create()

      const orderRes = await this.ordersService.create(orderPayload);

      const orderDetailsPayload = orderReqItems.map((item) => {
        const odItem = new OrderDetail();
        odItem.orderId = orderRes.id;
        odItem.productId = item.productId;
        odItem.price = item.price;
        odItem.quantity = item.quantity;
        return odItem;
      });

      // Insert Order Detail in to Order detail table
      await this.orderDetailService.insert(orderDetailsPayload);
      return {
        message: 'Order created successfully!',
        data: { id: orderRes.id },
      };
    }
    throw new RpcException('User not found!');
  }

  @Get()
  @UseGuards(AuthGuard())
  findAll() {
    return this.ordersService.findAll();
  }

  @Get(':id')
  @UseGuards(AuthGuard())
  findOne(@Param('id') id: string) {
    return this.ordersService.findOne(id);
  }

  @Get('user/:userId')
  @UseGuards(AuthGuard())
  findUserOrders(@Param('userId') userId: string) {
    return this.ordersService.findByUserId(userId);
  }

  @Patch(':id')
  @UseGuards(AuthGuard())
  update(@Param('id') id: string, @Body() updateOrderDto: UpdateOrderDto) {
    return this.ordersService.update(id, updateOrderDto);
  }

  @Delete(':id')
  @UseGuards(AuthGuard())
  remove(@Param('id') id: string) {
    return this.ordersService.remove(id);
  }
}