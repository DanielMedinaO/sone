import { BaseRepositoy } from './base.repository';
import { PrismaService } from 'src/infrastructure/services/prisma.service';
import { Injectable } from '@nestjs/common';
import { Auth } from 'src/domain/entity/auth/auth.entity';
import IAuthRepository from 'src/domain/repository/auth/auth.repository';

@Injectable()
export default class AuthRepository
  extends BaseRepositoy<Auth>
  implements Partial<IAuthRepository>
{
  constructor(protected prisma: PrismaService) {
    super(prisma?.userAuth);
  }
}
