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
import {
  ApiInternalServerErrorResponse,
  ApiNotFoundResponse,
  ApiOkResponse,
  ApiOperation,
  ApiTags,
} from '@nestjs/swagger';
import { ErrorDto } from 'src/common/ErrorDto';
import { AttributeObjectTypeDto } from './dto/attribute-object-type.dto';

@ApiTags('attribute-object-type')
@Controller('attribute-object-type')
export class AttributeObjectTypeController {
  constructor(
    private readonly attributeObjectTypeService: AttributeObjectTypeService,
  ) {}

  @ApiOperation({ summary: 'Get list of attribute-object-types' })
  @ApiOkResponse({
    description: 'Successfully fetched the list of attribute-object-types',
    type: [AttributeObjectTypeDto],
  })
  @ApiNotFoundResponse({
    description: 'Attribute-object-types not found.',
    type: ErrorDto,
  })
  @ApiInternalServerErrorResponse({
    description: 'Internal server error attribute-object-types',
    type: ErrorDto,
  })
  @Get()
  async findAll() {
    return await this.attributeObjectTypeService.findAll();
  }

  @ApiOperation({ summary: 'Get attribute-object-type' })
  @ApiOkResponse({
    description: 'Successfully fetched the attribute-object-type',
    type: [AttributeObjectTypeDto],
  })
  @ApiNotFoundResponse({
    description: 'Attribute-object-type not found.',
    type: ErrorDto,
  })
  @ApiInternalServerErrorResponse({
    description: 'Internal server error attribute-object-type',
    type: ErrorDto,
  })
  @Get(':id')
  async findOne(@Param('id') id: string) {
    return await this.attributeObjectTypeService.findOne(+id);
  }

  @ApiOperation({ summary: 'Create attribute-object-type' })
  @ApiOkResponse({
    description: 'Successfully created attribute-object-type',
    type: AttributeObjectTypeDto,
  })
  @Post()
  async create(
    @Body() createAttributeObjectTypeDto: CreateAttributeObjectTypeDto,
  ) {
    return await this.attributeObjectTypeService.create(
      createAttributeObjectTypeDto,
    );
  }

  @ApiOperation({ summary: 'Update attribute-object-type' })
  @ApiOkResponse({
    description: 'Successfully updated attribute-object-type',
    type: AttributeObjectTypeDto,
  })
  @Put()
  async update(
    @Body() updateAttributeObjectTypeDto: UpdateAttributeObjectTypeDto,
  ) {
    return await this.attributeObjectTypeService.update(
      updateAttributeObjectTypeDto,
    );
  }

  @ApiOperation({ summary: 'Delete attribute-object-type' })
  @ApiOkResponse({
    description: 'Successfully deleted attribute',
    type: AttributeObjectTypeDto,
  })
  @Delete(':id')
  async remove(@Param('id') id: string) {
    return await this.attributeObjectTypeService.remove(+id);
  }
}
