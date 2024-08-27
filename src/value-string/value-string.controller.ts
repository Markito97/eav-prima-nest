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
import { ValueStringService } from './value-string.service';
import { CreateEntityObjectDto } from 'src/entity-object/dto/create-entity-object.dto';
import { UpdateEntityObjectDto } from 'src/entity-object/dto/update-entity-object.dto';

@ApiTags('value-string')
@Controller('value-string')
export class ValueStringController {
  constructor(private readonly valueStringService: ValueStringService) {}

  @Get()
  async findAll() {
    return await this.valueStringService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: string) {
    return await this.valueStringService.findOne(+id);
  }

  @Post()
  async create(@Body() createEntityOjectDto: CreateEntityObjectDto) {
    return await this.valueStringService.create(createEntityOjectDto);
  }

  @Put()
  async update(@Body() updateEntityObjectDto: UpdateEntityObjectDto) {
    return await this.valueStringService.update(updateEntityObjectDto);
  }

  @Delete(':id')
  async remove(@Param('id') id: string) {
    return await this.valueStringService.remove(+id);
  }
}
