import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { BuildingsService } from './buildings.service.js';
import { CreateBuidlingDto } from './dto/create-building.dto.js';
import {
  ApiCreatedResponse,
  ApiOkResponse,
  ApiOperation,
  ApiParam,
  ApiTags,
} from '@nestjs/swagger';
import { BuildingResponseDto } from './dto/building-response.dto.js';

@ApiTags('Buildings')
@Controller('buildings')
export class BuildingsController {
  constructor(private buildingsService: BuildingsService) {}

  @Get('/:id')
  @ApiOperation({
    summary: 'Chercher un bâtiment',
    description: 'Chercher un bâtiment à partir de la collection courante par son ID.',
  })
  @ApiParam({
    name: 'id',
    description: 'Identifiant UUID du bâtiment',
    format: 'uuid',
  })
  @ApiOkResponse({
    description: 'Bâtiment trouvé.',
    type: BuildingResponseDto,
  })
  getBuildingById(@Param('id') id: number) {
    return this.buildingsService.getBuildingById(id);
  }

  @Post()
  @ApiOperation({
    summary: 'Créer un bâtiment',
    description: 'Ajoute un bâtiment à la collection courante.',
  })
  @ApiCreatedResponse({
    description: 'Bâtiment créé.',
    type: BuildingResponseDto,
    headers: {
      Location: {
        description: 'URI de la nouvelle ressource',
        schema: { type: 'string' },
      },
    },
  })
  createBuilding(@Body() createBuildingDto: CreateBuidlingDto) {
    return this.buildingsService.createBuilding(createBuildingDto);
  }
}
