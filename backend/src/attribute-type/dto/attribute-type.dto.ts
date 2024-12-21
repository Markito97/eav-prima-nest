import { ApiProperty } from '@nestjs/swagger';

export class AttributeTypeDto {
  @ApiProperty()
  id: number;

  @ApiProperty()
  name: string;
}
