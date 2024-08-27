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
import { ApiTags } from '@nestjs/swagger';

@ApiTags('object-type')
@Controller('object-type')
export class ObjectTypeController {
  constructor(private readonly objectTypeService: ObjectTypeService) {}

  @Get()
  async findAll() {
    return await this.objectTypeService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: string) {
    return await this.objectTypeService.findOne(+id);
  }

  @Post()
  async create(@Body() createObjectTypeDto: CreateObjectTypeDto) {
    return await this.objectTypeService.create(createObjectTypeDto);
  }

  @Put()
  async update(@Body() updateObjectTypeDto: UpdateObjectTypeDto) {
    return await this.objectTypeService.update(updateObjectTypeDto);
  }

  @Delete(':id')
  async remove(@Param('id') id: string) {
    return await this.objectTypeService.remove(+id);
  }
}
