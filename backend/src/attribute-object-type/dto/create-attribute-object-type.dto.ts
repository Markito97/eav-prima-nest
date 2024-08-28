import { ApiProperty } from '@nestjs/swagger';

export class CreateAttributeObjectTypeDto {
  @ApiProperty()
  objectTypeId: number;

  @ApiProperty()
  attributeId: number;
}
