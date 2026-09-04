import { Controller, Get, Post, Body, Patch, Param, Delete, HttpCode } from '@nestjs/common';
import { RoomsService } from './rooms.service';
import { CreateRoomDto } from './dto/create-room.dto';
import { UpdateRoomDto } from './dto/update-room.dto';
import {
  ApiCreatedResponse,
  ApiOkResponse,
  ApiOperation,
  ApiParam,
  ApiTags,
} from '@nestjs/swagger';

@Controller('rooms')
export class RoomsController {
  constructor(private readonly roomsService: RoomsService) {}

  // Create one room
  @Post()
  @ApiOperation({
    summary: 'Créer une chambre',
    description: 'Ajoute une chambre à la collection courante.',
  })
  @ApiCreatedResponse({
    description: 'Chambre créé.',
    headers: {
      Location: {
        description: 'URI de la nouvelle ressource',
        schema: { type: 'string' },
      },
    },
  })
  create(@Body() createRoomDto: CreateRoomDto) {
    return this.roomsService.create(createRoomDto);
  }

  // Get all rooms
  @Get()
  @ApiOperation({
    summary: 'Chercher le collection de chambres',
    description: 'Chercher toutes les chambres dans la collection.',
  })
  @ApiOkResponse({
    description: 'Chambres trouvé.',
  })
  findAll() {
    return this.roomsService.findAll();
  }

  // Get all rooms
  @Get(':id')
  @ApiOperation({
    summary: 'Chercher une chambre',
    description: 'Cherche une chambre à partir de la collection courante par son ID.',
  })
  @ApiParam({
    name: 'id',
    description: 'Identifiant UUID de la chambre',
    format: 'uuid',
  })
  @ApiOkResponse({
    description: 'Chambre trouvé.',
  })
  findOne(@Param('id') id: string) {
    return this.roomsService.findOne(id);
  }

  // Update one room
  @Patch(':id')
  @ApiOperation({
    summary: 'Mettre une chambre à jour',
    description: 'Cherche une chambre à partir de la collection courante par son ID.',
  })
  @ApiParam({
    name: 'id',
    description: 'Identifiant UUID de la chambre',
    format: 'uuid',
  })
  @ApiOkResponse({
    description: 'Chambre trouvé.',
  })
  update(@Param('id') id: string, @Body() updateRoomDto: UpdateRoomDto) {
    return this.roomsService.update(id, updateRoomDto);
  }

  // Delete one room
  @Delete(':id')
  @HttpCode(204)
  remove(@Param('id') id: string) {

    return this.roomsService.remove(id);
  }
}
