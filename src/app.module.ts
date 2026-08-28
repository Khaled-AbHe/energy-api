import { Module } from '@nestjs/common';
import { HealthModule } from './health/health.module.ts';
import { BuildingsModule } from './buildings/buildings.module.ts';

@Module({
  imports: [HealthModule, BuildingsModule],
  controllers: []
})
export class AppModule {}
