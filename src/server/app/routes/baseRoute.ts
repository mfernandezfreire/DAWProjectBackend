import * as mysql from 'mysql2/promise';

import { FastifyInstance } from 'fastify';
import { BaseMiddelware } from '../middlewares/base';

export class BaseRoute {
  static async setRoutes(app: FastifyInstance): Promise<void> {
    BaseRoute.getBase(app);
  }

  private static async getBase(app: FastifyInstance): Promise<void> {
    app.route({
      method: 'GET',
      url: '/',
      onRequest: async (request, reply) => {
        BaseMiddelware.onRequest(request, reply);
      },
      handler: async (request, reply) => {
        const connection = mysql.createPool({
          // host: '34.175.155.3',
          user: 'root',
          password: 'nuncamais',
          socketPath: '/cloudsql/daw-project-381621:europe-west1:daw-project-instance',
        });

        let result;

        try {
          result = await connection.query('SHOW DATABASES');
        } catch (error) {
          result = error;
        }

        return reply.send(({ hello: result }));
      },
    });
  }
}
