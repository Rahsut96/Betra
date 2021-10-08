import { IsNotEmpty } from 'class-validator';
import { OrderDetail } from 'src/order-details/entities/order-detail.entity';
import { Orders } from 'src/orders/entities/order.entity';
import {
  Column,
  CreateDateColumn,
  DeleteDateColumn,
  Double,
  Entity,
  OneToMany,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity()
export class Discounts {
  @PrimaryGeneratedColumn('uuid')
  id: number;

  @IsNotEmpty()
  @Column()
  name: string;

  @IsNotEmpty()
  @Column()
  type: string;

  @IsNotEmpty()
  @Column('int', { width: 10 })
  value: Double;

  @IsNotEmpty()
  @Column()
  expiry: Date;

  @IsNotEmpty()
  @Column()
  start: Date;

  @OneToMany(() => OrderDetail, (orderDetail) => orderDetail.discount)
  orderDetails: OrderDetail[];

  @OneToMany(() => Orders, (orders) => orders.discount)
  orders: Orders[];

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;

  @DeleteDateColumn()
  deletedAt: Date;
}
