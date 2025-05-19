import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import * as fs from 'fs';
import { HealthController } from 'src/web/controllers/health/health.controller';
import { CommonModule } from './common.module';
import { AuthModule } from './auth.module';

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
    AuthModule,
    CommonModule,
  ],
  controllers: [HealthController],
})
export class AppModule {}
