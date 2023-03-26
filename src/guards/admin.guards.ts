import { UsersService } from './../users/users.service';
import { CanActivate, ExecutionContext } from '@nestjs/common';

export class AdminGuard implements CanActivate {
  async canActivate(context: ExecutionContext) {
    const request = context.switchToHttp().getRequest();

    if (!request.Current) {
      return false;
    }
    return request.Current.admin;
  }
}
