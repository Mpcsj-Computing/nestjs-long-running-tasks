import {
  Body,
  Controller,
  Post,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { AppService } from './app.service';
import { DataToWorkerDTO } from './model/data-to-worker.dto';

/**
 * Controller layer for Web backend app
 */
@Controller('') // here we define the path for app, which means we access this controller at <host>/ . Example: http://localhost:3000/
export class AppController {
  // here we inject appService: AppService via dependency-injection. NestJS framework do this for us.
  constructor(private readonly appService: AppService) {}

  @Post('') // we access this method by sending a POST http request to <host>/
  @UsePipes(ValidationPipe) // here we define the validation for the object received in the request. We can validate the object structure
  async receiveMessageFromUser(
    @Body(new ValidationPipe({ transform: true })) data: DataToWorkerDTO, // {transform:true} is used to convert a regular JSON object to a Javascript model class and all its methods defined in the class. In this case, we're converting the JSON request object to a DataToWorkerDTO object class
  ) {
    await this.appService.sendMessageToWorker(data);
  }

  /**
   * Once the Worker backend app finishes its execution, a POST Http request will be sent to the following function
   */
  @Post('process-complete') // we access this method by sending a POST http request to <host>/process-complete. Example: POST to http://localhost:3000/process-complete
  onLongProcessComplete(
    @Body(new ValidationPipe({ transform: true })) data: DataToWorkerDTO,
  ) {
    console.log('long running process is complete on worker >>', data);
  }
}
