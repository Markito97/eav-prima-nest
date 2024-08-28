import { ApiProperty } from '@nestjs/swagger';

export class CreateAttributeValueDto {
  @ApiProperty()
  entityObjectId: number;

  @ApiProperty()
  attributeObjectTypeId: number;
}
