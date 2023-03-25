import { FastifyInstance } from 'fastify';
import { BaseMiddelware } from '../middlewares/base';

export class BaseRoute {
  static async setRoutes(app: FastifyInstance): Promise<void> {
    BaseRoute.get(app);
  }

  private static async get(app: FastifyInstance): Promise<void> {
    app.route({
      method: 'GET',
      url: '/',
      onRequest: async (request, reply) => {
        BaseMiddelware.onRequest(request, reply);
      },
      handler: async (request, reply) => reply.send(({ status: 'ok' })),
    });
  }
}
