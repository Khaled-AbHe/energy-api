import { randomUUID } from "crypto"
import { CreateRoomDto } from "../dto/create-room.dto"

export class Room {
    id: string
    code: string
    buildingId: number
    floor: number
    type?: string
    capacity?: number
    createdAt: Date
    updatedAt: Date

    constructor(dto: CreateRoomDto) {
        this.id = randomUUID()
        this.code = dto.code
        this.buildingId = dto.buildingId
        this.floor = dto.floor
        this.type = dto.type
        this.capacity = dto.capacity
        this.createdAt = dto.createdAt ? dto.createdAt : new Date()
        this.updatedAt = dto.updatedAt ? dto.updatedAt : new Date()
    }
}
