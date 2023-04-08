import fastify, { FastifyInstance } from 'fastify';
import cors from '@fastify/cors'
import { ROUTES } from '../config/routes';
import { AuthRoutes } from './routes/authRoutes';
import { BaseRoute } from './routes/baseRoute';
import { UserRoutes } from './routes/userRoutes';

/**
 * @description Create fastify App
 */
class App {
  static async run(
    path: string,
    port: number,
  ): Promise<void> {
    // Require the framework and instantiate it
    const app: FastifyInstance = fastify({});

    app.register(cors, {
      origin: '*',
      methods: 'GET,POST,PUT,PATCH,DELETE',
      allowedHeaders: 'Content-Type, x-from',
    });

    // Declare a route
    await app.register(BaseRoute.setRoutes);
    await app.register(AuthRoutes.setRoutes, { prefix: ROUTES.auth });
    await app.register(UserRoutes.setRoutes, { prefix: ROUTES.user });

    // Run the server!
    app.listen({ port, path });

    console.log(`server listenning on ${path} with port ${port}`);
  }
}

export default App;
