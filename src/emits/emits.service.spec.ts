import { Test, TestingModule } from '@nestjs/testing';
import { EmitsService } from './emits.service';

describe('EmitsService', () => {
  let service: EmitsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [EmitsService],
    }).compile();

    service = module.get<EmitsService>(EmitsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
