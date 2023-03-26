import { ApprovedDto } from './dtos/approved.dto';
import { UserEntity } from 'src/users/user.entity';
import {
  Controller,
  Get,
  Post,
  Delete,
  Param,
  Patch,
  Query,
  Body,
  UseGuards,
  Req,
  Res,
} from '@nestjs/common';
import { AuthGuard } from 'src/guards/auth.guards';
import { Request, Response } from 'express';
import { CreteateReportDto } from './dtos/create.reports.dto';
import { ReportsService } from './reports.service';
import { CurrentUser } from 'src/users/decorators/current-user-decorator';
import { ReportDto } from './dtos/report.dto';
import { Serialise } from 'src/interceptors/serialize.interseptors';
import { AdminGuard } from 'src/guards/admin.guards';
@Controller('reports')
export class ReportsController {
  constructor(private readonly ReportsService: ReportsService) {}
  @Post('/create')
  @UseGuards(AuthGuard)
  @Serialise(ReportDto)
  CreateReport(
    @Body() body: CreteateReportDto,
    @CurrentUser() user: UserEntity,
    // @Req() req: Request,
    // @Res() res: Response,
  ) {
    return this.ReportsService.create(body, user);
  }

  @Patch('/:id')
  @UseGuards(AdminGuard)
  appreoveReport(@Param('id') id: string, @Body() body: ApprovedDto) {
    return this.ReportsService.changeApproval(Number(id), body.approved);
  }
}
