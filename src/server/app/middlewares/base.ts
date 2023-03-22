import { FastifyReply, FastifyRequest } from 'fastify';
import env from '../../config/env';

export class BaseMiddelware {
  static async onRequest(
    request: FastifyRequest,
    reply: FastifyReply,
  ) {
    const secret = request.headers?.['x-from'];
    if (secret !== env.xFROM) {
      reply.code(401).send({ statusCode: 401, error: 'Unauthorized', message: 'Invalid x-from parameter' });
    }
  }
}
