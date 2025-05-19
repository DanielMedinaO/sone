export abstract class IBaseRepository<T> {
  abstract create(doc: Partial<T>): Promise<T>;
  abstract delete(where: any | string): Promise<void>;
  abstract findAll(): Promise<T[]>;
  abstract findOneBy(options: object | object[]): Promise<T>;
  abstract find(where: any, relations?: string[]): Promise<T>;
  abstract findMany(
    where: any,
    relations: string[],
    select?: any,
  ): Promise<T[]>;
  abstract raw(expression: string, parameters?: any[]): Promise<T[]>;
  abstract createQueryBuilder(alias?: string): any;
  abstract createMany(docs: any): Promise<T[]>;
  abstract saveMany(docs: T[]): Promise<T[]>;
}
