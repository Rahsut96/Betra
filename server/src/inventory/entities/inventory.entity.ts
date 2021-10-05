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

  @Column('double')
  @IsNotEmpty()
  cost: number;

  @Column()
  @IsNotEmpty()
  stock: number;

  @IsNotEmpty()
  @ManyToOne(() => Supplier, (supplier) => supplier.inventory, { eager: true })
  supplier: Supplier;

  @IsNotEmpty()
  @ManyToOne(() => Products, (products) => products.inventory, { eager: true })
  products: Products;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;

  @DeleteDateColumn()
  deletedAt: Date;
}
