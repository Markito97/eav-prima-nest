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
import { CreateValueStringDto } from './dto/create-value-string.dto';
import { UpdateValueStringDto } from './dto/update-value-string.dto';

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
  async create(@Body() createValueStringDto: CreateValueStringDto) {
    return await this.valueStringService.create(createValueStringDto);
  }

  @Put()
  async update(@Body() updateValueStringDto: UpdateValueStringDto) {
    return await this.valueStringService.update(updateValueStringDto);
  }

  @Delete(':id')
  async remove(@Param('id') id: string) {
    return await this.valueStringService.remove(+id);
  }
}
