import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma.service';

@Injectable()
export class DontpadService {
  constructor(private readonly prisma: PrismaService) {}

  async putNote(key: string, text: string): Promise<string> {
    const data = await this.prisma.note.upsert({
      create: {
        key: key,
        text: text,
      },
      update: {
        key: key,
        text: text,
      },
      where: {
        key: key,
      },
    });

    return data.text ?? '';
  }

  async getNote(key: string): Promise<string> {
    const data = await this.prisma.note.findUnique({
      where: {
        key: key,
      },
    });
    return data.text ?? '';
  }
}
