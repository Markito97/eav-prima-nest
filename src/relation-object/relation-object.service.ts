import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma.service';

@Injectable()
export class RelationObjectService {
  constructor(private readonly prismaService: PrismaService) {}

  async findAll() {
    return await this.prismaService.relationObject.findMany();
  }

  async findOne(id: number) {
    return await this.prismaService.relationObject.findUnique({
      where: { id },
    });
  }

  async create(payload) {
    return await this.prismaService.relationObject.create({ data: payload });
  }

  async update(payload) {
    return await this.prismaService.relationObject.update({
      where: { id: payload.id },
      data: payload,
    });
  }

  async remove(id: number) {
    return await this.prismaService.relationObject.delete({ where: { id } });
  }
}
