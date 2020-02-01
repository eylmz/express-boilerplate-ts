import { controller, httpGet } from 'inversify-express-utils';

@controller('/')
export class HelloWorldController {
  @httpGet('/')
  index() {
    return 'Hello World';
  }
}
