import { Module, Scope } from '@nestjs/common';
import IUserRepository from '../../domain/repository/base/user.repository';
import { PrismaModule } from './prisma.module';
import IUserAuthRepository from 'src/domain/repository/auth/user-auth.repository';
import UserAuthRepository from '../database/repository/user-auth.repository';
import UserRepository from '../database/repository/user.repository';
import ICompanyRepository from 'src/domain/repository/company/company.repository';
import CompanyRepository from '../database/repository/company.repository';

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
    {
      provide: ICompanyRepository,
      useClass: CompanyRepository,
    },
  ],
  exports: [IUserRepository, IUserAuthRepository, ICompanyRepository],
})
export class RepositoryModule {}
