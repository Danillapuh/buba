import { Module } from '@nestjs/common';
import { EmitsService } from './emits.service';
import { EmitsGateway } from './emits.gateway';

@Module({
  providers: [EmitsGateway, EmitsService]
})
export class EmitsModule {}
