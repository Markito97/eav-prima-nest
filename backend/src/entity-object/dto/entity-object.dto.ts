import { ApiProperty } from '@nestjs/swagger';

export class EntityObjectDto {
  @ApiProperty()
  id: number;

  @ApiProperty()
  objectTypeId: number;
}
