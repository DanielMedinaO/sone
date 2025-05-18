import {
  IsString,
  IsEmail,
  MinLength,
  IsOptional,
  MaxLength,
  IsDateString,
} from 'class-validator';

import { ApiProperty } from '@nestjs/swagger';

export class CreateCustomerDto {
  @ApiProperty({
    description: 'Nombre del cliente',
    example: 'Daniel',
  })
  @IsString()
  @MinLength(2)
  @MaxLength(50)
  name: string;

  @ApiProperty({
    description: 'Apellidos del cliente',
    example: 'Medina Osorio',
  })
  @IsString()
  @MinLength(2)
  @MaxLength(100)
  surnames: string;

  @ApiProperty({
    description: 'Fecha de cumpleaños',
    example: '1999-05-01T00:00:00Z',
  })
  @IsDateString()
  birthdate: Date;

  @ApiProperty({
    description: 'Email del cliente',
    example: 'daniel.medina@gmail.com',
  })
  @IsOptional()
  @IsEmail()
  email?: string;

  @ApiProperty({
    description: 'Teléfono',
    example: '1234567890',
  })
  @IsString()
  phone: string;
}
