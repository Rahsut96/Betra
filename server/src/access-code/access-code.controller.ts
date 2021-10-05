import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { AccesscodeService } from './access-code.service';
import { CreateAccesscodeDto } from './dto/create-accessCode.dto';
import { UpdateAccesscodeDto } from './dto/update-accessCode.dto';

@Controller('accessCode')
export class AccesscodeController {
  constructor(private readonly accesscodeService: AccesscodeService) {}

  @Post()
  create(@Body() createAccesscodeDto: CreateAccesscodeDto) {
    return this.accesscodeService.create(createAccesscodeDto);
  }

  @Get()
  findAll() {
    return this.accesscodeService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.accesscodeService.findOne(id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateAccesscodeDto: UpdateAccesscodeDto) {
    return this.accesscodeService.update(id, updateAccesscodeDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.accesscodeService.remove(id);
  }
}
