import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { AttributeValueService } from './attribute-value.service';
import { CreateAttributeValueDto } from './dto/create-attribute-value.dto';
import { UpdateAttributeValueDto } from './dto/update-attribute-value.dto';

@ApiTags('attribute-value')
@Controller('attribute-value')
export class AttributeValueController {
  constructor(private readonly attributeValueService: AttributeValueService) {}

  @Get()
  async findAll() {
    return await this.attributeValueService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: string) {
    return await this.attributeValueService.findOne(+id);
  }

  @Post()
  async create(@Body() createAttributeValueDto: CreateAttributeValueDto) {
    return await this.attributeValueService.create(createAttributeValueDto);
  }

  @Put()
  async update(@Body() updateAttributeValueDto: UpdateAttributeValueDto) {
    return await this.attributeValueService.update(updateAttributeValueDto);
  }

  @Delete(':id')
  async remove(@Param('id') id: string) {
    return await this.attributeValueService.remove(+id);
  }
}
