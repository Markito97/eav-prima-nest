import { Module } from '@nestjs/common';
import { AttributeObjectTypeController } from './attribute-object-type.controller';
import { AttributeObjectTypeService } from './attribute-object-type.service';
import { PrismaService } from 'src/prisma.service';

@Module({
  controllers: [AttributeObjectTypeController],
  providers: [AttributeObjectTypeService, PrismaService],
})
export class AttributeObjectTypeModule {}
