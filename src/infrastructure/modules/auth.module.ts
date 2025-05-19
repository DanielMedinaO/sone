import { Module } from '@nestjs/common';
import { SavePasswordUseCase } from 'src/application/use-case/auth/save-password.usecase';
import { GetLoginUseCase } from 'src/application/use-case/auth/get-login/get-login.usecase';
import { RepositoryModule } from './repository.module';
import { AuthController } from 'src/web/auth/auth.controller';
import { JwtModule } from '@nestjs/jwt';
import { jwt } from '../config/const/jwt.const';

@Module({
  imports: [
    RepositoryModule,
    JwtModule.register({
      global: true,
      secret: jwt.secret,
      signOptions: { expiresIn: '3600s' },
    }),
  ],
  providers: [SavePasswordUseCase, GetLoginUseCase],
  exports: [SavePasswordUseCase, GetLoginUseCase],
  controllers: [AuthController],
})
export class AuthModule {}
