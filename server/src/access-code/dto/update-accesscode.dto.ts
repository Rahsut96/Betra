import { PartialType } from '@nestjs/mapped-types';
import { CreateAccesscodeDto } from './create-accessCode.dto';

export class UpdateAccesscodeDto extends PartialType(CreateAccesscodeDto) {}
