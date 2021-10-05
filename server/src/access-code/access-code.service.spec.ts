import { Test, TestingModule } from '@nestjs/testing';
import { AccesscodeService } from './access-code.service';

describe('AccesscodeService', () => {
  let service: AccesscodeService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [AccesscodeService],
    }).compile();

    service = module.get<AccesscodeService>(AccesscodeService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
