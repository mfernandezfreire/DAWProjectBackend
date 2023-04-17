import fastify from 'fastify';
import cors from '@fastify/cors';
import { ROUTES } from '../config/routes.js';
import { AuthRoutes } from './routes/authRoutes.js';
import { BaseRoute } from './routes/baseRoute.js';
import { UserRoutes } from './routes/userRoutes.js';

/**
 * @description Create fastify App
 */
class App {
  static async run(
    path,
    port,
  ) {
    // Require the framework and instantiate it
    const app = fastify({});

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
