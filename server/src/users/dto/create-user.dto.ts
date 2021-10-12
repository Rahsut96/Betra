import { IsEmail, IsNotEmpty, IsMobilePhone } from 'class-validator';

export class CreateUserDto {
  @IsNotEmpty()
  firstName: string;
  @IsNotEmpty()
  lastName: string;
  @IsNotEmpty()
  @IsEmail()
  email: string;

  @IsNotEmpty()
  password: string;
  @IsMobilePhone()
  phone: string;
}
