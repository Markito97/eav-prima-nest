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

  @ApiOperation({ summary: 'Get list of attribute-types' })
  @ApiOkResponse({
    description: 'Successfully fetched the list of attribute',
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
  @Get()
  async findAll() {
    return await this.attributeService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: string) {
    return await this.attributeService.findOne(+id);
  }

  @Post()
  async create(@Body() createAttributeDto: CreateAttributeDto) {
    return await this.attributeService.create(createAttributeDto);
  }

  @Put()
  async update(@Body() updateAttributeDto: UpdateAttributeDto) {
    return await this.attributeService.update(updateAttributeDto);
  }

  @Delete(':id')
  async remove(@Param('id') id: string) {
    return await this.attributeService.remove(+id);
  }
}
