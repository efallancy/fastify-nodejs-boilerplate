import fastify, { FastifyInstance } from 'fastify';
import cors from 'fastify-cors';
import helmet from 'fastify-helmet';

import config from './config';
import health from './routes/health';

export const configureServer = (): FastifyInstance => {
  const server = fastify({ logger: config.logger, genReqId: config.genReqId });

  // Register middleware
  server.register(cors);
  server.register(helmet);

  // Register/mount route(s)
  server.register(health);

  return server;
};
