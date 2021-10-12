import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
  CreateDateColumn,
  DeleteDateColumn,
  OneToMany,
  OneToOne,
} from 'typeorm';
// import * as bcrypt from 'bcrypt';
import { Exclude } from 'class-transformer';
import { IsDate, IsEmail, IsMobilePhone, IsNotEmpty } from 'class-validator';
import { PaymentInfo } from 'src/payment-info/entities/payment-info.entity';
import { AccessCode } from 'src/access-code/entities/accessCode.entity';
import { Orders } from 'src/orders/entities/order.entity';

@Entity()
export class Users {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ length: 100 })
  @IsNotEmpty()
  firstName: string;

  @Column({ length: 100 })
  lastName: string = null;

  @Column({ unique: true, length: 100 })
  @IsNotEmpty()
  @IsEmail()
  email: string;

  @Column()
  @IsNotEmpty()
  @Exclude()
  password: string;

  @Column()
  @IsNotEmpty()
  @IsMobilePhone()
  phone: string;

  @Column({ default: null })
  billingAddress: string;

  @Column({ default: null })
  shippingAddress: string;

  @Column({ default: null })
  appVersion: string;

  @Column({ default: null })
  @IsDate()
  lastLogin: Date;

  @OneToMany(() => Orders, (orders) => orders.user)
  orders: Orders[];

  @OneToMany(() => PaymentInfo, (paymentInfo) => paymentInfo.user, {
    eager: true,
  })
  paymentInfo: PaymentInfo[];

  @OneToOne(() => AccessCode, (accessCode) => accessCode.user, {
    eager: true,
  })
  accessCode: AccessCode;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;

  @DeleteDateColumn()
  deletedAt: Date;

  // Below code is not working
  // @BeforeInsert() async hashPassword() {
  //   this.password = await bcrypt.hash(this.password, 10);
  // }
}
