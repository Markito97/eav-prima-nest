import { Test, TestingModule } from '@nestjs/testing';
import { RelationObjectService } from './relation-object.service';

describe('RelationObjectService', () => {
  let service: RelationObjectService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [RelationObjectService],
    }).compile();

    service = module.get<RelationObjectService>(RelationObjectService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
