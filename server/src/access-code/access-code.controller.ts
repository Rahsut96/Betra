import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { UsersService } from 'src/users/users.service';
import { AccesscodeService } from './access-code.service';
import { CreateAccesscodeDto } from './dto/create-accessCode.dto';
import { UpdateAccesscodeDto } from './dto/update-accessCode.dto';

@Controller('accesscode/v1')
export class AccesscodeController {
  constructor(
    private readonly accesscodeService: AccesscodeService,
    private readonly userService: UsersService,
  ) {}

  @Post(':userId')
  async create(
    @Body() createAccesscodeDto: CreateAccesscodeDto,
    @Param('userId') userId: string,
  ) {
    const user = await this.userService.findOne(userId);
    if (user) {
      createAccesscodeDto.user = user;
      const accessCode = await this.accesscodeService.create(
        createAccesscodeDto,
      );
      return {
        message: 'AccessCode created successfully !',
        data: accessCode,
      };
    }
    throw user;
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
  update(
    @Param('id') id: string,
    @Body() updateAccesscodeDto: UpdateAccesscodeDto,
  ) {
    return this.accesscodeService.update(id, updateAccesscodeDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.accesscodeService.remove(id);
  }
}
