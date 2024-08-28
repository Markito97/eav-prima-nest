import { Body, Controller, Post } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { CreateRelationTypeDto } from './dto/create-relation-type.dto';
import { RelationTypeService } from './relation-type.service';

@ApiTags('relation-type')
@Controller('relation-type')
export class RelationTypeController {
  constructor(private readonly relationTypeService: RelationTypeService) {}

  @Post()
  async create(@Body() createRelationObject: CreateRelationTypeDto) {
    return await this.relationTypeService.create(createRelationObject);
  }
}
