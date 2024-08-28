import { Test, TestingModule } from '@nestjs/testing';
import { ValueStringController } from './value-string.controller';

describe('ValueStringController', () => {
  let controller: ValueStringController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ValueStringController],
    }).compile();

    controller = module.get<ValueStringController>(ValueStringController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
