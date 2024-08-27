import { Module } from '@nestjs/common';
import { AttributeTypeController } from './attribute-type.controller';
import { AttributeTypeService } from './attribute-type.service';
import { PrismaService } from 'src/prisma.service';

@Module({
  controllers: [AttributeTypeController],
  providers: [AttributeTypeService, PrismaService],
})
export class AttributeTypeModule {}
