import { Test, TestingModule } from '@nestjs/testing';
import { RelationObjectController } from './relation-object.controller';

describe('RelationObjectController', () => {
  let controller: RelationObjectController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [RelationObjectController],
    }).compile();

    controller = module.get<RelationObjectController>(RelationObjectController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
