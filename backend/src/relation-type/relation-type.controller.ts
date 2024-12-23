import { Body, Controller, Get, Post } from '@nestjs/common';
import {
  ApiInternalServerErrorResponse,
  ApiNotFoundResponse,
  ApiOkResponse,
  ApiOperation,
  ApiTags,
} from '@nestjs/swagger';
import { CreateRelationTypeDto } from './dto/create-relation-type.dto';
import { RelationTypeService } from './relation-type.service';
import { ErrorDto } from 'src/common/ErrorDto';
import { RelationTypeDto } from './dto/relation-type.dto';

@ApiTags('relation-type')
@Controller('relation-type')
export class RelationTypeController {
  constructor(private readonly relationTypeService: RelationTypeService) {}

  @ApiOperation({ summary: 'Get list of relation-types' })
  @ApiOkResponse({
    description: 'Successfully fetched the list of relation-types',
    type: [RelationTypeDto],
  })
  @ApiNotFoundResponse({
    description: 'Relation-types not found.',
    type: ErrorDto,
  })
  @ApiInternalServerErrorResponse({
    description: 'Internal server error relation-types',
    type: ErrorDto,
  })
  @Get()
  async findAll() {
    return await this.relationTypeService.findAll();
  }

  @ApiOperation({ summary: 'Create relation-type' })
  @ApiOkResponse({
    description: 'Successfully created relation-type',
    type: RelationTypeDto,
  })
  @Post()
  async create(@Body() createRelationObject: CreateRelationTypeDto) {
    return await this.relationTypeService.create(createRelationObject);
  }
}
