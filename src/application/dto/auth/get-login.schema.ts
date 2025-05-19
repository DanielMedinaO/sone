import { IsString, IsEmail, ValidateIf } from 'class-validator';
import { ApiProperty, IntersectionType } from '@nestjs/swagger';
import { PasswordDto } from '../base/password.schema';

export class GetLoginDto extends IntersectionType(PasswordDto) {
  @ApiProperty({
    description: 'Teléfono',
    example: '1234567890',
  })
  @IsString()
  @ValidateIf((o) => !o.email)
  phone: string;

  @ApiProperty({
    description: 'Email del cliente',
    example: 'daniel.medina@gmail.com',
  })
  @IsEmail()
  @ValidateIf((o) => !o.phone)
  email: string;
}
