import { Test, TestingModule } from '@nestjs/testing';
import { DogapiService } from './dogapi.service';

describe('DogapiService', () => {
  let service: DogapiService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [DogapiService],
    }).compile();

    service = module.get<DogapiService>(DogapiService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
