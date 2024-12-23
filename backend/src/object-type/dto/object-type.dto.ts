import { ApiProperty } from '@nestjs/swagger';
import { AttributeObjectTypeDto } from 'src/attribute-object-type/dto/attribute-object-type.dto';
import { EntityObjectDto } from 'src/entity-object/dto/entity-object.dto';

export class ObjectTypeDto {
  @ApiProperty()
  id: number;

  @ApiProperty()
  name: number;

  @ApiProperty()
  attributeObjectTypes: AttributeObjectTypeDto[];

  @ApiProperty()
  entityObjectTypes: EntityObjectDto[];
}
