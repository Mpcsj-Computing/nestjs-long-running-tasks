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

  /**
   * Once the object was sent to RabbitMQ at apps/web-and-worker-communication/src/app.service.ts at the function sendMessageToWorker.
   * The following function is responsible to receive messages FROM RabbitMQ
   * This is the RabbitMQ CONSUMER
   */
  @MessagePattern(MESSAGE_PATTERNS.workerMessagePattern)
  async consumeBrokerMessage(data: any) {
    console.log('data received >> ', data);

    await this.workerBackendAppService.executeLongRunningTask(
      DataToWorkerDTO.newInstanceFromJson(JSON.parse(data)),
    );
  }
}
