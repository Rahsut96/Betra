import { Module } from '@nestjs/common';
import { OrdersService } from './orders.service';
import { OrdersController } from './orders.controller';
import { Users } from 'src/users/entities/users.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Orders } from './entities/order.entity';
import { UsersService } from 'src/users/users.service';
import { OrderDetail } from 'src/order-details/entities/order-detail.entity';
import { OrderDetailsService } from 'src/order-details/order-details.service';
import { Inventory } from 'src/inventory/entities/inventory.entity';
import { InventoryService } from 'src/inventory/inventory.service';
import { Products } from 'src/products/entities/products.entity';
import { ProductsService } from 'src/products/products.service';
import { Discounts } from 'src/discounts/entities/discount.entity';
import { DiscountsService } from 'src/discounts/discounts.service';

@Module({
  imports: [
    TypeOrmModule.forFeature([
      Orders,
      OrderDetail,
      Discounts,
      Products,
      Inventory,
      Users,
    ]),
  ],
  controllers: [OrdersController],
  providers: [
    OrdersService,
    OrderDetailsService,
    DiscountsService,
    ProductsService,
    InventoryService,
    UsersService,
  ],
})
export class OrdersModule {}
