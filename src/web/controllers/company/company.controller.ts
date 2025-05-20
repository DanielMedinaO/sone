import { Body, Controller, Get, Post } from '@nestjs/common';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { CreateCompanyDto } from 'src/application/dto/company/create-company.schema';
import { CompanyCreationUseCase } from 'src/application/use-case/company/company-creation.usecase';

@ApiTags('Company')
@Controller('company')
export class CompanyController {
  constructor(private companyCreationUseCase: CompanyCreationUseCase) {}

  @Post()
  @ApiOperation({ summary: 'Crea una compañia en el backend' })
  @ApiResponse({ status: 200, description: 'a company was created' })
  createCustomer(@Body() data: CreateCompanyDto) {
    return this.companyCreationUseCase.execute(data);
  }

  @Get()
  @ApiOperation({ summary: 'Obtiene la lista de todas las compañias' })
  @ApiResponse({ status: 200, description: 'OK' })
  getAllCustomer() {
    return this.companyCreationUseCase.getAll();
  }
}
