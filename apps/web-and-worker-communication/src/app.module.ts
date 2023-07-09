import { Module } from '@nestjs/common';
import { ClientsModule, Transport } from '@nestjs/microservices';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { QUEUE_INFO } from 'common/common/common.constants';

@Module({
  imports: [
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
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
