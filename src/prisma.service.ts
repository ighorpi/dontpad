import { Injectable } from '@nestjs/common';
import { PrismaClient } from '@prisma/client';

@Injectable()
export class PrismaService {
  client: PrismaClient;
  constructor() {
    this.client = new PrismaClient();
  }
}
