import { CurrentUser } from './decorators/current-user-decorator';
import { AuthService } from './auth.service';
import { Expose } from 'class-transformer';
import { SerializeInterceptorAbbos } from './../interceptors/serialize.interseptors';
import { Serialise } from './../interceptors/serialize.interseptors';
import { UpdateUserDto } from './dto/update.user.dto';
import { UsersService } from './users.service';
import { UserEntity } from './user.entity';
import { UserDto } from './dto/create.user.dto';
import { UserDtoSerialize } from './dto/user.dto';
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
  Session,
  UseGuards,
} from '@nestjs/common';
import { AuthGuard } from 'src/guards/auth.guards';

@Controller('users')
@Serialise(UserDtoSerialize)
export class UsersController {
  constructor(
    private readonly UserService: UsersService,
    private AuthService: AuthService,
  ) {}

  @Get('/current')
  @UseGuards(AuthGuard)
  async current(@CurrentUser() user: UserEntity) {
    return user;
  }
  @Post('signup')
  async CreateUSer(@Body() body: UserDto, @Session() session: any) {
    const user = await this.AuthService.signUp(body.email, body.password);
    session.user = user.id;
    return user;
  }
  @Post('signin')
  async SignIn(@Body() body: UserDto, @Session() session: any) {
    const user = await this.AuthService.signIn(body.email, body.password);
    session.user = user.id;
    return user;
  }

  @Get('/signout')
  SignOut(@Session() session: any) {
    session.user = null;
  }

  @Get('all')
  GetAll(@Body() body: UpdateUserDto) {
    // return this.UserService.find(body.email);
  }

  @Patch('update/:id')
  UpdateUser(@Param('id') id: string, @Body() upd: UpdateUserDto) {
    return this.UserService.update(Number(id), upd);
  }
  // @UseInterceptors(new SerializeInterceptorAbbos(UserDtoSerialize))
  @Get(':id')
  getByIdUser(@Param('id') id: string) {
    return this.UserService.findOne(Number(id));
  }
  @Delete('delete/:id')
  DeleteUser(@Param('id') id: string) {
    return this.UserService.remove(Number(id));
  }
}
