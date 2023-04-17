import App from './app/index.js';
import env from './config/env.js';

(async () => {
  try {
    App.run(env.host, env.port);
  } catch (error) {
    console.log(error);
  }
})();
