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
import { AttributeValueService } from './attribute-value.service';
import { CreateAttributeValueDto } from './dto/create-attribute-value.dto';
import { UpdateAttributeValueDto } from './dto/update-attribute-value.dto';
import { ErrorDto } from 'src/common/ErrorDto';
import { AttributeValueDto } from './dto/attribute-value.dto';

@ApiTags('attribute-value')
@Controller('attribute-value')
export class AttributeValueController {
  constructor(private readonly attributeValueService: AttributeValueService) {}

  @ApiOperation({ summary: 'Get list of attribute-value' })
  @ApiOkResponse({
    description: 'Successfully fetched the list of attribute-value',
    type: [AttributeValueDto],
  })
  @ApiNotFoundResponse({
    description: 'Attribute-value not found.',
    type: ErrorDto,
  })
  @ApiInternalServerErrorResponse({
    description: 'Internal server error attribute-value',
    type: ErrorDto,
  })
  @Get()
  async findAll() {
    return await this.attributeValueService.findAll();
  }

  @ApiOperation({ summary: 'Get attribute-value' })
  @ApiOkResponse({
    description: 'Successfully fetched the attribute-value',
    type: AttributeValueDto,
  })
  @ApiNotFoundResponse({
    description: 'Attribute-value not found.',
    type: ErrorDto,
  })
  @ApiInternalServerErrorResponse({
    description: 'Internal server error attribute-value',
    type: ErrorDto,
  })
  @Get(':id')
  async findOne(@Param('id') id: string) {
    return await this.attributeValueService.findOne(+id);
  }

  @ApiOperation({ summary: 'Create attribute-value' })
  @ApiOkResponse({
    description: 'Successfully created attribute-value',
    type: AttributeValueDto,
  })
  @Post()
  async create(@Body() createAttributeValueDto: CreateAttributeValueDto) {
    return await this.attributeValueService.create(createAttributeValueDto);
  }

  @ApiOperation({ summary: 'Update attribute-value' })
  @ApiOkResponse({
    description: 'Successfully updated attribute-value',
    type: AttributeValueDto,
  })
  @Put()
  async update(@Body() updateAttributeValueDto: UpdateAttributeValueDto) {
    return await this.attributeValueService.update(updateAttributeValueDto);
  }

  @ApiOperation({ summary: 'Delete attribute-value' })
  @ApiOkResponse({
    description: 'Successfully deleted attribute-value',
    type: AttributeValueDto,
  })
  @Delete(':id')
  async remove(@Param('id') id: string) {
    return await this.attributeValueService.remove(+id);
  }
}
