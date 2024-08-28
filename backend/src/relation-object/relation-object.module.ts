import { Module } from '@nestjs/common';
import { RelationObjectController } from './relation-object.controller';
import { RelationObjectService } from './relation-object.service';
import { PrismaService } from 'src/prisma.service';

@Module({
  controllers: [RelationObjectController],
  providers: [RelationObjectService, PrismaService],
})
export class RelationObjectModule {}
