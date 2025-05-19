import { User } from 'src/domain/entity/base/user.entity';
import { CreateCustomerDto } from '../dto/customer/create-customer.schema';
import { UserStatus } from 'src/domain/enums/user-status';

export class CustomerMapper {
  static toOrmEntity(data: CreateCustomerDto): Partial<User> {
    return {
      name: data.name,
      surnames: data.surnames,
      phone: data.phone,
      birthdate: data.birthdate,
      status: UserStatus.ACTIVE,
      email: data.email,
    } as Partial<User>;
  }
}
