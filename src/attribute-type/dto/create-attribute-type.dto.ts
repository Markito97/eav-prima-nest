import { ApiProperty } from '@nestjs/swagger';

export class CreateAttributeTypeDto {
  @ApiProperty()
  name: string;
}
