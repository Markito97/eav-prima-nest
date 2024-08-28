import { Test, TestingModule } from '@nestjs/testing';
import { EntityObjectService } from './entity-object.service';

describe('EntityObjectService', () => {
  let service: EntityObjectService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [EntityObjectService],
    }).compile();

    service = module.get<EntityObjectService>(EntityObjectService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
