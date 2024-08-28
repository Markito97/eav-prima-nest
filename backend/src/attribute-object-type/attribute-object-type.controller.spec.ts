import { Test, TestingModule } from '@nestjs/testing';
import { AttributeObjectTypeController } from './attribute-object-type.controller';

describe('AttributeObjectTypeController', () => {
  let controller: AttributeObjectTypeController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [AttributeObjectTypeController],
    }).compile();

    controller = module.get<AttributeObjectTypeController>(AttributeObjectTypeController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
