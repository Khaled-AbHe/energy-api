import { Controller, Get } from '@nestjs/common';
import { HealthService } from './health.service';
import {
  ApiOkResponse,
  ApiOperation,
  ApiTags,
} from '@nestjs/swagger';

@ApiTags("Health")
@Controller('health')
export class HealthController {

  constructor(private healthService: HealthService) {}

  @Get()
  @ApiOperation({
    summary: "Chercher le statut de l'api",
    description: 'Chercher un bâtiment à partir de la collection courante par son ID.',
  })
  @ApiOkResponse({
    description: 'Détails de santé.',
  })
  getHello(): any {
    return this.healthService.getHealthStatus();
  }
}
