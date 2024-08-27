import { ApiProperty } from '@nestjs/swagger';

export class UpdateAttributeObjectTypeDto {
  @ApiProperty()
  id: number;

  @ApiProperty()
  objectTypeId: number;

  @ApiProperty()
  attributeId: number;
}
