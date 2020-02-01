import { controller, httpGet } from 'inversify-express-utils';

@controller('/')
export class HelloWorld {
  @httpGet('/')
  index() {
    return 'Hello World';
  }
}
