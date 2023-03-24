// import { Test } from '@nestjs/testing';
// import { AuthService } from './auth.service';
// import { UsersService } from './users.service';
// import { UserEntity } from './user.entity';

// let service: AuthService;

// beforeEach(async () => {
//   const faceUSer: Partial<UsersService> = {
//     find: () => Promise.resolve([]),
//     create: (email: string, password: string) => {
//       Promise.resolve({ id: 1, email, password } as UserEntity);
//     },
//   };
//   const module = await Test.createTestingModule({
//     providers: [AuthService, { provide: UsersService, useValue: faceUSer }],
//   }).compile();

//   service = module.get(AuthService);
// });

// it('instance yaratamiz auth service uchun', async () => {
//   expect(service).toBeDefined();
// });
