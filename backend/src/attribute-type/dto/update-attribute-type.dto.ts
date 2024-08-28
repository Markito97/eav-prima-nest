import { ApiProperty } from '@nestjs/swagger';

export class UpdateAttributeTypeDto {
  @ApiProperty()
  id: number;

  @ApiProperty()
  name: string;
}
