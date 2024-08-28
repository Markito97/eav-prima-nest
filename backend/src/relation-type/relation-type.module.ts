import { Module } from '@nestjs/common';
import { RelationTypeController } from './relation-type.controller';
import { RelationTypeService } from './relation-type.service';
import { PrismaService } from 'src/prisma.service';

@Module({
  controllers: [RelationTypeController],
  providers: [RelationTypeService, PrismaService],
})
export class RelationTypeModule {}
