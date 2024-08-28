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
import { AttributeService } from './attribute.service';
import { CreateAttributeDto } from './dto/create-attribute.dto';
import { UpdateAttributeDto } from './dto/update-attribute.dto';

@ApiTags('attribute')
@Controller('attribute')
export class AttributeController {
  constructor(private readonly attributeService: AttributeService) {}

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
