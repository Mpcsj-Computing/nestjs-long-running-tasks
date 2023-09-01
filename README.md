<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://res.cloudinary.com/https-mpcsj-com/image/upload/v1688933655/Thumbnail1_xukkgs.jpg" width="400" alt="Video thumbnail" /></a>
</p>

[circleci-image]: https://img.shields.io/circleci/build/github/nestjs/nest/master?token=abc123def456
[circleci-url]: https://circleci.com/gh/nestjs/nest

  <p align="center">A progressive <a href="http://nodejs.org" target="_blank">Node.js</a> framework for building efficient and scalable server-side applications.</p>
    <p align="center">
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/v/@nestjs/core.svg" alt="NPM Version" /></a>
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/l/@nestjs/core.svg" alt="Package License" /></a>
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/dm/@nestjs/common.svg" alt="NPM Downloads" /></a>
<a href="https://circleci.com/gh/nestjs/nest" target="_blank"><img src="https://img.shields.io/circleci/build/github/nestjs/nest/master" alt="CircleCI" /></a>
<a href="https://coveralls.io/github/nestjs/nest?branch=master" target="_blank"><img src="https://coveralls.io/repos/github/nestjs/nest/badge.svg?branch=master#9" alt="Coverage" /></a>
<a href="https://discord.gg/G7Qnnhy" target="_blank"><img src="https://img.shields.io/badge/discord-online-brightgreen.svg" alt="Discord"/></a>
<a href="https://opencollective.com/nest#backer" target="_blank"><img src="https://opencollective.com/nest/backers/badge.svg" alt="Backers on Open Collective" /></a>
<a href="https://opencollective.com/nest#sponsor" target="_blank"><img src="https://opencollective.com/nest/sponsors/badge.svg" alt="Sponsors on Open Collective" /></a>
  <a href="https://paypal.me/kamilmysliwiec" target="_blank"><img src="https://img.shields.io/badge/Donate-PayPal-ff3f59.svg"/></a>
    <a href="https://opencollective.com/nest#sponsor"  target="_blank"><img src="https://img.shields.io/badge/Support%20us-Open%20Collective-41B883.svg" alt="Support us"></a>
  <a href="https://twitter.com/nestframework" target="_blank"><img src="https://img.shields.io/twitter/follow/nestframework.svg?style=social&label=Follow"></a>
</p>
  <!--[![Backers on Open Collective](https://opencollective.com/nest/backers/badge.svg)](https://opencollective.com/nest#backer)
  [![Sponsors on Open Collective](https://opencollective.com/nest/sponsors/badge.svg)](https://opencollective.com/nest#sponsor)-->

## Description

Run long-running tasks with NestJS with the techniques demonstrated here

- [System design primer](https://github.com/donnemartin/system-design-primer) project demonstrates how to design a backend project in a way that can scale gracefully
- When it comes to long-running tasks and tasks that consume too much computing power, it is interesting to handle them asynchronously in a so-called, worker.
- So an optimal approach is, to move the heavy/long-running task to a worker, and communicate with them asynchronously via queues, like Kafka, SQS or RabbitMQ.
- For this project, I'm using RabbitMQ as the Queue message broker, but the choice is up to you and what you feel most comfortable using

### Flow description

The following flow explains how everything works

<img src="https://res.cloudinary.com/https-mpcsj-com/image/upload/v1693609899/web_and_worker_backend_app.drawio_xpkihl.png" width="400" alt="Video thumbnail" />

## Installation

```bash
$ yarn install
```

## Running the app

- **PS** For running both apps correctly, make sure that the docker engine is running on your machine.

```bash
# start docker-compose file

$ docker-compose up

# development with watch mode
## web app
$ yarn start:dev
## worker app
$ yarn start:dev worker-backend-app
```

## Test

```bash
# unit tests
$ yarn run test

# e2e tests
$ yarn run test:e2e

# test coverage
$ yarn run test:cov
```

## Support

Nest is an MIT-licensed open-source project. It can grow thanks to the sponsors and support by the amazing backers. If you'd like to join them, please [read more here](https://docs.nestjs.com/support).

## Stay in touch

- Project author - [Mpcsj](https://twitter.com/home)
- Youtube channel - [Mpcsj Tech Tips](https://www.youtube.com/@mpcsjtechtips)

## License

Nest is [MIT licensed](LICENSE).
