import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma.service';

@Injectable()
export class AttributeObjectTypeService {
  constructor(private readonly prismaService: PrismaService) {}

  async findAll() {
    return await this.prismaService.attributeObjectTypes.findMany();
  }

  async findOne(id: number) {
    return await this.prismaService.attributeObjectTypes.findUnique({
      where: { id },
    });
  }

  async create(payload) {
    return await this.prismaService.attributeObjectTypes.create({
      data: payload,
    });
  }

  async update(payload) {
    return await this.prismaService.attributeObjectTypes.update({
      where: { id: payload.id },
      data: payload,
    });
  }

  async remove(id: number) {
    return await this.prismaService.attributeObjectTypes.delete({
      where: { id },
    });
  }
}
