import { HttpModule } from '@nestjs/axios';
import { Module } from '@nestjs/common';
import { ClientsModule, Transport } from '@nestjs/microservices';
import { WorkerBackendAppController } from './worker-backend-app.controller';
import { WorkerBackendAppService } from './worker-backend-app.service';
import { QUEUE_INFO } from 'common/common/common.constants';

@Module({
  imports: [
    HttpModule,
    ClientsModule.register([
      {
        name: QUEUE_INFO.serviceName,
        transport: Transport.RMQ,
        options: {
          urls: [QUEUE_INFO.url],
          queue: QUEUE_INFO.queueName,
          queueOptions: {
            durable: false,
          },
        },
      },
    ]),
  ],
  controllers: [WorkerBackendAppController],
  providers: [WorkerBackendAppService],
})
export class WorkerBackendAppModule {}
