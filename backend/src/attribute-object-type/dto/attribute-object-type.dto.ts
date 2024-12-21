import { ApiProperty } from '@nestjs/swagger';

export class AttributeObjectTypeDto {
  @ApiProperty()
  id: number;

  @ApiProperty()
  objectTypeId: number;

  @ApiProperty()
  attributeId: number;
}
