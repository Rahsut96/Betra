import { Users } from 'src/users/entities/users.entity';
import {
  Column,
  CreateDateColumn,
  DeleteDateColumn,
  Entity,
  ManyToOne,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';


@Entity()
export class PaymentInfo {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column('double')
  last4: string;

  @Column('boolean')
  isEnabled: boolean;

  @ManyToOne(() => Users, (users) => users.paymentInfo)
  users: Users;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;

  @DeleteDateColumn()
  deletedAt: Date;
}
