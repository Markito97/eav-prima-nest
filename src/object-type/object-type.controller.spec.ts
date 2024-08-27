import { Test, TestingModule } from '@nestjs/testing';
import { ObjectTypeController } from './object-type.controller';

describe('ObjectTypeController', () => {
  let controller: ObjectTypeController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ObjectTypeController],
    }).compile();

    controller = module.get<ObjectTypeController>(ObjectTypeController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
