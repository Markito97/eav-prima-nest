import { Module } from '@nestjs/common';
import { EntityObjectController } from './entity-object.controller';
import { EntityObjectService } from './entity-object.service';
import { PrismaService } from 'src/prisma.service';

@Module({
  controllers: [EntityObjectController],
  providers: [EntityObjectService, PrismaService],
})
export class EntityObjectModule {}
