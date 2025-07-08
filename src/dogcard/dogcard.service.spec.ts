import { Test, TestingModule } from '@nestjs/testing';
import { DogcardService } from './dogcard.service';

describe('DogcardService', () => {
  let service: DogcardService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [DogcardService],
    }).compile();

    service = module.get<DogcardService>(DogcardService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
