import { Module } from '@nestjs/common';
import { AttributeTypeModule } from './attribute-type/attribute-type.module';
import { AttributeModule } from './attribute/attribute.module';
import { AttributeObjectTypeModule } from './attribute-object-type/attribute-object-type.module';
import { ObjectTypeModule } from './object-type/object-type.module';
import { EntityObjectModule } from './entity-object/entity-object.module';
import { AttributeValueModule } from './attribute-value/attribute-value.module';
import { ValueStringModule } from './value-string/value-string.module';
import { RelationObjectTypeModule } from './relation-object-type/relation-object-type.module';
import { RelationTypeService } from './relation-type/relation-type.service';
import { RelationTypeController } from './relation-type/relation-type.controller';
import { RelationTypeModule } from './relation-type/relation-type.module';
import { RelationObjectModule } from './relation-object/relation-object.module';

@Module({
  imports: [
    AttributeTypeModule,
    AttributeModule,
    AttributeObjectTypeModule,
    ObjectTypeModule,
    EntityObjectModule,
    AttributeValueModule,
    ValueStringModule,
    RelationObjectTypeModule,
    RelationTypeModule,
    RelationObjectModule,
  ],
  providers: [RelationTypeService],
  controllers: [RelationTypeController],
})
export class AppModule {}
