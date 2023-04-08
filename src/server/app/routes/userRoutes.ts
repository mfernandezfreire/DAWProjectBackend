import { FastifyInstance } from 'fastify';
import { BaseMiddelware } from '../middlewares/base';
import { UserService } from '../services/user';

export class UserRoutes {
  static async setRoutes(app: FastifyInstance): Promise<void> {
    UserRoutes.getCommonActionsRoutes(app);
  }

  private static async getCommonActionsRoutes(app: FastifyInstance): Promise<void> {
    app.route({
      method: 'GET',
      url: '/checkactivities',
      onRequest: async (request, reply) => BaseMiddelware.onRequest(request, reply),
      handler: async (request, reply) => UserService.checkActivities(request, reply),
    });

    app.route({
      method: 'POST',
      url: '/checkactivitiesbycif',
      onRequest: async (request, reply) => BaseMiddelware.onRequest(request, reply),
      handler: async (request, reply) => UserService.checkActivitiesByCif(request, reply),
    });

    app.route({
      method: 'POST',
      url: '/checkactivitiesdetail',
      onRequest: async (request, reply) => BaseMiddelware.onRequest(request, reply),
      handler: async (request, reply) => UserService.checkActivitiedetail(request, reply),
    });

    app.route({
      method: 'POST',
      url: '/createactivities',
      onRequest: async (request, reply) => BaseMiddelware.onRequest(request, reply),
      handler: async (request, reply) => UserService.createActivitie(request, reply),
    });

    app.route({
      method: 'PUT',
      url: '/updateactivities',
      onRequest: async (request, reply) => BaseMiddelware.onRequest(request, reply),
      handler: async (request, reply) => UserService.updateActivitie(request, reply),
    });

    app.route({
      method: 'DELETE',
      url: '/deleteactivitie:id',
      onRequest: async (request, reply) => BaseMiddelware.onRequest(request, reply),
      handler: async (request, reply) => UserService.deleteActivitie(request, reply),
    });

    app.route({
      method: 'POST',
      url: '/addvolunteertoactivitie',
      onRequest: async (request, reply) => BaseMiddelware.onRequest(request, reply),
      handler: async (request, reply) => UserService.addVolunteerToActivitie(request, reply),
    });

    app.route({
      method: 'DELETE',
      url: '/deletevolunteerfromActivitie',
      onRequest: async (request, reply) => BaseMiddelware.onRequest(request, reply),
      handler: async (request, reply) => UserService.deleteVolunteerFromActivitie(request, reply),
    });

    app.route({
      method: 'POST',
      url: '/getvolunteersbyactivitie',
      onRequest: async (request, reply) => BaseMiddelware.onRequest(request, reply),
      handler: async (request, reply) => UserService.getVolunteersByActivie(request, reply),
    });

    app.route({
      method: 'POST',
      url: '/getactivitiesbyvolunteer',
      onRequest: async (request, reply) => BaseMiddelware.onRequest(request, reply),
      handler: async (request, reply) => UserService.getActivitesByVolunteer(request, reply),
    });
  }
}
