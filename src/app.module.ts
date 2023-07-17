import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DontpadModule } from './dontpad/dontpad.module';
import { PrismaService } from './prisma.service';

@Module({
  imports: [DontpadModule],
  controllers: [AppController],
  providers: [AppService, PrismaService],
})
export class AppModule {}
