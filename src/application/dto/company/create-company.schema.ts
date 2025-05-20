import { IsString, MinLength, MaxLength } from 'class-validator';

import { ApiProperty } from '@nestjs/swagger';

export class CreateCompanyDto {
  @ApiProperty({
    description: 'Nombre de la compañia',
    example: 'Coca cola',
  })
  @IsString()
  @MinLength(2)
  @MaxLength(50)
  name: string;
}
