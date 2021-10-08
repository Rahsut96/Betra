import { Users } from 'src/users/entities/users.entity';
import { Timestamp } from 'typeorm';

export class CreateAccesscodeDto {
  code: string;
  expiry: Timestamp;
  type: number;
  accessTime: Timestamp;
  user: Users;
  userId: string;
}
