import { SerializeInterceptorAbbos } from './../interceptors/serialize.interseptors';
import { UpdateUserDto } from './dto/update.user.dto';
import { UsersService } from './users.service';
import { UserEntity } from './user.entity';
import { UserDto } from './dto/create.user.dto';
import {
  Controller,
  Post,
  Body,
  Get,
  Param,
  Patch,
  UseInterceptors,
  ClassSerializerInterceptor,
  Delete,
} from '@nestjs/common';

@Controller('users')
export class UsersController {
  constructor(private readonly UserService: UsersService) {}
  @Post('signup')
  CreateUSer(@Body() body: UserDto) {
    return this.UserService.signUp(body);
  }
  @Get('all')
  GetAll() {
    return this.UserService.find();
  }

  @Patch('update/:id')
  UpdateUser(@Param('id') id: string, @Body() upd: UpdateUserDto) {
    return this.UserService.update(Number(id), upd);
  }
  @UseInterceptors(SerializeInterceptorAbbos)
  @Get(':id')
  getByIdUser(@Param('id') id: string) {
    return this.UserService.findOne(Number(id));
  }
  @Delete('delete/:id')
  DeleteUser(@Param('id') id: string) {
    return this.UserService.remove(Number(id));
  }
}
