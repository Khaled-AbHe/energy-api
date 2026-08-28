import { IsNumber, IsString } from "class-validator"

export class CreateBuidlingDto {
    @IsString()
    name: string

    @IsString()
    address: string

    @IsNumber()
    yearBuilt: number
}