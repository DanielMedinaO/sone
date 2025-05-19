import { IBaseRepository } from '../base/base.repository';
import { UserAuth } from 'src/domain/entity/auth/auth.entity';

export default abstract class IUserAuthRepository extends IBaseRepository<UserAuth> {}
