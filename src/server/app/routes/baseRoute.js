import { BaseMiddelware } from '../middlewares/base.js';

export class BaseRoute {
  static async setRoutes(app) {
    BaseRoute.get(app);
  }

  static async get(app) {
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
