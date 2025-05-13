//Controllers

// import { Request, Response } from 'express';
// import { CreateCompanyUseCase } from '../../../application/auth/use-cases/';

// export class CompanyController {
//   constructor(private readonly createCompanyUseCase: CreateCompanyUseCase) {}

//   async create(req: Request, res: Response): Promise<Response> {
//     const { name, address } = req.body;
//     const company = await this.createCompanyUseCase.execute(name, address);
//     return res.status(201).json(company);
//   }
// }
