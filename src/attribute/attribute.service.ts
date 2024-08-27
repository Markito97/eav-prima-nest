import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma.service';

@Injectable()
export class AttributeService {
  constructor(private readonly prismaService: PrismaService) {}

  async findAll() {
    return await this.prismaService.attribute.findMany();
  }

  async findOne(id: number) {
    return await this.prismaService.attribute.findUnique({ where: { id } });
  }

  async create(payload) {
    return await this.prismaService.attribute.create({ data: payload });
  }

  async update(payload) {
    return await this.prismaService.attribute.update({
      where: { id: payload.id },
      data: payload,
    });
  }

  async remove(id: number) {
    return await this.prismaService.attribute.delete({ where: { id } });
  }
}
