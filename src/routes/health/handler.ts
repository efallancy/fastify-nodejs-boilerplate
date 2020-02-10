import { ServerResponse } from 'http';
import { FastifyRequest, FastifyReply } from 'fastify';

export const respondHealthCheck = (
  _: FastifyRequest,
  reply: FastifyReply<ServerResponse>
): void => {
  reply.send({ message: 'OK 👍' }).status(200);
};
