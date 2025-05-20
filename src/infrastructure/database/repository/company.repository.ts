import { BaseRepositoy } from './base.repository';
import { PrismaService } from 'src/infrastructure/services/prisma.service';
import { Injectable } from '@nestjs/common';
import { Company } from 'src/domain/entity/company/company.entity';
import ICompanyRepository from 'src/domain/repository/company/company.repository';

@Injectable()
export default class CompanyRepository
  extends BaseRepositoy<Company>
  implements Partial<ICompanyRepository>
{
  constructor(protected prisma: PrismaService) {
    super(prisma?.company);
  }
}
