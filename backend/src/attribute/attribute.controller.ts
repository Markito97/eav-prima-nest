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
import { AttributeService } from './attribute.service';
import { CreateAttributeDto } from './dto/create-attribute.dto';
import { UpdateAttributeDto } from './dto/update-attribute.dto';
import { AttributeDto } from './dto/attribute.dto';
import { ErrorDto } from 'src/common/ErrorDto';

@ApiTags('attribute')
@Controller('attribute')
export class AttributeController {
  constructor(private readonly attributeService: AttributeService) {}

  @ApiOperation({ summary: 'Get list of attributes' })
  @ApiOkResponse({
    description: 'Successfully fetched the list of attributes',
    type: [AttributeDto],
  })
  @ApiNotFoundResponse({
    description: 'Attributes not found.',
    type: ErrorDto,
  })
  @ApiInternalServerErrorResponse({
    description: 'Internal server error attributes',
    type: ErrorDto,
  })
  @Get()
  async findAll() {
    return await this.attributeService.findAll();
  }

  @ApiOperation({ summary: 'Get attribute' })
  @ApiOkResponse({
    description: 'Successfully fetched the attribute',
    type: [AttributeDto],
  })
  @ApiNotFoundResponse({
    description: 'Attribute not found.',
    type: ErrorDto,
  })
  @ApiInternalServerErrorResponse({
    description: 'Internal server error attribute',
    type: ErrorDto,
  })
  @Get(':id')
  async findOne(@Param('id') id: string) {
    return await this.attributeService.findOne(+id);
  }

  @ApiOperation({ summary: 'Create attribute' })
  @ApiOkResponse({
    description: 'Successfully created attribute',
    type: AttributeDto,
  })
  @Post()
  async create(@Body() createAttributeDto: CreateAttributeDto) {
    return await this.attributeService.create(createAttributeDto);
  }

  @ApiOperation({ summary: 'Update attribute' })
  @ApiOkResponse({
    description: 'Successfully updated attribute',
    type: AttributeDto,
  })
  @Put()
  async update(@Body() updateAttributeDto: UpdateAttributeDto) {
    return await this.attributeService.update(updateAttributeDto);
  }

  @ApiOperation({ summary: 'Delete attribute' })
  @ApiOkResponse({
    description: 'Successfully deleted attribute',
    type: AttributeDto,
  })
  @Delete(':id')
  async remove(@Param('id') id: string) {
    return await this.attributeService.remove(+id);
  }
}
