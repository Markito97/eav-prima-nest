import { Body, Controller, Get, Post } from '@nestjs/common';
import {
  ApiInternalServerErrorResponse,
  ApiNotFoundResponse,
  ApiOkResponse,
  ApiOperation,
  ApiTags,
} from '@nestjs/swagger';
import { ErrorDto } from 'src/common/ErrorDto';
import { CreateRelationTypeDto } from 'src/relation-type/dto/create-relation-type.dto';
import { RelationObjectTypeDto } from './dto/relation-object-type.dto';
import { RelationObjectTypeService } from './relation-object-type.service';

@ApiTags('relation-object-type')
@Controller('relation-object-type')
export class RelationObjectTypeController {
  constructor(
    private readonly relationObjectTypeService: RelationObjectTypeService,
  ) {}

  @ApiOperation({ summary: 'Get list of relation-object-types' })
  @ApiOkResponse({
    description: 'Successfully fetched the list of relation-object-types',
    type: [RelationObjectTypeDto],
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
    return await this.relationObjectTypeService.findAll();
  }

  @ApiOperation({ summary: 'Create relation-object-type' })
  @ApiOkResponse({
    description: 'Successfully created relation-object-type',
    type: RelationObjectTypeDto,
  })
  @Post()
  async create(@Body() createRelationObject: CreateRelationTypeDto) {
    return await this.relationObjectTypeService.create(createRelationObject);
  }
}
