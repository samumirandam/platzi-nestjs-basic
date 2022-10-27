import { Test, TestingModule } from '@nestjs/testing';
import { CurstomersController } from './curstomers.controller';

describe('CurstomersController', () => {
  let controller: CurstomersController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [CurstomersController],
    }).compile();

    controller = module.get<CurstomersController>(CurstomersController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
