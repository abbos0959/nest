import { Expose, Exclude } from 'class-transformer';
export class UserDtoSerialize {
  @Expose()
  id: number;
  @Expose()
  email: string;
}
