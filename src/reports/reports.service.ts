import { ApprovedDto } from './dtos/approved.dto';
import { UserEntity } from 'src/users/user.entity';
import { ReportsEntity } from './report.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Injectable, NotFoundException } from '@nestjs/common';

import { Repository } from 'typeorm';
import { CreteateReportDto } from './dtos/create.reports.dto';

@Injectable()
export class ReportsService {
  constructor(
    @InjectRepository(ReportsEntity) private repo: Repository<ReportsEntity>,
  ) {}

  async create(body: CreteateReportDto, user: UserEntity) {
    const report = this.repo.create(body);
    report.user = user;
    return this.repo.save(report);
    // console.log(report);

    //  this.repo.save(report);
    // return res.status(201).json({
    //   message: 'created successfully',
    //   report,
    // });
  }

  async changeApproval(id: number, approved: boolean) {
    const report = await this.repo.findOne({ where: { id: id } });
    if (!report) {
      throw new NotFoundException('bunday idli report mavjud emas');
    }
    report.approved = approved;
    return this.repo.save(report);
  }
}
