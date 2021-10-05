import { Supplier } from '../../suppliers/entities/supplier.entity';
import {
  Column,
  CreateDateColumn,
  DeleteDateColumn,
  Entity,
  ManyToOne,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';
import { Products } from 'src/products/entities/products.entity';

@Entity()
export class Inventory {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column('double')
  cost: number;

  @Column()
  stock: number;

  @ManyToOne(() => Supplier, (supplier) => supplier.inventory)
  supplier: Supplier;

  @ManyToOne(() => Products, (products) => products.inventory)
  products: Products;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;

  @DeleteDateColumn()
  deletedAt: Date;
}
