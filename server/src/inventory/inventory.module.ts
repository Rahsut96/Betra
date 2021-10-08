import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { InventoryService } from './inventory.service';
import { InventoryController } from './inventory.controller';
import { Inventory } from './entities/inventory.entity';
import { SuppliersService } from 'src/suppliers/suppliers.service';
import { Supplier } from 'src/suppliers/entities/supplier.entity';
import { Products } from 'src/products/entities/products.entity';
import { ProductsService } from 'src/products/products.service';

@Module({
  imports: [TypeOrmModule.forFeature([Inventory, Supplier, Products])],
  controllers: [InventoryController],
  providers: [InventoryService, SuppliersService, ProductsService],
})
export class InventoryModule {}
