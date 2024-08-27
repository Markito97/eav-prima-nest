import { Module } from '@nestjs/common';
import { ObjectTypeService } from './object-type.service';
import { ObjectTypeController } from './object-type.controller';
import { PrismaService } from 'src/prisma.service';

@Module({
  controllers: [ObjectTypeController],
  providers: [ObjectTypeService, PrismaService],
})
export class ObjectTypeModule {}
