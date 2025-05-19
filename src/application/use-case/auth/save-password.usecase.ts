import { Injectable } from '@nestjs/common';
import IAuthRepository from 'src/domain/repository/auth/user-auth.repository';
import * as bcrypt from 'bcrypt';

@Injectable()
export class SavePasswordUseCase {
  constructor(private authRepository: IAuthRepository) {}
  async execute(
    userId: string,
    password: string,
    email?: string,
  ): Promise<void> {
    const saltRounds = 10;
    const passwordHash = await bcrypt.hash(password, saltRounds);
    await this.authRepository.create({
      user_id: userId,
      password: passwordHash,
      createdBy: email,
    });
  }
}
