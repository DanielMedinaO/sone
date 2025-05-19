import { UnauthorizedException } from '@nestjs/common';
import { GetLoginUseCase } from './get-login.usecase';
import * as bcrypt from 'bcrypt';

describe('GetLoginUseCase', () => {
  let useCase: GetLoginUseCase;
  let authRepositoryMock: any;
  let jwtServiceMock: any;

  beforeEach(() => {
    authRepositoryMock = {
      find: jest.fn(),
    };
    jwtServiceMock = {
      signAsync: jest.fn(),
    };

    useCase = new GetLoginUseCase(authRepositoryMock, jwtServiceMock);
  });

  it('should return access_token when credentials are valid', async () => {
    const mockUser = {
      id: 'user-id-123',
      name: 'Daniel',
      surnames: 'Pérez',
      email: 'daniel@example.com',
      phone: '1234567890',
    };
    const passwordHash = await bcrypt.hash('validPassword', 10);

    authRepositoryMock.find.mockResolvedValue({
      user: mockUser,
      password: passwordHash,
    });
    jwtServiceMock.signAsync.mockResolvedValue('fake-jwt-token');

    const result = await useCase.execute({
      email: 'daniel@example.com',
      password: 'validPassword',
    });

    expect(authRepositoryMock.find).toHaveBeenCalledWith(
      { user: { OR: [{ email: 'daniel@example.com' }, { phone: undefined }] } },
      { user: true },
    );
    expect(bcrypt.compare).toBeDefined();
    expect(jwtServiceMock.signAsync).toHaveBeenCalledWith({
      sub: mockUser.id,
      username: mockUser.name,
      surnames: mockUser.surnames,
      email: mockUser.email,
      phone: mockUser.phone,
    });
    expect(result).toEqual({ access_token: 'fake-jwt-token' });
  });

  it('should throw UnauthorizedException if user not found', async () => {
    authRepositoryMock.find.mockResolvedValue(null);

    await expect(
      useCase.execute({
        email: 'noexist@example.com',
        password: 'anyPassword',
      }),
    ).rejects.toThrow(UnauthorizedException);
  });

  it('should throw UnauthorizedException if password does not match', async () => {
    const mockUser = {
      id: 'user-id-123',
      name: 'Daniel',
      surnames: 'Pérez',
      email: 'daniel@example.com',
      phone: '1234567890',
    };
    const passwordHash = await bcrypt.hash('validPassword', 10);

    authRepositoryMock.find.mockResolvedValue({
      user: mockUser,
      password: passwordHash,
    });

    (jest.spyOn(bcrypt, 'compare') as any).mockResolvedValue(false);

    await expect(
      useCase.execute({
        email: 'daniel@example.com',
        password: 'wrongPassword',
      }),
    ).rejects.toThrow(UnauthorizedException);
  });
});
