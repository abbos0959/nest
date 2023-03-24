import { Injectable, BadRequestException } from '@nestjs/common';
import { UsersService } from './users.service';
import { promisify } from 'util';
import { randomBytes, scrypt } from 'crypto';
import { hash, compare } from 'bcrypt';

@Injectable()
export class AuthService {
  constructor(private userService: UsersService) {}

  async signUp(email: string, password: string) {
    const user = await this.userService.find(email);
    console.log(user);

    if (user) {
      throw new BadRequestException('bunday  user avvaldan  mavjud ');
    }

    const hashPassword = await hash(password.toString(), 10);
    const newUSer = await this.userService.signUp(email, hashPassword);
    return newUSer;
  }
  async signIn(email: string, password: string) {
    const user = await this.userService.find(email);
    if (!user) {
      throw new BadRequestException('bunday  user  mavjud  emas');
    }

    const comparePassword = await compare(password.toString(), user.password);
    if (!comparePassword) {
      throw new BadRequestException('parol yoki email xatoligi');
    }
    return user;
  }
}
