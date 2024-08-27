import { Test, TestingModule } from '@nestjs/testing';
import { ValueStringService } from './value-string.service';

describe('ValueStringService', () => {
  let service: ValueStringService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ValueStringService],
    }).compile();

    service = module.get<ValueStringService>(ValueStringService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
