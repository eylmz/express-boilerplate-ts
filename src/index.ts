import 'reflect-metadata';
import { IocContainer } from './iocContainer';
import { Server } from './server';
import './controllers';

const iocContainer: IocContainer = new IocContainer();
const server = new Server(iocContainer.getContainer());
server.listen();
