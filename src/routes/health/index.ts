import { Server, IncomingMessage, ServerResponse } from 'http';
import { FastifyInstance, RegisterOptions } from 'fastify';

import { respondHealthCheck } from './handler';

const registerRoutes = (
  server: FastifyInstance,
  _: RegisterOptions<Server, IncomingMessage, ServerResponse>,
  done: Function
): void => {
  server.get('/health', respondHealthCheck);
  done();
};

export default registerRoutes;
