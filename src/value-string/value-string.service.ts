import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma.service';

@Injectable()
export class ValueStringService {
  constructor(private readonly prismaService: PrismaService) {}

  async findAll() {
    return await this.prismaService.valueString.findMany({
      include: {
        attributValue: true,
      },
    });
  }

  async findOne(id: number) {
    return await this.prismaService.valueString.findUnique({ where: { id } });
  }

  async create(payload) {
    return await this.prismaService.valueString.create({ data: payload });
  }

  async update(payload) {
    return await this.prismaService.valueString.update({
      where: { id: payload.id },
      data: payload,
    });
  }

  async remove(id: number) {
    return await this.prismaService.valueString.delete({ where: { id } });
  }
}
