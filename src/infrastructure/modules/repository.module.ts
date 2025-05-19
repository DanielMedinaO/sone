import { Module, Scope } from '@nestjs/common';
import UserRepository from '../database/repository/auth.repository';
import IUserRepository from '../../domain/repository/base/user.repository';
import { PrismaModule } from './prisma.module';
import IAuthRepository from 'src/domain/repository/auth/auth.repository';
import AuthRepository from '../database/repository/auth.repository';

@Module({
  imports: [PrismaModule],
  providers: [
    {
      provide: IUserRepository,
      useClass: UserRepository,
      scope: Scope.REQUEST,
    },
    {
      provide: IAuthRepository,
      useClass: AuthRepository,
      scope: Scope.REQUEST,
    },
  ],
  exports: [IUserRepository, IAuthRepository],
})
export class RepositoryModule {}
