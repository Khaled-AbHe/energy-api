import { ApiProperty } from "@nestjs/swagger"
import { IsNumber, IsString } from "class-validator"

export class CreateBuidlingDto {
    @ApiProperty({
        description: 'Nom public et unique du bâtiment',
        example: 'Pavillon principal',
        maxLength: 100,
    })
    @IsString()
    name: string

    @ApiProperty()
    @IsString()
    address: string

    @ApiProperty({
        description: 'Année de construction',
        example: 1965,
        minimum: 1800,
        maximum: 2026,
    })
    @IsNumber()
    yearBuilt: number
}