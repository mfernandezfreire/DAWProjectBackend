import { config } from 'dotenv';
import path, { resolve } from 'path';

(async () => {
  /** Import dotenv */
  const __dirname = path.resolve();
  config({ path: resolve(__dirname, 'env/.env') });
  /** Import Server */
  await import('./server/index.js');
})();
