import { User } from 'src/domain/entity/base/user.entity';
import { IBaseRepository } from './base.repository';

export default abstract class IUserRepository extends IBaseRepository<User> {}
