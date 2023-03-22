import App from './app';
import env from './config/env';

(async (): Promise<void> => {
  try {
    App.run(env.host, env.port);
  } catch (error) {
    console.log(error);
  }
})();
