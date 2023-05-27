import { IsNotEmpty, IsString, IsIn, IsOptional } from "class-validator";


export class CreateUserDto {
    @IsNotEmpty()
    @IsString()
    name: string

    @IsNotEmpty()
    @IsString()
    login: string

    @IsNotEmpty()
    @IsString()
    password: string

    @IsOptional()
    @IsString()
    imageUrl?: string

    @IsNotEmpty()
    @IsIn([1,2,3])
    role: number
}
