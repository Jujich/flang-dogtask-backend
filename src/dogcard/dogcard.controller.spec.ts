import { Test, TestingModule } from '@nestjs/testing';
import { DogcardController } from './dogcard.controller';
import { DogcardService } from './dogcard.service';

describe('DogcardController', () => {
  let controller: DogcardController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [DogcardController],
      providers: [DogcardService],
    }).compile();

    controller = module.get<DogcardController>(DogcardController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
