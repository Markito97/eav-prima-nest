import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma.service';

@Injectable()
export class AttributeTypeService {
  constructor(private readonly prismaService: PrismaService) {}

  async findAll() {
    return await this.prismaService.attributeType.findMany();
  }

  async findOne(id: number) {
    return await this.prismaService.attributeType.findUnique({ where: { id } });
  }

  async create(payload) {
    return await this.prismaService.attributeType.create({ data: payload });
  }

  async update(payload) {
    return await this.prismaService.attributeType.update({
      where: { id: payload.id },
      data: payload,
    });
  }

  async remove(id: number) {
    return await this.prismaService.attributeType.delete({ where: { id } });
  }
}
