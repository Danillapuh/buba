import { Transform } from "class-transformer";
import { IsNumber, IsOptional } from "class-validator";

export class ShiftIdDto {
    @Transform((v)=>parseInt(v.value))
    @IsOptional()
    @IsNumber()
    shiftId: number
}
