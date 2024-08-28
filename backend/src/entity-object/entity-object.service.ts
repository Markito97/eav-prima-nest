import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma.service';

@Injectable()
export class EntityObjectService {
  constructor(private readonly prismaService: PrismaService) {}

  async findAll() {
    return await this.prismaService.entityObject.findMany({
      include: {
        attributeValues: {
          include: {
            valueStrings: true,
          },
        },
        entitySourceRelations: true,
        entityTargetRelations: true,
        objectType: true,
      },
    });
  }

  async findOne(id: number) {
    return await this.prismaService.entityObject.findUnique({ where: { id } });
  }

  async create(payload) {
    return await this.prismaService.entityObject.create({ data: payload });
  }

  async update(payload) {
    return await this.prismaService.entityObject.update({
      where: { id: payload.id },
      data: payload,
    });
  }

  async remove(id: number) {
    return await this.prismaService.entityObject.delete({ where: { id } });
  }
}
