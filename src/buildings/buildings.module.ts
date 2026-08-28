import { Module } from '@nestjs/common';
import { BuildingsController } from './buildings.controller.ts';
import { BuildingsService } from './buildings.service.ts';

@Module({
  controllers: [BuildingsController],
  providers: [BuildingsService]
})
export class BuildingsModule {}
