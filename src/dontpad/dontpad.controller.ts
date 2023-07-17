import { Controller, Get, Param, Render } from '@nestjs/common';

@Controller('/')
export class DontpadController {
  @Get(':key')
  @Render('note')
  async getNote(@Param('key') key: string) {
    return {
      titulo: 'Dontpad',
      path: key.replace('/', ''),
    };
  }
}
