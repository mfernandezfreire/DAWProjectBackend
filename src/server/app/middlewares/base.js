import env from '../../config/env.js';

export class BaseMiddelware {
  static async onRequest(
    request,
    reply,
  ) {
    const secret = request.headers?.['x-from'];
    if (secret !== env.xFROM) {
      reply.code(401).send({ statusCode: 401, error: 'Unauthorized', message: 'Invalid x-from parameter' });
    }
  }
}
