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
import { CreateAttributeTypeDto } from './dto/create-attribute-type.dto';
import { AttributeTypeService } from './attribute-type.service';
import { UpdateAttributeTypeDto } from './dto/update-attribute-type.dto';
import { AttributeTypeDto } from './dto/attribute-type.dto';
import { ErrorDto } from 'src/common/ErrorDto';

@ApiTags('attribute-type')
@Controller('attribute-type')
export class AttributeTypeController {
  constructor(private readonly attributeTypeService: AttributeTypeService) {}

  @ApiOperation({ summary: 'Get list of attribute-types' })
  @ApiOkResponse({
    description: 'Successfully fetched the list of attribute-types.',
    type: [AttributeTypeDto],
  })
  @ApiNotFoundResponse({
    description: 'Attribute-types not found.',
    type: ErrorDto,
  })
  @ApiInternalServerErrorResponse({
    description: 'Internal server error attribute-types',
    type: ErrorDto,
  })
  @Get()
  async findAll(): Promise<AttributeTypeDto[]> {
    return await this.attributeTypeService.findAll();
  }

  @ApiOperation({ summary: 'Get list attribute-type' })
  @ApiOkResponse({
    description: 'Successfully fetched attribute-type',
    type: AttributeTypeDto,
  })
  @ApiNotFoundResponse({
    description: 'Attribute-type not found.',
    type: ErrorDto,
  })
  @ApiInternalServerErrorResponse({
    description: 'Internal server error Attribute-type',
    type: ErrorDto,
  })
  @Get(':id')
  async findOne(@Param('id') id: string) {
    return await this.attributeTypeService.findOne(+id);
  }

  @ApiOperation({ summary: 'Create attribute-type' })
  @ApiOkResponse({
    description: 'Successfully created attribute-type',
    type: AttributeTypeDto,
  })
  @Post()
  async create(@Body() createAttributeTypeDto: CreateAttributeTypeDto) {
    return await this.attributeTypeService.create(createAttributeTypeDto);
  }

  @ApiOperation({ summary: 'Update attribute-type' })
  @ApiOkResponse({
    description: 'Successfully updated attribute-type',
    type: AttributeTypeDto,
  })
  @Put()
  async update(@Body() updateAttributeTypeDto: UpdateAttributeTypeDto) {
    return await this.attributeTypeService.update(updateAttributeTypeDto);
  }

  @ApiOperation({ summary: 'Delete attribute-type' })
  @ApiOkResponse({
    description: 'Successfully deleted attribute-type',
    type: AttributeTypeDto,
  })
  @Delete(':id')
  async remove(@Param('id') id: string) {
    return await this.attributeTypeService.remove(+id);
  }
}
