import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DontpadModule } from './dontpad/dontpad.module';

@Module({
  imports: [DontpadModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
