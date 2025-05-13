import { Controller, Get } from '@nestjs/common';

@Controller()
export class HealthController {
  constructor() {}

  @Get()
  getHello(): string {
    const message = String(process.env.DATABASE_URL).toUpperCase();
    return `${message}`;
  }
}
