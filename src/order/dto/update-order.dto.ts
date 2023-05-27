import { IsNotEmpty, IsNumber, IsObject, isNotEmpty } from 'class-validator';
import { Transform } from 'class-transformer';

export class UpdateOrderDto {
    @IsNumber()
    @IsNotEmpty()
    dishId: number

    @IsNumber()
    @IsNotEmpty()
    orderId: number

    @Transform(val=>parseInt(val.value))
    @IsNumber()
    @IsNotEmpty()
    amount: number
    
}
