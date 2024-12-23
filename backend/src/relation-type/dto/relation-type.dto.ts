import { ApiProperty } from '@nestjs/swagger';

export class RelationTypeDto {
  @ApiProperty()
  id: number;

  @ApiProperty()
  name: string;
}
