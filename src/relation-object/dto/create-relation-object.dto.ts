import { ApiProperty } from '@nestjs/swagger';

export class CreateRelationObjectDto {
  @ApiProperty()
  relationTypeId: number;

  @ApiProperty()
  entitySourceId: number;

  @ApiProperty()
  entityTargetId: number;
}
