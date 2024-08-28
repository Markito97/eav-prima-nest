import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma.service';

@Injectable()
export class RelationTypeService {
  constructor(private readonly prismaService: PrismaService) {}
  async create(payload) {
    return await this.prismaService.relationType.create({
      data: payload,
    });
  }
}
