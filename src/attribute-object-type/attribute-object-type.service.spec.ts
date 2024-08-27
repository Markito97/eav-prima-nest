import { Test, TestingModule } from '@nestjs/testing';
import { AttributeObjectTypeService } from './attribute-object-type.service';

describe('AttributeObjectTypeService', () => {
  let service: AttributeObjectTypeService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [AttributeObjectTypeService],
    }).compile();

    service = module.get<AttributeObjectTypeService>(AttributeObjectTypeService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
