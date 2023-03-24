import { UpdateUserDto } from './dto/update.user.dto';
import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { UserEntity } from './user.entity';
@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(UserEntity)
    private readonly UserRepositroy: Repository<UserEntity>,
  ) {}
  async signUp(email: string, password: string) {
    console.log(email, password);

    const user = await this.UserRepositroy.create({ email, password });
    return this.UserRepositroy.save(user);
  }

  async findOne(id: number) {
    if (!id) {
      return null;
    }
    return await this.UserRepositroy.findOne({ where: { id: id } });
  }

  async find(email: string)   {
    return await this.UserRepositroy.findOne({ where: { email: email } });
  }

  async update(id: number, update: UpdateUserDto) {
    const user = await this.findOne(id);
    if (!user) {
      throw new Error('bunday user mavjud emas');
    }
    const updated = await this.UserRepositroy.update(id, update);
    return updated.affected;
  }
  async remove(id: number) {
    const user = await this.UserRepositroy.delete(id);

    if (!user) {
      throw new HttpException('bunday user mavjud emas', HttpStatus.NOT_FOUND);
    }
    return user;
  }
}
