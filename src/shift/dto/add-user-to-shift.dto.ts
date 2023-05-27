import { IsArray, IsNumber, IsNotEmpty } from "class-validator";

export class AdduserToShiftDto{

    @IsNumber({},{each: true})
    @IsArray()
    @IsNotEmpty()
    users: number[]

    @IsNotEmpty()
    @IsNumber()
    shiftId: number
}