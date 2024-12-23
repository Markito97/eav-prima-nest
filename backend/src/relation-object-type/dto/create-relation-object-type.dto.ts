import { ApiProperty } from '@nestjs/swagger';

export class CreateRelationObjectTypeDto {
  @ApiProperty()
  id: number;

  @ApiProperty()
  relationTypeId: number;

  @ApiProperty()
  sourceTypeId: number;

  @ApiProperty()
  targetTypeId: number;
}
