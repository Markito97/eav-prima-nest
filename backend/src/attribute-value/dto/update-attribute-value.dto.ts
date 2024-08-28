import { ApiProperty } from '@nestjs/swagger';

export class UpdateAttributeValueDto {
  @ApiProperty()
  entityObjectId: number;

  @ApiProperty()
  attributeObjectTypeId: number;
}
