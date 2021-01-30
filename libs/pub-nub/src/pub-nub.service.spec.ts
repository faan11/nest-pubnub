import { Test, TestingModule } from '@nestjs/testing';
import { PubNubService } from './pub-nub.service';

describe('PubNubService', () => {
  let service: PubNubService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [PubNubService],
    }).compile();

    service = module.get<PubNubService>(PubNubService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
