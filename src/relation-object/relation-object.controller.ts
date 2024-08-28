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
import { RelationObjectService } from './relation-object.service';
import { CreateRelationObjectDto } from './dto/create-relation-object.dto';

@ApiTags('relation-object')
@Controller('relation-object')
export class RelationObjectController {
  constructor(private readonly relationObjectService: RelationObjectService) {}

  @Get()
  async findAll() {
    return await this.relationObjectService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: string) {
    return await this.relationObjectService.findOne(+id);
  }

  @Post()
  async create(@Body() createRelationObject: CreateRelationObjectDto) {
    return await this.relationObjectService.create(createRelationObject);
  }

  @Put()
  async update(@Body() updateRelationObject: any) {
    return await this.relationObjectService.update(updateRelationObject);
  }

  @Delete(':id')
  async remove(@Param('id') id: string) {
    return await this.relationObjectService.remove(+id);
  }
}
