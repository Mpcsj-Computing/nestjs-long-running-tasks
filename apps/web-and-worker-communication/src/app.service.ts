import { Inject, Injectable, Logger } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';
import { DataToWorkerDTO } from './model/data-to-worker.dto';
import { MESSAGE_PATTERNS, QUEUE_INFO } from 'common/common/common.constants';
import { lastValueFrom } from 'rxjs';

@Injectable()
export class AppService {
  private readonly logger = new Logger(AppService.name);
  constructor(
    @Inject(QUEUE_INFO.serviceName)
    private readonly queueClient: ClientProxy, // rabbitMq client
  ) {}

  getHello(): string {
    return 'Never forget about it: The more you learn, the better you become, and more value you can provide!';
  }

  async sendMessageToWorker(data: DataToWorkerDTO) {
    this.logger.log('sendMessageToWorker >> ', data);
    const result = await this.queueClient.emit(
      MESSAGE_PATTERNS.workerMessagePattern,
      JSON.stringify(data),
    );

    this.logger.debug('result >> ', JSON.stringify(result));
  }
}
