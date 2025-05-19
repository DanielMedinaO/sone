import { IBaseRepository } from '../base/base.repository';
import { Auth } from 'src/domain/entity/auth/auth.entity';

export default abstract class IAuthRepository extends IBaseRepository<Auth> {}
