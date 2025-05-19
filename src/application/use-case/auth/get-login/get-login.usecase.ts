import { Injectable, UnauthorizedException } from '@nestjs/common';
import * as bcrypt from 'bcrypt';
import { GetLoginDto } from '../../../../../src/application/dto/auth/get-login.schema'; // TODO: Revisar rootDir para JEST (No funciona con src)
import IUserAuthRepository from '../../../../../src/domain/repository/auth/user-auth.repository'; // TODO: Revisar rootDir para JEST (No funciona con src)
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class GetLoginUseCase {
  constructor(
    private authRepository: IUserAuthRepository,
    private jwtService: JwtService,
  ) {}
  async execute(data: GetLoginDto): Promise<{ access_token: string }> {
    const info = await this.authRepository.find(
      {
        user: {
          OR: [{ email: data?.email }, { phone: data?.phone }],
        },
      },
      {
        user: true,
      },
    );

    if (!info) throw new UnauthorizedException('User not found');
    const { user, password: passwordHash } = info;

    const isMatch = await bcrypt.compare(data.password, passwordHash);
    if (!isMatch) throw new UnauthorizedException('Invalid credentials');

    const payload = {
      sub: user.id,
      username: user.name,
      surnames: user.surnames,
      email: user.email,
      phone: user.phone,
    };

    return {
      access_token: await this.jwtService.signAsync(payload),
    };
  }
}
