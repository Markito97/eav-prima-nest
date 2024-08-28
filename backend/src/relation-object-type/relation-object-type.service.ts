import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma.service';

@Injectable()
export class RelationObjectTypeService {
  constructor(private readonly prismaService: PrismaService) {}

  async create(payload) {
    return await this.prismaService.relationObjectType.create({
      data: payload,
    });
  }
}
