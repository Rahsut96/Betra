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
import { Exclude } from 'class-transformer';
import { IsDate, IsEmail, IsNotEmpty } from 'class-validator';
import { PaymentInfo } from 'src/payment-info/entities/payment-info.entity';
import { AccessCode } from 'src/access-code/entities/accessCode.entity';

@Entity()
export class Users {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ length: 100 })
  @IsNotEmpty()
  firstName: string;

  @Column({ length: 100 })
  lastName: string = null;

  @Column({ length: 100 })
  @IsNotEmpty()
  @IsEmail()
  email: string;

  @Column()
  @IsNotEmpty()
  @Exclude()
  password: string;

  @Column({ length: 10 })
  @IsNotEmpty()
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
}
