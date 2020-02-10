import { FastifyInstance } from 'fastify';
import supertest from 'supertest';

import { configureServer } from '../server';

let server: FastifyInstance | undefined;

beforeEach(() => {
  server = configureServer();
  server.ready();
});

afterEach(() => {
  if (server) {
    server.close();
  }
  server = undefined;
});

describe('/health', () => {
  it('should return 200 OK status', async () => {
    // Throw error if no server instance is found
    if (!server) throw Error();

    const response = await supertest(server.server).get('/health');
    expect(response.status).toEqual(200);
    expect(response.body.message).toEqual('OK 👍');
  });
});
