// import { PrismaClient } from '@prisma/client';
// import { ICompanyRepository } from '../../../domain/company/repositories/ICompanyRepository';
// import { Company } from '../../../domain/company/entities/Company';

// const prisma = new PrismaClient();

// export class CompanyRepository implements ICompanyRepository {
//   async create(company: Company): Promise<Company> {
//     const created = await prisma.company.create({
//       data: {
//         id: company.id,
//         name: company.name,
//         address: company.address,
//         active: company.active,
//       },
//     });
//     return new Company(created.id, created.name, created.address, created.active);
//   }

//   async findById(id: string): Promise<Company | null> {
//     const found = await prisma.company.findUnique({ where: { id } });
//     if (!found) return null;
//     return new Company(found.id, found.name, found.address, found.active);
//   }

//   async update(company: Company): Promise<Company> {
//     const updated = await prisma.company.update({
//       where: { id: company.id },
//       data: {
//         name: company.name,
//         address: company.address,
//         active: company.active,
//       },
//     });
//     return new Company(updated.id, updated.name, updated.address, updated.active);
//   }

//   async delete(id: string): Promise<void> {
//     await prisma.company.delete({ where: { id } });
//   }
// }
