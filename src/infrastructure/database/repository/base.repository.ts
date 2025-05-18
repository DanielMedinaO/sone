import { IBaseRepository } from 'src/domain/repository/base/base.repository';

export abstract class BaseRepositoy<T> implements Partial<IBaseRepository<T>> {
  constructor(protected client: any) {}
  create(data: T): Promise<T> {
    return this.client.create({ data });
  }

  findOneBy(where: object): Promise<T> {
    return this.client.findUnique({ where });
  }

  findAll(): Promise<T[]> {
    return this.client.findMany();
  }
}
