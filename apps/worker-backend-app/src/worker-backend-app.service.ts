import { HttpService } from '@nestjs/axios';
import { Injectable, Logger } from '@nestjs/common';
import { DataToWorkerDTO } from 'apps/web-and-worker-communication/src/model/data-to-worker.dto';
import { sleep } from './common.utils';
import { WEB_SERVICE_URL } from 'common/common/common.constants';

@Injectable()
export class WorkerBackendAppService {
  private readonly logger = new Logger(WorkerBackendAppService.name);

  constructor(private readonly httpService: HttpService) {}

  async executeLongRunningTask(data: DataToWorkerDTO) {
    this.logger.log('Execute long running task >> ', JSON.stringify(data));
    this.logger.debug(data);
    await sleep(2000); // simulate a long running task with the sleep method

    this.logger.log('process complete');

    await this.httpService.axiosRef.post(
      `${WEB_SERVICE_URL}/process-complete`,
      data.toJson(),
    );
  }
}
