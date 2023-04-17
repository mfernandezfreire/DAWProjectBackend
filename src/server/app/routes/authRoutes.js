import { BaseMiddelware } from '../middlewares/base.js';
import { AuthService } from '../services/auth.js';

export class AuthRoutes {
  static async setRoutes(app) {
    AuthRoutes.getONGRoutes(app);
    AuthRoutes.getVolunteerRoutes(app);
  }

  static async getONGRoutes(app) {
    app.route({
      method: 'POST',
      url: '/ong/signup',
      onRequest: async (request, reply) => BaseMiddelware.onRequest(request, reply),
      handler: async (request, reply) => AuthService.ongSignUp(request, reply),
    });

    app.route({
      method: 'POST',
      url: '/ong/login',
      onRequest: async (request, reply) => BaseMiddelware.onRequest(request, reply),
      handler: async (request, reply) => AuthService.ongLogin(request, reply),
    });

    app.route({
      method: 'DELETE',
      url: '/ong/delete',
      onRequest: async (request, reply) => BaseMiddelware.onRequest(request, reply),
      handler: async (request, reply) => AuthService.ongDelete(request, reply),
    });
  }

  static async getVolunteerRoutes(app) {
    app.route({
      method: 'POST',
      url: '/volunteer/signup',
      onRequest: async (request, reply) => BaseMiddelware.onRequest(request, reply),
      handler: async (request, reply) => AuthService.volunteerSignUp(request, reply),
    });

    app.route({
      method: 'POST',
      url: '/volunteer/login',
      onRequest: async (request, reply) => BaseMiddelware.onRequest(request, reply),
      handler: async (request, reply) => AuthService.volunteerLogin(request, reply),
    });

    app.route({
      method: 'DELETE',
      url: '/volunteer/delete',
      onRequest: async (request, reply) => BaseMiddelware.onRequest(request, reply),
      handler: async (request, reply) => AuthService.volunteerDelete(request, reply),
    });
  }
}
