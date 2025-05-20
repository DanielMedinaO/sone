import { IBaseRepository } from '../base/base.repository';
import { Company } from 'src/domain/entity/company/company.entity';

export default abstract class ICompanyRepository extends IBaseRepository<Company> {}
