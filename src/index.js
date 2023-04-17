import { config } from 'dotenv';
import { resolve } from 'path';

(async () => {
  /** Import dotenv */
  config({ path: resolve('../env/.env') });
  /** Import Server */
  await import('./server/index.js');
})();
