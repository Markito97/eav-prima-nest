import { ApiProperty } from '@nestjs/swagger';

export class UpdateEntityObjectDto {
  @ApiProperty()
  id: number;

  @ApiProperty()
  objectTypeId: number;
}
