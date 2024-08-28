import { ApiProperty } from '@nestjs/swagger';

export class CreateObjectTypeDto {
  @ApiProperty()
  name: string;
}
