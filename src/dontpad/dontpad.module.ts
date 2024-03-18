import { Module } from '@nestjs/common';
import { DontpadGateway } from './dontpad.gateway';
import { DontpadController } from './dontpad.controller';
import { PrismaModule } from '../prisma.module';
import { DontpadService } from './dontpad.service';

@Module({
  imports: [PrismaModule],
  providers: [DontpadGateway, DontpadService],
  controllers: [DontpadController],
})
export class DontpadModule {}
