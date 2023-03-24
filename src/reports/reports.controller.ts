import {
  Controller,
  Get,
  Post,
  Delete,
  Patch,
  Query,
  Body,
  UseGuards,
} from '@nestjs/common';
import { AuthGuard } from 'src/guards/auth.guards';
import { Request, Response } from 'express';
import { CreteateReportDto } from './dtos/create.reports.dto';
import { ReportsService } from './reports.service';

@Controller('reports')
export class ReportsController {
  constructor(private readonly ReportsService: ReportsService) {}
  @Post("/create")
  @UseGuards(AuthGuard)
  CreateReport(@Body() body: CreteateReportDto) {
    return this.ReportsService.create(body);
  }
}
