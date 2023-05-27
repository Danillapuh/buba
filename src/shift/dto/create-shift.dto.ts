import { IsArray, IsDate, IsDateString, IsNotEmpty, IsNumber } from "class-validator";

export class CreateShiftDto {
    @IsDateString()
    @IsNotEmpty()
    dateStart: string

    @IsDateString()
    @IsNotEmpty()
    dateEnd: string

    @IsNotEmpty()
    @IsNumber({}, {each: true})
    @IsArray()
    users: number[]


}
