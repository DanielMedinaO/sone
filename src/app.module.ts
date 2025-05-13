import { Module } from '@nestjs/common';
import { HealthController } from './interfaces/http/controllers/health.controller';
import { ConfigModule } from '@nestjs/config';
import * as fs from 'fs';

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
  ],
  controllers: [HealthController],
  // providers: [AppService],
})
export class AppModule {}
