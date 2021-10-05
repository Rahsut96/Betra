import { Users } from 'src/users/entities/users.entity';
export class CreatePaymentInfoDto {
  isEnabled: boolean;
  last4: number;
  user: Users;
}
