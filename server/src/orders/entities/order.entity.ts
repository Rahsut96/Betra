import { IsNotEmpty } from 'class-validator';
import { Discounts } from 'src/discounts/entities/discount.entity';
import { OrderDetail } from 'src/order-details/entities/order-detail.entity';
import { Users } from 'src/users/entities/users.entity';
import {
  Column,
  CreateDateColumn,
  DeleteDateColumn,
  Double,
  Entity,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
  Timestamp,
  UpdateDateColumn,
  VersionColumn,
} from 'typeorm';

@Entity()
export class Orders {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @VersionColumn()
  // @Column('int', { width: 10, unique: true })
  orderNumber: number;

  @IsNotEmpty()
  @Column({ nullable: true })
  financialStatus: string;

  @IsNotEmpty()
  @Column('int')
  totalPrice: Double;

  @IsNotEmpty()
  @Column()
  currency: string;

  @IsNotEmpty()
  @Column({ default: null, nullable: true })
  discountId: string;

  @IsNotEmpty()
  @Column({ nullable: true })
  tax: string;

  @IsNotEmpty()
  @Column('timestamp', { nullable: true })
  fulfilledAt: Timestamp;

  @ManyToOne(() => Users, (users) => users.orders)
  user: Users;

  @ManyToOne(() => Discounts, (discount) => discount.orders)
  discount: Discounts;

  @OneToMany(() => OrderDetail, (orderDetils) => orderDetils.order, {
    eager: true,
  })
  orderDetails: OrderDetail[];

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;

  @DeleteDateColumn()
  deletedAt: Date;

  // for AuthGuard by Passport
  @ManyToOne(type => Users)owner?: Users;
}
