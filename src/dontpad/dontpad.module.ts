import { Module } from '@nestjs/common';
import { DontpadGateway } from './dontpad.gateway';
import { DontpadController } from './dontpad.controller';

@Module({
  providers: [DontpadGateway],
  controllers: [DontpadController],
})
export class DontpadModule {}
