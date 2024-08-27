import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma.service';

@Injectable()
export class ObjectTypeService {
  constructor(private readonly prismaService: PrismaService) {}

  async findAll() {
    return await this.prismaService.objectType.findMany();
  }

  async findOne(id: number) {
    return await this.prismaService.objectType.findUnique({ where: { id } });
  }

  async create(payload) {
    return await this.prismaService.objectType.create({ data: payload });
  }

  async update(payload) {
    return await this.prismaService.objectType.update({
      where: { id: payload.id },
      data: payload,
    });
  }

  async remove(id: number) {
    return await this.prismaService.objectType.delete({ where: { id } });
  }
}
