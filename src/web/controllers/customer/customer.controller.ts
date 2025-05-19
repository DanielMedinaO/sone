import { Body, Controller, Get, Post } from '@nestjs/common';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { CreateCustomerDto } from 'src/application/dto/customer/create-customer.schema';
import { CustomerCreationUseCase } from 'src/application/use-case/customer/customer-creation.usecase';

@ApiTags('Customer')
@Controller('customer')
export class CustomerController {
  constructor(private customerCreationUseCase: CustomerCreationUseCase) {}

  @Post()
  @ApiOperation({ summary: 'Crea un cliente en el backend' })
  @ApiResponse({ status: 200, description: 'a customer was created' })
  createCustomer(@Body() data: CreateCustomerDto) {
    return this.customerCreationUseCase.execute(data);
  }

  @Get()
  @ApiOperation({ summary: 'Obtiene la lista de todos los clientes' })
  @ApiResponse({ status: 200, description: 'OK' })
  getAllCustomer() {
    return this.customerCreationUseCase.getAll();
  }
}
