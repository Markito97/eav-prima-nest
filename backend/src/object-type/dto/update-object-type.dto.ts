import { ApiProperty } from '@nestjs/swagger';

export class UpdateObjectTypeDto {
  @ApiProperty()
  id: string;

  @ApiProperty()
  name: string;
}
