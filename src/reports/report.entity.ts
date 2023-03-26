import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from 'typeorm';
import { UserEntity } from 'src/users/user.entity';

console.log(UserEntity, 'salom qulvaccha');

@Entity('reports')
export class ReportsEntity {
  @PrimaryGeneratedColumn()
  id: number;
  @Column()
  price: number;
  @Column()
  make: string;
  @Column()
  model: string;
  @Column({ default: false })
  approved: boolean;
  @Column()
  year: number;
  @Column()
  lng: number;
  @Column()
  lat: number;
  @Column()
  mileage: number;
  @ManyToOne(() => UserEntity, (user) => user.reports)
  user: UserEntity;
}
