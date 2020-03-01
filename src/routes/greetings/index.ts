import { Server, IncomingMessage, ServerResponse } from 'http';
import { FastifyInstance, RegisterOptions, RouteSchema } from 'fastify';
import { Schema, ValidationResult } from '@hapi/joi';

import { greet } from './handler';
import { greetBodySchema } from './schema';

const registerRoutes = (
  server: FastifyInstance,
  _: RegisterOptions<Server, IncomingMessage, ServerResponse>,
  done: Function
): void => {
  server.post(
    '/greetings',
    {
      schema: {
        body: greetBodySchema,
      },
      schemaCompiler: schema => (data: RouteSchema): ValidationResult =>
        (schema as Schema).validate(data),
    },
    greet
  );
  done();
};

export default registerRoutes;
