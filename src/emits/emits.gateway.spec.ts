import { Test, TestingModule } from '@nestjs/testing';
import { EmitsGateway } from './emits.gateway';
import { EmitsService } from './emits.service';

describe('EmitsGateway', () => {
  let gateway: EmitsGateway;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [EmitsGateway, EmitsService],
    }).compile();

    gateway = module.get<EmitsGateway>(EmitsGateway);
  });

  it('should be defined', () => {
    expect(gateway).toBeDefined();
  });
});
