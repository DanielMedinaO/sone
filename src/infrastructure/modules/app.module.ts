import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import * as fs from 'fs';
import { CustomerController } from 'src/web/controllers/customer/customer.controller';
import { HealthController } from 'src/web/controllers/health/health.controller';
import { RepositoryModule } from './repository.module';
import { PrismaModule } from './prisma.module';

function getEnvFilePath(): string {
  const nodeEnv = process.env.NODE_ENV || 'dev';
  const filePath = `.env.${nodeEnv}`;
  return fs.existsSync(filePath) ? filePath : '.env';
}

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: getEnvFilePath(),
      isGlobal: true,
    }),
    RepositoryModule,
    PrismaModule,
  ],
  controllers: [HealthController, CustomerController],
})
export class AppModule {}
