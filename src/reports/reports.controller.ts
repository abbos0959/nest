import {
  Controller,
  Get,
  Post,
  Delete,
  Patch,
  Query,
  Body,
} from '@nestjs/common';
import { Request, Response } from 'express';
import { CreteateReportDto } from './dtos/create.reports.dto';

@Controller('reports')
export class ReportsController {
  @Post()
  CreateReport(@Body() body: CreteateReportDto) {


    
  }
}
