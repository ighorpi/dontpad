import { Logger } from '@nestjs/common';
import { MessageBody, SubscribeMessage, WebSocketGateway, WebSocketServer } from '@nestjs/websockets';
import { Server } from 'http';
import { DontpadService } from './dontpad.service';
type Data = {
  path: string;
  payload: string;
};
@WebSocketGateway()
export class DontpadGateway {
  private readonly logger = new Logger(DontpadGateway.name);

  constructor(private readonly dontpad: DontpadService) {}

  @WebSocketServer()
  server: Server;

  @SubscribeMessage('update')
  handleUpdateNote(@MessageBody() data: Data) {
    this.sendNoteUpdate(data.path, data.payload);
  }

  async sendNoteUpdate(path: string, payload: string) {
    const text = await this.dontpad.putNote(path, payload);
    this.server.emit(`update-${path}`, text);
  }
}
