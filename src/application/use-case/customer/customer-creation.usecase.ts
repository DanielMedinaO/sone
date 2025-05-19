import { Injectable } from '@nestjs/common';
import { CreateCustomerDto } from 'src/application/dto/customer/create-customer.schema';
import { CustomerMapper } from 'src/application/mappers/customer.mapper';
import { Customer } from 'src/domain/entity/customer/customer.entity';
import IAuthRepository from 'src/domain/repository/auth/user-auth.repository';
import IUserRepository from 'src/domain/repository/base/user.repository';

@Injectable()
export class CustomerCreationUseCase {
  constructor(
    private userRepository: IUserRepository,
    private authRepository: IAuthRepository,
  ) {}
  async execute(data: CreateCustomerDto): Promise<Partial<Customer>> {
    const customer = CustomerMapper.toOrmEntity(data);
    const user = await this.userRepository.create(customer);
    await this.authRepository.create({
      user_id: user.id,
      password: data.password,
      createdBy: user.email,
    });
    return customer;
  }

  async getAll(): Promise<Customer[]> {
    return this.userRepository.findAll();
  }
}
