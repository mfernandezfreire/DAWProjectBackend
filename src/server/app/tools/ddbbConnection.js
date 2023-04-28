import * as mysql from 'mysql2/promise';
import env from '../../config/env.js';

export class DDBBConnection {
  static nodeEnv = env.nodeEnv;

  static host = env.host;

  static user = env.ddbbUser;

  static databaseName = env.ddbbName;

  static password = env.ddbbPassword;

  static socketPath = env.ddbbSocketPath;

  static createConnection() {
    let config = {};
    if (this.nodeEnv === 'DEV') {
      config = {
        host: this.host,
        user: this.user,
        database: this.databaseName,
        password: this.password,
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

  static closeConnection(connection) {
    return connection.end();
  }
}
