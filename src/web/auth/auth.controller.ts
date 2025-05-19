import { Controller, Get, Query } from '@nestjs/common';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { GetLoginDto } from 'src/application/dto/auth/get-login.schema';
import { GetLoginUseCase } from 'src/application/use-case/auth/get-login.usecase';

@ApiTags('Auth')
@Controller('auth')
export class AuthController {
  constructor(private getLoginUseCase: GetLoginUseCase) {}

  @Get()
  @ApiOperation({ summary: 'Obtiene el token para el login del usuario' })
  @ApiResponse({ status: 200, description: 'OK' })
  getAllCustomer(@Query() data: GetLoginDto) {
    return this.getLoginUseCase.execute(data);
  }
}
