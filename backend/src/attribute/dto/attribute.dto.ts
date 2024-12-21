import { ApiProperty } from '@nestjs/swagger';

export class AttributeDto {
  @ApiProperty()
  id: number;

  @ApiProperty()
  name: string;
}
