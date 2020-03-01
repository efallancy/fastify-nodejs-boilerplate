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

describe('/v1/greetings', () => {
  it('should return 200 OK status', async () => {
    if (!server) throw Error();

    const response = await supertest(server.server)
      .post('/v1/greetings')
      .send({ name: 'Greg' });
    expect(response.status).toEqual(200);
    expect(response.body.message).toEqual('Greetings, Greg!');
  });

  it('should return 400 Bad Request status on missing required property', async () => {
    if (!server) throw Error();

    const response = await supertest(server.server).post('/v1/greetings');
    expect(response.status).toEqual(400);
  });
});
