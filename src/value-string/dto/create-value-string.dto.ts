import { ApiProperty } from '@nestjs/swagger';

export class CreateValueStringDto {
  @ApiProperty()
  attributeValueId: number;

  @ApiProperty()
  value: string;
}
