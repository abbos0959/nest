import { IsEmail, IsEmpty } from 'class-validator';

export class UpdateUserDto {
  id: number;
  @IsEmail()
  email: string;

  password: string;
}
