import {
  Injectable,
  NestInterceptor,
  ExecutionContext,
  CallHandler,
} from '@nestjs/common';

import { UsersService } from '../users.service';

@Injectable()
export class CurrentUserInterCeptors implements NestInterceptor {
  constructor(private UsersService: UsersService) {}
  async intercept(context: ExecutionContext, handler: CallHandler) {
    const request = context.switchToHttp().getRequest();
    const { user } = request.session;

    if (user) {
      const user1 = await this.UsersService.findOne(Number(user));
      request.Current = user1;
    }
    return handler.handle();
  }
}
