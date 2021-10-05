import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { PaymentInfoService } from './payment-info.service';
import { CreatePaymentInfoDto } from './dto/create-payment-info.dto';
import { UpdatePaymentInfoDto } from './dto/update-payment-info.dto';
import { UsersService } from 'src/users/users.service';

@Controller('paymentinfo/v1')
export class PaymentInfoController {
  constructor(
    private readonly paymentInfoService: PaymentInfoService,
    private readonly userService: UsersService,
  ) {}

  @Post(':userId')
  async create(
    @Body() createPaymentInfoDto: CreatePaymentInfoDto,
    @Param('userId') userId: string,
  ) {
    const user = await this.userService.findOne(userId);
    if (user) {
      createPaymentInfoDto.user = user;
      const paymentInfo = await this.paymentInfoService.create(
        createPaymentInfoDto,
      );
      return {
        message: 'Payment info created successfully !',
        data: paymentInfo,
      };
    }
    throw user;
  }

  @Get()
  findAll() {
    return this.paymentInfoService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.paymentInfoService.findOne(id);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updatePaymentInfoDto: UpdatePaymentInfoDto,
  ) {
    return this.paymentInfoService.update(id, updatePaymentInfoDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.paymentInfoService.remove(id);
  }
}
