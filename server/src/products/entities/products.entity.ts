import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
  DeleteDateColumn,
  OneToMany,
} from 'typeorm';
import { IsDate } from 'class-validator';
import { Inventory } from 'src/inventory/entities/inventory.entity';

@Entity()
export class Products {
  @PrimaryGeneratedColumn('uuid')
  id: number;

  @Column({ length: 100 })
  name: string;

  // Buffer.from(user.profileImage).toString('base64');
  @Column('blob', { nullable: true })
  barcode: string;

  @Column('datetime', { nullable: true })
  @IsDate()
  expiry: Date;

  @Column('double')
  price: number;

  @OneToMany(() => Inventory, (inventory) => inventory.supplier)
  inventory: Inventory;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;

  @DeleteDateColumn()
  deletedAt: Date;
}
