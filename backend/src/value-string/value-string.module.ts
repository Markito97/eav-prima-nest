import { Module } from '@nestjs/common';
import { ValueStringService } from './value-string.service';
import { ValueStringController } from './value-string.controller';
import { PrismaService } from 'src/prisma.service';

@Module({
  controllers: [ValueStringController],
  providers: [ValueStringService, PrismaService],
})
export class ValueStringModule {}
