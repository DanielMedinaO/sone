import { Module } from '@nestjs/common';
import { RepositoryModule } from './repository.module';
import { CustomerCreationUseCase } from 'src/application/use-case/customer/customer-creation.usecase';
import { CustomerController } from 'src/web/controllers/customer/customer.controller';
import { AuthModule } from './auth.module';

@Module({
  imports: [RepositoryModule, AuthModule],
  providers: [CustomerCreationUseCase],
  exports: [CustomerCreationUseCase],
  controllers: [CustomerController],
})
export class CommonModule {}
