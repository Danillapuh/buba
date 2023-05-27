import { WebSocketGateway ,SubscribeMessage,MessageBody} from '@nestjs/websockets';
import { EmitsService } from './emits.service';

@WebSocketGateway(81)
export class EmitsGateway {
  constructor(private readonly emitsService: EmitsService) {}

  @SubscribeMessage('events')
handleEvent(@MessageBody() data: string): string {
  return data;
}
}
