import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity('reports')
export class ReportsEntity {
  @PrimaryGeneratedColumn()
  id: number;
  @Column()
  price: number;
}
