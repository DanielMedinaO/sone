import { Injectable, UnauthorizedException } from '@nestjs/common';
import IAuthRepository from 'src/domain/repository/auth/user-auth.repository';
import * as bcrypt from 'bcrypt';
import IUserRepository from 'src/domain/repository/base/user.repository';
import { GetLoginDto } from 'src/application/dto/auth/get-login.schema';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class GetLoginUseCase {
  constructor(
    private authRepository: IAuthRepository,
    private userRepository: IUserRepository,
    private jwtService: JwtService,
  ) {}
  async execute(data: GetLoginDto): Promise<{ access_token: string }> {
    const user = await this.userRepository.findOneBy({
      email: data?.email || undefined,
      phone: data?.phone || undefined,
    });
    if (!user) throw new UnauthorizedException('User not found');

    const userAuth = await this.authRepository.findOneBy({
      user_id: user.id,
    });
    const isMatch = await bcrypt.compare(data.password, userAuth.password);
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
