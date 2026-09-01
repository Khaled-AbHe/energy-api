import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { BuildingsService } from './buildings.service.js';
import { CreateBuidlingDto } from './dto/create-building.dto.js';

@Controller('buildings')
export class BuildingsController {

    constructor(private buildingsService: BuildingsService) {}

    @Get('/:id')
    getBuildingById(@Param('id') id: number) {
        return this.buildingsService.getBuildingById(id)
    }

    @Post()
    createBuilding(@Body() createBuildingDto: CreateBuidlingDto) {
        return this.buildingsService.createBuilding(createBuildingDto)
    }
}
