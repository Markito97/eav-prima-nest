import { Test, TestingModule } from '@nestjs/testing';
import { AttributeTypeController } from './attribute-type.controller';

describe('AttributeTypeController', () => {
  let controller: AttributeTypeController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [AttributeTypeController],
    }).compile();

    controller = module.get<AttributeTypeController>(AttributeTypeController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
