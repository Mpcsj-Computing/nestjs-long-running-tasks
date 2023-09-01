import { HttpService } from '@nestjs/axios';
import { Injectable, Logger } from '@nestjs/common';
import { DataToWorkerDTO } from 'apps/web-and-worker-communication/src/model/data-to-worker.dto';
import { sleep } from './common.utils';
import { WEB_SERVICE_URL } from 'common/common/common.constants';

@Injectable()
export class WorkerBackendAppService {
  private readonly logger = new Logger(WorkerBackendAppService.name);

  constructor(private readonly httpService: HttpService) {}

  /**
   * This is a simple function which represents a long-running task.
   * In our case, this is pretty much a simple function which waits a few seconds and then, send the result back to the Web backend app via callback HTTP call.
   * But it could be anything that takes many minutes, days, hours ...
   */
  async executeLongRunningTask(data: DataToWorkerDTO) {
    this.logger.log('Execute long running task >> ', JSON.stringify(data));
    this.logger.debug(data);
    await sleep(2000); // simulate a long running task with the sleep method

    this.logger.log('process complete');

    // Once our long-running task is complete, notify Web Backend app that the long running task was completed
    // by sending an HTTP POST request to <host>/process-complete
    await this.httpService.axiosRef.post(
      `${WEB_SERVICE_URL}/process-complete`,
      data.toJson(),
    );
  }
}
