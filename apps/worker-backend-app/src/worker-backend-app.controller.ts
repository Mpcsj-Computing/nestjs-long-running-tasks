import { Controller } from '@nestjs/common';
import { MessagePattern } from '@nestjs/microservices';
import { DataToWorkerDTO } from 'apps/web-and-worker-communication/src/model/data-to-worker.dto';
import { WorkerBackendAppService } from './worker-backend-app.service';
import { MESSAGE_PATTERNS } from 'common/common/common.constants';

@Controller()
export class WorkerBackendAppController {
  constructor(
    private readonly workerBackendAppService: WorkerBackendAppService,
  ) {}

  @MessagePattern(MESSAGE_PATTERNS.workerMessagePattern)
  async consumeBrokerMessage(data: any) {
    console.log('data received >> ', data);

    await this.workerBackendAppService.executeLongRunningTask(
      DataToWorkerDTO.newInstanceFromJson(JSON.parse(data)),
    );
  }
}
