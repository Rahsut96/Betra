import {
  Column,
  CreateDateColumn,
  DeleteDateColumn,
  Entity,
  ManyToOne,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';
import { Supplier } from 'src/suppliers/entities/supplier.entity';
import { Products } from 'src/products/entities/products.entity';
import { IsNotEmpty } from 'class-validator';

@Entity()
export class Inventory {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @IsNotEmpty()
  @Column('double', { default: null })
  cost: number;

  @IsNotEmpty()
  @Column({ default: null })
  stock: number;

  @IsNotEmpty()
  @Column({ nullable: true })
  supplierId: string;

  @IsNotEmpty()
  @Column({ unique: true })
  productId: string;

  @ManyToOne(() => Supplier, (supplier) => supplier.inventory)
  supplier: Supplier;

  @ManyToOne(() => Products, (products) => products.inventory)
  product: Products;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;

  @DeleteDateColumn()
  deletedAt: Date;
}
