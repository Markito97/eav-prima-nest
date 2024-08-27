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
import { CreateAttributeTypeDto } from './dto/create-attribute-type.dto';
import { AttributeTypeService } from './attribute-type.service';
import { UpdateAttributeTypeDto } from './dto/update-attribute-type.dto';

@ApiTags('attribute-type')
@Controller('attribute-type')
export class AttributeTypeController {
  constructor(private readonly attributeTypeService: AttributeTypeService) {}

  @Get()
  async findAll() {
    return await this.attributeTypeService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: string) {
    return await this.attributeTypeService.findOne(+id);
  }

  @Post()
  async create(@Body() createAttributeTypeDto: CreateAttributeTypeDto) {
    return await this.attributeTypeService.create(createAttributeTypeDto);
  }

  @Put()
  async update(@Body() updateAttributeTypeDto: UpdateAttributeTypeDto) {
    return await this.attributeTypeService.update(updateAttributeTypeDto);
  }

  @Delete(':id')
  async remove(@Param('id') id: string) {
    return await this.attributeTypeService.remove(+id);
  }
}
