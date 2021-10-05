import { Timestamp } from "typeorm";

export class CreateAccesscodeDto {
    code: string;
    expiry:Timestamp
    type: number
    accessTime: Timestamp
}
