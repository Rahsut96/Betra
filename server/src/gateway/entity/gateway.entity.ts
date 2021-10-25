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
export class Gateway {
    @PrimaryGeneratedColumn('uuid')
    id: string;

    customerFirstName: string;

    customerSurname: string;

    customerAddress: string

    customerCity: string;

    customerZIP: string;

    customerCountry: string;

    customerPhone: string;

    customerEmail: string;

    shoppingCardId: string;

    lang: string;

    dateTime: Date;

    amount: number;

    eci: string;

    stan: string;

    partner: string;

    wsPayOrderId: string;

    paymentType: string;

    creditCardNumber: string;

    paymentPlan: string;

    shopPostedPaymentPlan: string;

    shopPostedLang: string;

    shopPostedCreditCardName: string;

    success: boolean;

    approvalCode: string;
}
