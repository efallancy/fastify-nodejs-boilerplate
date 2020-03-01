import { ServerResponse } from 'http';
import { FastifyRequest, FastifyReply } from 'fastify';

export const greet = (
  req: FastifyRequest,
  reply: FastifyReply<ServerResponse>
): void => {
  reply.send({ message: `Greetings, ${req.body.name}!` }).status(200);
};
