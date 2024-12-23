import { ApiProperty } from '@nestjs/swagger';

export class RelationObjectDto {
  @ApiProperty()
  id: number;

  @ApiProperty()
  relationTypeId: number;

  @ApiProperty()
  entitySourceId: number;

  @ApiProperty()
  entityTargetId: number;
}
