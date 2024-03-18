import { Controller, Get, Param, Render } from '@nestjs/common';
import { DontpadService } from './dontpad.service';

@Controller('/')
export class DontpadController {
  constructor(private readonly dontpad: DontpadService) {}

  @Get(':key')
  @Render('note')
  async getNote(@Param('key') key: string) {
    const text = await this.dontpad.getNote(key);
    return {
      titulo: 'Dontpad',
      path: key.replace('/', ''),
      text: text,
    };
  }
}
