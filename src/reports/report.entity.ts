import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

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
  @Column()
  year: number;
  @Column()
  lng: number;
  @Column()
  lat: number;
  @Column()
  mileage: number;
}
