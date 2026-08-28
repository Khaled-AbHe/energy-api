import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Building } from './entities/building.entity.ts'
import { CreateBuidlingDto } from './dto/create-building.dto.ts';

@Injectable()
export class BuildingsService {

    constructor(@InjectRepository(Building) private buildingsRepo: Repository<Building>) {}

    async getBuildingById(id: number): Promise<Building> {
        return await {
            "id": id,
            "name": "Pavillon principal",
            "address": "7000, rue Marie-Victorin",
            "yearBuilt": 2005
        }
    }

    async createBuilding(dto: CreateBuidlingDto): Promise<Building> {
        return await this.buildingsRepo.save(this.buildingsRepo.create(dto))
    }
}
