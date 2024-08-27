import { ApiProperty } from '@nestjs/swagger';

export class CreateEntityObjectDto {
  @ApiProperty()
  objectTypeId: number;
}
