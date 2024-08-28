import { Test, TestingModule } from '@nestjs/testing';
import { RelationObjectTypeService } from './relation-object-type.service';

describe('RelationObjectTypeService', () => {
  let service: RelationObjectTypeService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [RelationObjectTypeService],
    }).compile();

    service = module.get<RelationObjectTypeService>(RelationObjectTypeService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
