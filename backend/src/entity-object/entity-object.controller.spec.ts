import { Test, TestingModule } from '@nestjs/testing';
import { EntityObjectController } from './entity-object.controller';

describe('EntityObjectController', () => {
  let controller: EntityObjectController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [EntityObjectController],
    }).compile();

    controller = module.get<EntityObjectController>(EntityObjectController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
