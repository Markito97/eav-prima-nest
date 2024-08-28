import { Test, TestingModule } from '@nestjs/testing';
import { RelationObjectTypeController } from './relation-object-type.controller';

describe('RelationObjectTypeController', () => {
  let controller: RelationObjectTypeController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [RelationObjectTypeController],
    }).compile();

    controller = module.get<RelationObjectTypeController>(RelationObjectTypeController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
