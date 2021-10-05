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

    @Column('blob')
    code:string;

    @Column('time')
    expiry:Timestamp

    @Column('int')
    type: number

    @Column('time')
    accessTime: Timestamp

    @OneToOne(()=> Users)
    @JoinColumn()
    users: Users
    
    @CreateDateColumn()
    createdAt: Date;

    @UpdateDateColumn()
    updatedAt: Date;

    @DeleteDateColumn()
    deletedAt: Date;
}
