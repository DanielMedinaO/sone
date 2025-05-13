import { Module } from '@nestjs/common';
import { HealthController } from './interfaces/http/controllers/health.controller';

@Module({
  imports: [],
  controllers: [HealthController],
  // providers: [AppService],
})
export class AppModule {}
