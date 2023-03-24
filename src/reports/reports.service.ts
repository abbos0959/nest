import { ReportsEntity } from './report.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';

@Injectable()
export class ReportsService {
  constructor(
    @InjectRepository(ReportsEntity) private repo: Repository<ReportsEntity>,
  ) {}
  async create(body) {
    console.log(body);
  }
}
