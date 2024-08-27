import { ApiProperty } from '@nestjs/swagger';

export class UpdateAttributeDto {
  @ApiProperty()
  id: string;

  @ApiProperty()
  name: string;

  @ApiProperty()
  attributeTypeId: number;
}
