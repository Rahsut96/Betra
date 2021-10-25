import { Body, Controller, Post } from '@nestjs/common';
import { Router } from 'express';
import { OrdersService } from 'src/orders/orders.service';
import { Gateway } from './entity/gateway.entity';
import { GatewayService } from './gateway.service';

@Controller('gateway')
export class GatewayController {
    constructor(
        private readonly gatewayService: GatewayService,
        private readonly ordersService: OrdersService,
    ) {}

    @Post('/success')
    async create(@Body() gatewaySuccess: any) {
        console.log('Gateway success request', gatewaySuccess);
    }

    
    @Post('/cancel')
    async cancel(@Body() gatewayCancel: any) {
        console.log('Gateway cancel request', gatewayCancel);
    }

    
    @Post('/error')
    async error(@Body() gatewayError: any) {
        console.log('Gateway error request', gatewayError);
    }
}
