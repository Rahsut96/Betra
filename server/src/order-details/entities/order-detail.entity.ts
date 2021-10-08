import { IsNotEmpty, Min } from 'class-validator';
import { Discounts } from 'src/discounts/entities/discount.entity';
import { Orders } from 'src/orders/entities/order.entity';
import { Products } from 'src/products/entities/products.entity';
import {
  Column,
  CreateDateColumn,
  DeleteDateColumn,
  Entity,
  ManyToMany,
  ManyToOne,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity()
export class OrderDetail {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @IsNotEmpty()
  @Column('int')
  @Min(1)
  quantity: number;

  @IsNotEmpty()
  @Column('int')
  price: number;

  @IsNotEmpty()
  @Column()
  productId: string;

  @IsNotEmpty()
  @Column()
  orderId: string;

  @IsNotEmpty()
  @Column({ default: null, nullable: true })
  discountId: string;

  @ManyToMany(() => Products)
  products: Products[];

  @ManyToOne(() => Orders, (orders) => orders.orderDetails)
  order: Orders;

  @ManyToOne(() => Discounts, (discount) => discount.orderDetails)
  discount: Discounts;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;

  @DeleteDateColumn()
  deletedAt: Date;
}
