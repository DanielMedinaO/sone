import { Module, Scope } from '@nestjs/common';
import IUserRepository from '../../domain/repository/base/user.repository';
import { PrismaModule } from './prisma.module';
import IUserAuthRepository from 'src/domain/repository/auth/user-auth.repository';
import UserAuthRepository from '../database/repository/user-auth.repository';
import UserRepository from '../database/repository/user.repository';

@Module({
  imports: [PrismaModule],
  providers: [
    {
      provide: IUserRepository,
      useClass: UserRepository,
      scope: Scope.REQUEST,
    },
    {
      provide: IUserAuthRepository,
      useClass: UserAuthRepository,
      scope: Scope.REQUEST,
    },
  ],
  exports: [IUserRepository, IUserAuthRepository],
})
export class RepositoryModule {}
