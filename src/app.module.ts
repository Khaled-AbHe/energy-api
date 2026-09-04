import { Module } from '@nestjs/common';
import { HealthModule } from './health/health.module.js';
import { BuildingsModule } from './buildings/buildings.module.js';
import { RoomsModule } from './rooms/rooms.module';

@Module({
  imports: [HealthModule, BuildingsModule, RoomsModule],
  controllers: []
})
export class AppModule {}
