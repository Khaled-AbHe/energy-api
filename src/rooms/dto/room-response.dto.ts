import { ApiProperty } from '@nestjs/swagger';

export class RoomsResponseDto {
  @ApiProperty({ format: 'uuid' })
  id!: string;

  @ApiProperty({ example: 'ABC' })
  code!: string;

  @ApiProperty({ example: 1 })
  buildingId!: number;

  @ApiProperty({ example: 1 })
  floor!: number;

  @ApiProperty({ format: 'date-time' })
  createdAt!: Date;

  @ApiProperty({ format: 'date-time' })
  updatedAt!: Date;
}
