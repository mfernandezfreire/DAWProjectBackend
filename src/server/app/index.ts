import fastify, { FastifyInstance } from 'fastify';
import { BaseRoute } from '../routes/baseRoute';

/**
 * @description Create fastify App
 */
class App {
  static async run(
    host: string,
    port: number,
  ): Promise<void> {
    // Require the framework and instantiate it
    const app: FastifyInstance = fastify({});

    // Declare a route
    await app.register(BaseRoute);
    // app.get('/', async () => ({ hello: 'world' }));

    // Run the server!
    app.listen({ host, port });

    console.log(`server listenning on ${host} with port ${port}`);
  }
}

export default App;
