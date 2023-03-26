import { UsersService } from './../users.service';
import { Injectable, NestMiddleware } from '@nestjs/common';
import { Request, Response, NextFunction } from 'express';

export class CurrentUserMiddleware implements NestMiddleware {
  constructor(private userService: UsersService) {}
  async use(req: Request, res: Response, next: NextFunction) {
    const { user } = req.session || {};
    console.log(user);

    if (user) {
      const user1 = await this.userService.findOne(user);
      //@ts-ignore
      req.Current = user1;
    }
    next();
  }
}
