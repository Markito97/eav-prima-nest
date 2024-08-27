import { ApiProperty } from '@nestjs/swagger';

export class UpdateValueStringDto {
  @ApiProperty()
  id: number;

  @ApiProperty()
  attributeValueId: number;

  @ApiProperty()
  value: string;
}
