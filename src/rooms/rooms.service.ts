import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateRoomDto } from './dto/create-room.dto';
import { UpdateRoomDto } from './dto/update-room.dto';
import { Room } from './entities/room.entity';

@Injectable()
export class RoomsService {

  private readonly rooms: Room[] = []

  create(createRoomDto: CreateRoomDto) {
    const room = new Room(createRoomDto)
    
    this.rooms.push(room)
    
    return room
  }

  findAll(): Room[] {
    return this.rooms;
  }

  findOne(id: string) {
    const roomIndex = this.rooms.findIndex(r => r.id == id);
    
    if (roomIndex == -1) throw new NotFoundException(`Room with ID ${id} is not found`)

    return {
      index: roomIndex, 
      room: this.rooms.at(roomIndex)!
    }
  }

  update(id: string, updateRoomDto: UpdateRoomDto) {
    const { index, room } = this.findOne(id)

    this.rooms[index] = {...room, ...updateRoomDto} 

    return this.rooms[index];
  }

  remove(id: string) {
    const { index } = this.findOne(id)
    const removedRoom = this.rooms.splice(index, 1)[0]
    return removedRoom;
  }
}
