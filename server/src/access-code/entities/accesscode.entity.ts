import { IsNotEmpty } from 'class-validator';
import { Users } from 'src/users/entities/users.entity';
import {
  Column,
  CreateDateColumn,
  DeleteDateColumn,
  Entity,
  JoinColumn,
  OneToOne,
  PrimaryGeneratedColumn,
  Timestamp,
  UpdateDateColumn,
} from 'typeorm';

@Entity()
export class AccessCode {
  @PrimaryGeneratedColumn('uuid')
  id: number;

  @IsNotEmpty()
  @Column('blob')
  code: string;

  @IsNotEmpty()
  @Column('time')
  expiry: Timestamp;

  @IsNotEmpty()
  @Column('int')
  type: number;

  @IsNotEmpty()
  @Column('time')
  accessTime: Timestamp;

  @OneToOne(() => Users, (users) => users.accessCode)
  @JoinColumn({ name: 'userId' })
  user: Users;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;

  @DeleteDateColumn()
  deletedAt: Date;
}
