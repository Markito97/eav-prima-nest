import { Module } from '@nestjs/common';
import { RelationObjectTypeController } from './relation-object-type.controller';
import { RelationObjectTypeService } from './relation-object-type.service';
import { PrismaService } from 'src/prisma.service';

@Module({
  controllers: [RelationObjectTypeController],
  providers: [RelationObjectTypeService, PrismaService],
})
export class RelationObjectTypeModule {}
