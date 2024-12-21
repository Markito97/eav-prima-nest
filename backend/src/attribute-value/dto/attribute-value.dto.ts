import { ApiProperty } from '@nestjs/swagger';

export class AttributeValueDto {
  @ApiProperty()
  entityObjectId: number;

  @ApiProperty()
  attributeObjectTypeId: number;
}
