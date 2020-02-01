import { AbstractIocContainer } from './core/abstractIocContainer';
import { Container } from 'inversify';

export class IocContainer extends AbstractIocContainer {
  constructor() {
    super();
  }

  protected registerDependencies(container: Container) {}
}
