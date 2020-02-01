import * as express from 'express';
import { AbstractServer } from './core/abstractServer';
import { Container } from 'inversify';

export class Server extends AbstractServer {
  constructor(iocContainer: Container) {
    super(iocContainer);
  }

  protected initialize(application: express.Application) {}

  protected serverStarted() {}

  protected serverStarting() {}
}
