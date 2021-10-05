import { Test, TestingModule } from '@nestjs/testing';
import { PaymentInfoController } from './payment-info.controller';
import { PaymentInfoService } from './payment-info.service';

describe('PaymentInfoController', () => {
  let controller: PaymentInfoController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [PaymentInfoController],
      providers: [PaymentInfoService],
    }).compile();

    controller = module.get<PaymentInfoController>(PaymentInfoController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
