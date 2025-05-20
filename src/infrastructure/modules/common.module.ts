import { Module } from '@nestjs/common';
import { RepositoryModule } from './repository.module';
import { CustomerCreationUseCase } from 'src/application/use-case/customer/customer-creation.usecase';
import { CustomerController } from 'src/web/controllers/customer/customer.controller';
import { AuthModule } from './auth.module';
import { CompanyController } from 'src/web/controllers/company/company.controller';
import { CompanyCreationUseCase } from 'src/application/use-case/company/company-creation.usecase';

@Module({
  imports: [RepositoryModule, AuthModule],
  providers: [CustomerCreationUseCase, CompanyCreationUseCase],
  exports: [CustomerCreationUseCase, CompanyCreationUseCase],
  controllers: [CustomerController, CompanyController],
})
export class CommonModule {}
