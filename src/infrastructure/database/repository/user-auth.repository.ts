import { BaseRepositoy } from './base.repository';
import { PrismaService } from 'src/infrastructure/services/prisma.service';
import { Injectable } from '@nestjs/common';
import { UserAuth } from 'src/domain/entity/auth/auth.entity';
import IUserAuthRepository from 'src/domain/repository/auth/user-auth.repository';

@Injectable()
export default class UserAuthRepository
  extends BaseRepositoy<UserAuth>
  implements Partial<IUserAuthRepository>
{
  constructor(protected prisma: PrismaService) {
    super(prisma?.userAuth);
  }
}
