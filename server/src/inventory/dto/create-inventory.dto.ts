import { Products } from 'src/products/entities/products.entity';
import { Supplier } from 'src/suppliers/entities/supplier.entity';

export class CreateInventoryDto {
  supplierId: string;
  productId: string;
  product?: Products;
  supplier?: Supplier;
  cost: number;
  stock: number;
}
