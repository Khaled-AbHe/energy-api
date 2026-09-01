import { Injectable } from '@nestjs/common';
// import { InjectRepository } from '@nestjs/typeorm';
// import { Repository } from 'typeorm';
import { Building } from './entities/building.entity.js'
import { CreateBuidlingDto } from './dto/create-building.dto.js';
// import { randomInt } from 'crypto';

@Injectable()
export class BuildingsService {

    // constructor(@InjectRepository(Building) private buildingsRepo: Repository<Building>) {}

    private readonly buildings: Building[] = []

    private buildId = 0

    async getBuildingById(id: number): Promise<Building | undefined> {
        return this.buildings.find(b => b.id == id)
    }

    async createBuilding(dto: CreateBuidlingDto): Promise<Building> {
        // return await this.buildingsRepo.save(this.buildingsRepo.create(dto))
        this.buildId += 1

        const newBuidling = {
            "id": this.buildId,
            "name": dto.name,
            "address": dto.address,
            "yearBuilt": dto.yearBuilt
        }

        this.buildings.push(newBuidling)

        return newBuidling
    }
}
