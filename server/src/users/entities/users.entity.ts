import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
  CreateDateColumn,
  DeleteDateColumn,
  OneToOne,
  JoinColumn,
  OneToMany,
} from 'typeorm';
import { Exclude } from 'class-transformer';
import { IsEmail } from 'class-validator';
import { AccessCode } from 'src/access-code/entities/accessCode.entity';
import { PaymentInfo } from 'src/payment-info/entities/payment-info.entity';

@Entity()
export class Users {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ length: 100 })
  firstName: string;

  @Column({ length: 100 })
  lastName: string;

  @Column({ length: 100 })
  @IsEmail()
  email: string;

  @Column()
  @Exclude()
  password: string;

  @Column({ length: 10 })
  phone: string;

  @Column()
  billingAddress: string;

  @Column()
  shippingAddress: string;

  @Column()
  appVersion: string;

  @Column()
  lastLogin: Date;

  @OneToMany(()=> PaymentInfo, (paymentInfo)=> paymentInfo.users)
  paymentInfo:PaymentInfo

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;

  @DeleteDateColumn()
  deletedAt: Date;
}
