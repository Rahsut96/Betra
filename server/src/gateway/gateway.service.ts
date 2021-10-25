import { Injectable } from '@nestjs/common';
import { Gateway } from './entity/gateway.entity';
import { GatewaySuccessDto } from './dto/gateway-success.dto';
import { GatewayErrorDto } from './dto/gateway-error.dto';
import { GatewayCancelDto } from './dto/gateway-cancel.dto';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class GatewayService {
    constructor(
        @InjectRepository(Gateway)
        private gatewayRepository: Repository<Gateway>,
      ) {}
    
      createSuccess(gatewaySuccessDto: GatewaySuccessDto) {
        return this.gatewayRepository.save(gatewaySuccessDto);
      }

      createFailed(gatewayCancelDto: GatewayCancelDto) {
        return this.gatewayRepository.save(gatewayCancelDto);
      }

      createError(gatewayErrorDto: GatewayErrorDto) {
        return this.gatewayRepository.save(gatewayErrorDto);
      }
    
      findAll() {
        return this.gatewayRepository.find();
      }
    
      findOne(id: string) {
        return this.gatewayRepository.findOne(id);
      }
      
      findByUserId(email: string) {
        return this.gatewayRepository.findOne({ where: { customerEmail: email } });
      }
}
