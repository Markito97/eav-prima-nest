import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma.service';

@Injectable()
export class AttributeValueService {
  constructor(private readonly prismaService: PrismaService) {}

  async findAll() {
    return await this.prismaService.attributeValue.findMany({
      include: {
        entityObject: true,
        valueStrings: true,
      },
    });
  }

  async findOne(id: number) {
    return await this.prismaService.attributeValue.findUnique({
      where: { id },
    });
  }

  async create(payload) {
    return await this.prismaService.attributeValue.create({ data: payload });
  }

  async update(payload) {
    return await this.prismaService.attributeValue.update({
      where: { id: payload.id },
      data: payload,
    });
  }

  async remove(id: number) {
    return await this.prismaService.attributeValue.delete({ where: { id } });
  }
}
