import { Logger } from '@nestjs/common';
import {
  MessageBody,
  SubscribeMessage,
  WebSocketGateway,
  WebSocketServer,
} from '@nestjs/websockets';
import { Server } from 'http';
type Data = {
  path: string;
  payload: string;
};
@WebSocketGateway()
export class DontpadGateway {
  @WebSocketServer()
  server: Server;

  private readonly logger = new Logger(DontpadGateway.name);

  @SubscribeMessage('update')
  handleUpdateNote(@MessageBody() data: Data) {
    this.sendNoteUpdate(data.path, data.payload);
  }

  sendNoteUpdate(path: string, payload: string) {
    this.server.emit(`update-${path}`, payload);
  }
}
