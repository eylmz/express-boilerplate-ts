import * as express from 'express';
import { InversifyExpressServer } from 'inversify-express-utils';
import { Container } from 'inversify';

export abstract class AbstractServer {
  protected readonly port: number;
  protected readonly application: express.Application;
  protected readonly iocContainer: Container;

  protected constructor(iocContainer: Container) {
    this.iocContainer = iocContainer;

    this.port = Number(process.env.PORT) || 8080;
    this.application = this.createApplication();
  }

  listen() {
    this.serverStarting();
    this.application.listen(this.port, err => {
      if (err) {
        return console.log(err);
      }

      console.log(`server is listening on ${this.port}`);
      this.serverStarted();
    });
  }

  private createApplication(): express.Application {
    const server = new InversifyExpressServer(this.iocContainer);

    return server
      .setConfig(app => {
        this.initialize(app);
      })
      .build();
  }

  protected abstract initialize(application: express.Application): void;
  protected abstract serverStarting(): void;
  protected abstract serverStarted(): void;
}
