import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { ObjectTypeService } from './object-type.service';
import { CreateObjectTypeDto } from './dto/create-object-type.dto';
import { UpdateObjectTypeDto } from './dto/update-object-type.dto';
import {
  ApiInternalServerErrorResponse,
  ApiNotFoundResponse,
  ApiOkResponse,
  ApiOperation,
  ApiTags,
} from '@nestjs/swagger';
import { ErrorDto } from 'src/common/ErrorDto';
import { ObjectTypeDto } from './dto/object-type.dto';

@ApiTags('object-type')
@Controller('object-type')
export class ObjectTypeController {
  constructor(private readonly objectTypeService: ObjectTypeService) {}

  @ApiOperation({ summary: 'Get list of object-types' })
  @ApiOkResponse({
    description: 'Successfully fetched the list of object-types',
    type: [ObjectTypeDto],
  })
  @ApiNotFoundResponse({
    description: 'object-types not found.',
    type: ErrorDto,
  })
  @ApiInternalServerErrorResponse({
    description: 'Internal server error object-types',
    type: ErrorDto,
  })
  @Get()
  async findAll() {
    return await this.objectTypeService.findAll();
  }

  @ApiOperation({ summary: 'Get object-type' })
  @ApiOkResponse({
    description: 'Successfully fetched the object-type',
    type: ObjectTypeDto,
  })
  @ApiNotFoundResponse({
    description: 'Object-type not found.',
    type: ErrorDto,
  })
  @ApiInternalServerErrorResponse({
    description: 'Internal server error entity-object',
    type: ErrorDto,
  })
  @Get(':id')
  async findOne(@Param('id') id: string) {
    return await this.objectTypeService.findOne(+id);
  }

  @ApiOperation({ summary: 'Create object-type' })
  @ApiOkResponse({
    description: 'Successfully created object-type',
    type: CreateObjectTypeDto,
  })
  @Post()
  async create(@Body() createObjectTypeDto: CreateObjectTypeDto) {
    return await this.objectTypeService.create(createObjectTypeDto);
  }

  @ApiOperation({ summary: 'Update object-type' })
  @ApiOkResponse({
    description: 'Successfully updated object-type',
    type: UpdateObjectTypeDto,
  })
  @Put()
  async update(@Body() updateObjectTypeDto: UpdateObjectTypeDto) {
    return await this.objectTypeService.update(updateObjectTypeDto);
  }

  @ApiOperation({ summary: 'Delete object-type' })
  @ApiOkResponse({
    description: 'Successfully deleted object-type',
    type: ObjectTypeDto,
  })
  @Delete(':id')
  async remove(@Param('id') id: string) {
    return await this.objectTypeService.remove(+id);
  }
}
