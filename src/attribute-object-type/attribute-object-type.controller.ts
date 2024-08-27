import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { AttributeObjectTypeService } from './attribute-object-type.service';
import { CreateAttributeObjectTypeDto } from './dto/create-attribute-object-type.dto';
import { UpdateAttributeObjectTypeDto } from './dto/update-attribute-object-type.dto';

@Controller('attribute-object-type')
export class AttributeObjectTypeController {
  constructor(
    private readonly attributeObjectTypeService: AttributeObjectTypeService,
  ) {}

  @Get()
  async findAll() {
    return await this.attributeObjectTypeService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: string) {
    return await this.attributeObjectTypeService.findOne(+id);
  }

  @Post()
  async create(
    @Body() createAttributeObjectTypeDto: CreateAttributeObjectTypeDto,
  ) {
    return await this.attributeObjectTypeService.create(
      createAttributeObjectTypeDto,
    );
  }

  @Put()
  async update(
    @Body() updateAttributeObjectTypeDto: UpdateAttributeObjectTypeDto,
  ) {
    return await this.attributeObjectTypeService.update(
      updateAttributeObjectTypeDto,
    );
  }

  @Delete(':id')
  async remove(@Param('id') id: string) {
    return await this.attributeObjectTypeService.remove(+id);
  }
}
