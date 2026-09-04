export class CreateRoomDto {
    code: string
    buildingId: number
    floor: number
    type?: string
    capacity?: number
    createdAt?: Date
    updatedAt?: Date
}
