import { Expose, Transform } from 'class-transformer';
import { UserEntity } from 'src/users/user.entity';

export class ReportDto {
  @Expose()
  id: number;
  @Expose()
  price: number;
  @Expose()
  year: number;
  @Expose()
  lng: number;
  @Expose()
  lat: number;
  @Expose()
  make: string;
  @Expose()
  model: string;
  @Transform(({ obj }) => obj.user.id)
  @Expose()
  userId: number;
  @Expose()
  approved: boolean;
  @Expose()
  mileage: number;
}
