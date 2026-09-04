import { Injectable } from '@nestjs/common';

@Injectable()
export class HealthService {

    async getHealthStatus() {
        return await {
            "status": "ok",
            "service": "energy-api",
            "timestamp": "2026-08-24T14:30:00.000Z"
        }
    }
}
