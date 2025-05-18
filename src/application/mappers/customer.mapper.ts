import { User } from 'src/domain/entity/base/user.entity';
import { CreateCustomerDto } from '../dto/customer/create-customer.schema';
import { UserStatus } from 'src/domain/enums/user-status';

export class CustomerMapper {
  static toOrmEntity(data: CreateCustomerDto): User {
    return new User(
      data.name,
      data.surnames,
      data.phone,
      data.birthdate,
      UserStatus.ACTIVE,
      data.email,
    );
  }
}
