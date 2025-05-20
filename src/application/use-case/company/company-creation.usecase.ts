import { Injectable } from '@nestjs/common';
import { CreateCompanyDto } from 'src/application/dto/company/create-company.schema';
import { Company } from 'src/domain/entity/company/company.entity';
import { v4 as uuidv4 } from 'uuid';
import ICompanyRepository from 'src/domain/repository/company/company.repository';

@Injectable()
export class CompanyCreationUseCase {
  constructor(private companyRepository: ICompanyRepository) {}
  async execute(data: CreateCompanyDto): Promise<Partial<Company>> {
    const company = new Company(uuidv4(), data.name, new Date());
    const companyDB = await this.companyRepository.create(company);
    return companyDB;
  }

  async getAll(): Promise<Company[]> {
    return this.companyRepository.findAll();
  }
}
