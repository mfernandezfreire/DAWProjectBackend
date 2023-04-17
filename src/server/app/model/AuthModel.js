import { DDBBConnection } from '../tools/ddbbConnection.js';

export class AuthModel {
  static async ongSignUp(valuestToInsert) {
    const connection = DDBBConnection.createConnection();
    try {
      const result = await connection.query(
        'INSERT INTO ong (cif, nombre, password, tipo, descripcion, sector_intervencion, calle, cp, localidad, provincia, ano_creacion, telefono, correo_electronico) values (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)',
        valuestToInsert,
      );
      await DDBBConnection.closeConnection(connection);
      return result;
    } catch (error) {
      return error;
    }
  }

  static async ongLogin(valuesToQuery) {
    const connection = DDBBConnection.createConnection();
    try {
      const result = await connection.query(
        'SELECT cif, nombre, tipo, descripcion, sector_intervencion, calle, cp, localidad, provincia, ano_creacion, telefono, correo_electronico FROM ong WHERE cif = ? AND password = ?',
        valuesToQuery,
      );
      await DDBBConnection.closeConnection(connection);
      return result;
    } catch (error) {
      return error;
    }
  }

  static async ongDelete(valuesToQuery) {
    const connection = DDBBConnection.createConnection();
    try {
      const result = await connection.query(
        'DELETE FROM ong WHERE cif = ?',
        valuesToQuery,
      );
      await DDBBConnection.closeConnection(connection);
      return result;
    } catch (error) {
      return error;
    }
  }

  static async volunteerSignUp(valuestToInsert) {
    const connection = DDBBConnection.createConnection();
    try {
      const result = await connection.query(
        'INSERT INTO voluntario (nif, nombre, apellidos, password, estudios, campo_estudio, idiomas, telefono, correo_electronico, motivacion_voluntariado) values (?, ?, ?, ?, ?, ?, ?, ?, ?, ?)',
        valuestToInsert,
      );
      await DDBBConnection.closeConnection(connection);
      return result;
    } catch (error) {
      return error;
    }
  }

  static async volunteerLogin(valuesToQuery) {
    const connection = DDBBConnection.createConnection();
    try {
      const result = await connection.query(
        'SELECT nif, nombre, apellidos, estudios, campo_estudio, idiomas, telefono, correo_electronico, motivacion_voluntariado FROM voluntario WHERE nif = ? AND password = ?',
        valuesToQuery,
      );
      await DDBBConnection.closeConnection(connection);
      return result;
    } catch (error) {
      return error;
    }
  }

  static async volunteerDelete(valuesToQuery) {
    const connection = DDBBConnection.createConnection();
    try {
      const result = await connection.query(
        'DELETE FROM voluntario WHERE nif = ?',
        valuesToQuery,
      );
      await DDBBConnection.closeConnection(connection);
      return result;
    } catch (error) {
      return error;
    }
  }
}
