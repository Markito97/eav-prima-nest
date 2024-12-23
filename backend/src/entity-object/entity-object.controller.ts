import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { CreateEntityObjectDto } from './dto/create-entity-object.dto';
import { UpdateEntityObjectDto } from './dto/update-entity-object.dto';
import { EntityObjectService } from './entity-object.service';
import {
  ApiInternalServerErrorResponse,
  ApiNotFoundResponse,
  ApiOkResponse,
  ApiOperation,
  ApiTags,
} from '@nestjs/swagger';
import { EntityObjectDto } from './dto/entity-object.dto';
import { ErrorDto } from 'src/common/ErrorDto';

@ApiTags('entity-object')
@Controller('entity-object')
export class EntityObjectController {
  constructor(private readonly entityObjectService: EntityObjectService) {}

  @ApiOperation({ summary: 'Get list of entity-objects' })
  @ApiOkResponse({
    description: 'Successfully fetched the list of entity-objects',
    type: [EntityObjectDto],
  })
  @ApiNotFoundResponse({
    description: 'Entity-objects not found.',
    type: ErrorDto,
  })
  @ApiInternalServerErrorResponse({
    description: 'Internal server error entity-objects',
    type: ErrorDto,
  })
  @Get()
  async findAll() {
    return await this.entityObjectService.findAll();
  }

  @ApiOperation({ summary: 'Get entity-object' })
  @ApiOkResponse({
    description: 'Successfully fetched the entity-object',
    type: [EntityObjectDto],
  })
  @ApiNotFoundResponse({
    description: 'Entity-object not found.',
    type: ErrorDto,
  })
  @ApiInternalServerErrorResponse({
    description: 'Internal server error entity-object',
    type: ErrorDto,
  })
  @Get(':id')
  async findOne(@Param('id') id: string) {
    return await this.entityObjectService.findOne(+id);
  }

  @ApiOperation({ summary: 'Create entity-object' })
  @ApiOkResponse({
    description: 'Successfully created entity-object',
    type: EntityObjectDto,
  })
  @Post()
  async create(@Body() createEntityOjectDto: CreateEntityObjectDto) {
    return await this.entityObjectService.create(createEntityOjectDto);
  }

  @ApiOperation({ summary: 'Update entity-object' })
  @ApiOkResponse({
    description: 'Successfully updated entity-object',
    type: EntityObjectDto,
  })
  @Put()
  async update(@Body() updateEntityObjectDto: UpdateEntityObjectDto) {
    return await this.entityObjectService.update(updateEntityObjectDto);
  }

  @ApiOperation({ summary: 'Delete entity-object' })
  @ApiOkResponse({
    description: 'Successfully deleted entity-object',
    type: EntityObjectDto,
  })
  @Delete(':id')
  async remove(@Param('id') id: string) {
    return await this.entityObjectService.remove(+id);
  }
}
