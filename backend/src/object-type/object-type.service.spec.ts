import { Test, TestingModule } from '@nestjs/testing';
import { ObjectTypeService } from './object-type.service';

describe('ObjectTypeService', () => {
  let service: ObjectTypeService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ObjectTypeService],
    }).compile();

    service = module.get<ObjectTypeService>(ObjectTypeService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
