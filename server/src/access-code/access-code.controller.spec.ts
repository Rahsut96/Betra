import { Test, TestingModule } from '@nestjs/testing';
import { AccesscodeController } from './access-code.controller';
import { AccesscodeService } from './access-code.service';

describe('AccesscodeController', () => {
  let controller: AccesscodeController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [AccesscodeController],
      providers: [AccesscodeService],
    }).compile();

    controller = module.get<AccesscodeController>(AccesscodeController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
