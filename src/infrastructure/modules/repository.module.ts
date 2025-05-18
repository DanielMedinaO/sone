import { Module, Scope } from '@nestjs/common';
import UserRepository from '../database/repository/user.repository';
import IUserRepository from '../../domain/repository/base/user.repository';
import { PrismaModule } from './prisma.module';

@Module({
  imports: [PrismaModule],
  providers: [
    {
      provide: IUserRepository,
      useClass: UserRepository,
      scope: Scope.REQUEST,
    },
  ],
  exports: [IUserRepository],
})
export class RepositoryModule {}
