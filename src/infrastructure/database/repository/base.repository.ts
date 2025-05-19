import { IBaseRepository } from 'src/domain/repository/base/base.repository';

export abstract class BaseRepositoy<T> implements Partial<IBaseRepository<T>> {
  constructor(protected client: any) {}
  create(data: Partial<T>): Promise<T> {
    return this.client.create({ data });
  }

  findOneBy(where: object): Promise<T> {
    return this.client.findUnique({ where });
  }

  find(where: object, include: object): Promise<T> {
    return this.client.findFirst({ where, include });
  }

  findAll(): Promise<T[]> {
    return this.client.findMany();
  }
}
