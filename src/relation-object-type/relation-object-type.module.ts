import { Module } from '@nestjs/common';
import { RelationObjectTypeController } from './relation-object-type.controller';
import { RelationObjectTypeService } from './relation-object-type.service';

@Module({
  controllers: [RelationObjectTypeController],
  providers: [RelationObjectTypeService]
})
export class RelationObjectTypeModule {}
