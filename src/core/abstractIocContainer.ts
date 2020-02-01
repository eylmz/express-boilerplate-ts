import { Container, interfaces } from 'inversify';

export abstract class AbstractIocContainer {
  protected readonly container: Container;

  protected constructor() {
    this.container = new Container();
  }

  protected abstract registerDependencies(container: Container): void;

  resolve<T>(constructorFunction: interfaces.Newable<T>): T {
    return this.container.resolve<T>(constructorFunction);
  }

  getContainer() {
    this.registerDependencies(this.container);
    return this.container;
  }
}
