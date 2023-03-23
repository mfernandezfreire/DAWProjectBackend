import fastify, { FastifyInstance } from 'fastify';
import { BaseRoute } from './routes/baseRoute';

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

    // Declare a route
    await app.register(BaseRoute.setRoutes);
    // app.get('/', async () => ({ hello: 'world' }));

    // Run the server!
    app.listen({ port, path });

    console.log(`server listenning on ${path} with port ${port}`);
  }
}

export default App;
