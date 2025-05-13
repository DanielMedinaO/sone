import { Controller, Get } from '@nestjs/common';

@Controller()
export class HealthController {
  constructor() {}

  @Get()
  getHello(): string {
    return 'Hola Soy Sone';
  }
}
