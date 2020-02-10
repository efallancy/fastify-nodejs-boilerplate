import fastify, { FastifyInstance } from 'fastify';

import config from './config';
import health from './routes/health';

export const configureServer = (): FastifyInstance => {
  const server = fastify({ logger: config.logger, genReqId: config.genReqId });

  // Register/mount route(s)
  server.register(health);

  return server;
};
