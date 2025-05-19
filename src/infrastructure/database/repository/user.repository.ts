import { User } from 'src/domain/entity/base/user.entity';
import { BaseRepositoy } from './base.repository';
import IUserRepository from 'src/domain/repository/base/user.repository';
import { PrismaService } from 'src/infrastructure/services/prisma.service';
import { Injectable } from '@nestjs/common';

@Injectable()
export default class UserRepository
  extends BaseRepositoy<User>
  implements Partial<IUserRepository>
{
  constructor(protected prisma: PrismaService) {
    super(prisma?.user);
  }
}
