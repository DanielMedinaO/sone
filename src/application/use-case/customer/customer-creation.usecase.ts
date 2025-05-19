import { Injectable } from '@nestjs/common';
import { CreateCustomerDto } from 'src/application/dto/customer/create-customer.schema';
import { CustomerMapper } from 'src/application/mappers/customer.mapper';
import { Customer } from 'src/domain/entity/customer/customer.entity';
import IUserRepository from 'src/domain/repository/base/user.repository';
import { SavePasswordUseCase } from '../auth/save-password.usecase';

@Injectable()
export class CustomerCreationUseCase {
  constructor(
    private userRepository: IUserRepository,
    private savePasswordUseCase: SavePasswordUseCase,
  ) {}
  async execute(data: CreateCustomerDto): Promise<Partial<Customer>> {
    const customer = CustomerMapper.toOrmEntity(data);
    const user = await this.userRepository.create(customer);
    this.savePasswordUseCase.execute(user.id, data.password, data.email);
    return customer;
  }

  async getAll(): Promise<Customer[]> {
    return this.userRepository.findAll();
  }
}
