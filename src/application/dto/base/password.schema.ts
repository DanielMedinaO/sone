import { IsString, MinLength, MaxLength } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class PasswordDto {
  @ApiProperty({
    description: 'Contraseña',
    example: 'password123',
  })
  @IsString()
  @MinLength(4)
  @MaxLength(20)
  password: string;
}
