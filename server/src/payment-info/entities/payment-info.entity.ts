import { IsInt, IsNotEmpty } from 'class-validator';
import {
  Column,
  CreateDateColumn,
  DeleteDateColumn,
  Entity,
  ManyToOne,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';
import { Users } from 'src/users/entities/users.entity';

//  todo integrate scema validation pipe
// https://docs.nestjs.com/pipes#built-in-pipes
@Entity()
export class PaymentInfo {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column('int', { width: 4 })
  @IsNotEmpty()
  @IsInt()
  last4: number;

  @Column('boolean')
  isEnabled: boolean;

  @ManyToOne(() => Users, (users) => users.paymentInfo)
  user: Users;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;

  @DeleteDateColumn()
  deletedAt: Date;
}
