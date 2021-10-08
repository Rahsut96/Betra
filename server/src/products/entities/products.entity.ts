import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
  DeleteDateColumn,
  OneToMany,
  Double,
} from 'typeorm';
import { IsDate, IsNotEmpty } from 'class-validator';
import { Inventory } from 'src/inventory/entities/inventory.entity';

@Entity()
export class Products {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ length: 100 })
  @IsNotEmpty()
  name: string;

  // Buffer.from(user.profileImage).toString('base64');
  @Column('blob', { nullable: true })
  @IsNotEmpty()
  barcode: string;

  @Column('datetime', { nullable: true })
  @IsNotEmpty()
  @IsDate()
  expiry: Date;

  @Column('double')
  @IsNotEmpty()
  price: Double;

  @OneToMany(() => Inventory, (inventory) => inventory.product)
  inventory: Inventory;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;

  @DeleteDateColumn()
  deletedAt: Date;
}
