import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Connection } from 'typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { ProductsModule } from './products/products.module';
import { InventoryModule } from './inventory/inventory.module';
import { SuppliersModule } from './suppliers/suppliers.module';
import { AccesscodeModule } from './access-code/access-code.module';
import { PaymentInfoModule } from './payment-info/payment-info.module';

@Module({
  imports: [
    TypeOrmModule.forRoot(),
    UsersModule,
    ProductsModule,
    InventoryModule,
    SuppliersModule,
    AccesscodeModule,
    PaymentInfoModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {
  constructor(private connection: Connection) {}
}
