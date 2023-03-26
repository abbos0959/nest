import { Column, PrimaryGeneratedColumn, Entity, OneToMany } from 'typeorm';
import { ReportsEntity } from 'src/reports/report.entity';
import { Exclude } from 'class-transformer';
console.log(ReportsEntity);

@Entity('users')
export class UserEntity {
  @PrimaryGeneratedColumn()
  id: number;
  @Column()
  email: string;
  @Column()
  @Exclude()
  password: string;

  @Column({ default: true })
  admin: boolean;
  @OneToMany(() => ReportsEntity, (report) => report.user)
  reports: ReportsEntity[];
}
