import { Module } from '@nestjs/common';
import { AttributeValueController } from './attribute-value.controller';
import { AttributeValueService } from './attribute-value.service';
import { PrismaService } from 'src/prisma.service';

@Module({
  controllers: [AttributeValueController],
  providers: [AttributeValueService, PrismaService],
})
export class AttributeValueModule {}
