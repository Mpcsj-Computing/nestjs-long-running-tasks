import {
  Body,
  Controller,
  Get,
  Post,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { AppService } from './app.service';
import { DataToWorkerDTO } from './model/data-to-worker.dto';

@Controller('')
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Post('')
  @UsePipes(ValidationPipe)
  async receiveMessageFromUser(
    @Body(new ValidationPipe({ transform: true })) data: DataToWorkerDTO,
  ) {
    await this.appService.sendMessageToWorker(data);
  }

  @Post('process-complete')
  onLongProcessComplete(
    @Body(new ValidationPipe({ transform: true })) data: DataToWorkerDTO,
  ) {
    console.log('long running process is complete on worker >>', data);
  }
}
