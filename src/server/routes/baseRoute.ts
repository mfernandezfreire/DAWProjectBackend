import { FastifyInstance } from 'fastify';

export const BaseRoute = async (
  app: FastifyInstance,
): Promise<void> => {
  app.route({
    method: 'GET',
    url: '/',
    handler: async (request, reply) => {
      console.log('ENTRAAAAAA');
      reply.send({ hello: 'world' });
    },
  });
};
