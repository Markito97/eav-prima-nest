import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import {
  ApiInternalServerErrorResponse,
  ApiNotFoundResponse,
  ApiOkResponse,
  ApiOperation,
  ApiTags,
} from '@nestjs/swagger';
import { RelationObjectService } from './relation-object.service';
import { CreateRelationObjectDto } from './dto/create-relation-object.dto';
import { RelationObjectDto } from './dto/relation-object.dto';
import { ErrorDto } from 'src/common/ErrorDto';

@ApiTags('relation-object')
@Controller('relation-object')
export class RelationObjectController {
  constructor(private readonly relationObjectService: RelationObjectService) {}

  @ApiOperation({ summary: 'Get list of relation-objects' })
  @ApiOkResponse({
    description: 'Successfully fetched the list of relation-objects',
    type: [RelationObjectDto],
  })
  @ApiNotFoundResponse({
    description: 'Relation-objects not found.',
    type: ErrorDto,
  })
  @ApiInternalServerErrorResponse({
    description: 'Internal server error relation-objects',
    type: ErrorDto,
  })
  @Get()
  async findAll() {
    return await this.relationObjectService.findAll();
  }

  @ApiOperation({ summary: 'Get relation-object' })
  @ApiOkResponse({
    description: 'Successfully fetched the relation-object',
    type: RelationObjectDto,
  })
  @ApiNotFoundResponse({
    description: 'Relation-object not found.',
    type: ErrorDto,
  })
  @ApiInternalServerErrorResponse({
    description: 'Internal server error relation-object',
    type: ErrorDto,
  })
  @Get(':id')
  async findOne(@Param('id') id: string) {
    return await this.relationObjectService.findOne(+id);
  }

  @ApiOperation({ summary: 'Create relation-object' })
  @ApiOkResponse({
    description: 'Successfully created relation-object',
    type: RelationObjectDto,
  })
  @Post()
  async create(@Body() createRelationObject: CreateRelationObjectDto) {
    return await this.relationObjectService.create(createRelationObject);
  }

  @ApiOperation({ summary: 'Update relation-object' })
  @ApiOkResponse({
    description: 'Successfully updated relation-object',
    type: RelationObjectDto,
  })
  @Put()
  async update(@Body() updateRelationObject: any) {
    return await this.relationObjectService.update(updateRelationObject);
  }

  @ApiOperation({ summary: 'Delete relation-object' })
  @ApiOkResponse({
    description: 'Successfully deleted relation-object',
    type: RelationObjectDto,
  })
  @Delete(':id')
  async remove(@Param('id') id: string) {
    return await this.relationObjectService.remove(+id);
  }
}
