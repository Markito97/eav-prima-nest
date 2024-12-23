import { ApiProperty } from '@nestjs/swagger';

export class RelationObjectTypeDto {
  @ApiProperty()
  id: number;

  @ApiProperty()
  relationTypeId: number;

  @ApiProperty()
  sourceTypeId: number;

  @ApiProperty()
  targetTypeId: number;
}
