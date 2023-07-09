import { NestFactory } from '@nestjs/core';
import { MicroserviceOptions, Transport } from '@nestjs/microservices';
import { WorkerBackendAppModule } from './worker-backend-app.module';
import { QUEUE_INFO } from 'common/common/common.constants';

async function bootstrap() {
  const app = await NestFactory.createMicroservice<MicroserviceOptions>(
    WorkerBackendAppModule,
    {
      transport: Transport.RMQ,
      options: {
        queue: QUEUE_INFO.queueName,
        urls: [QUEUE_INFO.url],
        queueOptions: {
          durable: false,
        },
      },
    },
  );
  await app.listen();
}
bootstrap();
