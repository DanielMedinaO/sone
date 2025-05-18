import { Injectable } from '@nestjs/common';
import { CreateCustomerDto } from 'src/application/dto/customer/create-customer.schema';
import { CustomerMapper } from 'src/application/mappers/customer.mapper';
import { Customer } from 'src/domain/entity/customer/customer.entity';
import IUserRepository from 'src/domain/repository/base/user.repository';

@Injectable()
export class CustomerCreationUseCase {
  constructor(private userRepository: IUserRepository) {}
  async execute(data: CreateCustomerDto): Promise<Customer> {
    const user = CustomerMapper.toOrmEntity(data);
    await this.userRepository.create(user);
    return user;
  }
}
