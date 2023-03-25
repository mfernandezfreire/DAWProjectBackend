import * as mysql from 'mysql2/promise';
import env from '../../config/env';

export class DDBBConnection {
  private static nodeEnv = env.nodeEnv;

  private static host = env.host;

  private static user = env.ddbbUser;

  private static databaseName = env.ddbbName;

  private static password = env.ddbbPassword;

  private static socketPath = env.ddbbSocketPath;

  public static createConnection(): mysql.Pool {
    let config: mysql.PoolOptions = {};
    if (this.nodeEnv === 'DEV') {
      config = {
        host: this.host,
        user: this.user,
        database: this.databaseName,
      };
    } else {
      config = {
        user: this.user,
        password: this.password,
        database: this.databaseName,
        socketPath: this.socketPath,
      };
    }
    return mysql.createPool(config);
  }

  public static closeConnection(connection: mysql.Pool) {
    return connection.end();
  }
}
