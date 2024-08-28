import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { CreateEntityObjectDto } from './dto/create-entity-object.dto';
import { UpdateEntityObjectDto } from './dto/update-entity-object.dto';
import { EntityObjectService } from './entity-object.service';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('entity-object')
@Controller('entity-object')
export class EntityObjectController {
  constructor(private readonly entityObjectService: EntityObjectService) {}

  @Get()
  async findAll() {
    return await this.entityObjectService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: string) {
    return await this.entityObjectService.findOne(+id);
  }

  @Post()
  async create(@Body() createEntityOjectDto: CreateEntityObjectDto) {
    return await this.entityObjectService.create(createEntityOjectDto);
  }

  @Put()
  async update(@Body() updateEntityObjectDto: UpdateEntityObjectDto) {
    return await this.entityObjectService.update(updateEntityObjectDto);
  }

  @Delete(':id')
  async remove(@Param('id') id: string) {
    return await this.entityObjectService.remove(+id);
  }
}
