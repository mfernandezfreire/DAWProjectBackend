/* eslint-disable @typescript-eslint/no-explicit-any */
import { DDBBConnection } from '../tools/ddbbConnection';

interface Objectype {
  [key: string]: any
}

export class AuthModel {
  static async ongSignUp(valuestToInsert: string[]): Promise<Objectype> {
    const connection = DDBBConnection.createConnection();
    try {
      const result = await connection.query(
        'INSERT INTO ong (cif, nombre, password, tipo, descripcion, sector_intervencion, calle, cp, localidad, provincia, ano_creacion, telefono, correo_electronico) values (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)',
        valuestToInsert,
      );
      await DDBBConnection.closeConnection(connection);
      return result;
    } catch (error) {
      return error as Objectype;
    }
  }

  static async ongLogin(valuesToQuery: string[]): Promise<Objectype> {
    const connection = DDBBConnection.createConnection();
    try {
      const result = await connection.query(
        'SELECT cif, nombre, tipo, descripcion, sector_intervencion, calle, cp, localidad, provincia, ano_creacion, telefono, correo_electronico FROM ong WHERE cif = ? AND password = ?',
        valuesToQuery,
      );
      await DDBBConnection.closeConnection(connection);
      return result;
    } catch (error) {
      return error as Objectype;
    }
  }

  static async ongDelete(valuesToQuery: string[]): Promise<Objectype> {
    const connection = DDBBConnection.createConnection();
    try {
      const result = await connection.query(
        'DELETE FROM ong WHERE cif = ?',
        valuesToQuery,
      );
      await DDBBConnection.closeConnection(connection);
      return result;
    } catch (error) {
      return error as Objectype;
    }
  }

  static async volunteerSignUp(valuestToInsert: string[]): Promise<Objectype> {
    const connection = DDBBConnection.createConnection();
    try {
      const result = await connection.query(
        'INSERT INTO voluntario (nif, nombre, apellidos, password, estudios, campo_estudio, idiomas, telefono, correo_electronico, motivacion_voluntariado) values (?, ?, ?, ?, ?, ?, ?, ?, ?, ?)',
        valuestToInsert,
      );
      await DDBBConnection.closeConnection(connection);
      return result;
    } catch (error) {
      return error as Objectype;
    }
  }

  static async volunteerLogin(valuesToQuery: string[]): Promise<Objectype> {
    const connection = DDBBConnection.createConnection();
    try {
      const result = await connection.query(
        'SELECT nif, nombre, apellidos, estudios, campo_estudio, idiomas, telefono, correo_electronico, motivacion_voluntariado FROM voluntario WHERE nif = ? AND password = ?',
        valuesToQuery,
      );
      await DDBBConnection.closeConnection(connection);
      return result;
    } catch (error) {
      return error as Objectype;
    }
  }

  static async volunteerDelete(valuesToQuery: string[]): Promise<Objectype> {
    const connection = DDBBConnection.createConnection();
    try {
      const result = await connection.query(
        'DELETE FROM voluntario WHERE nif = ?',
        valuesToQuery,
      );
      await DDBBConnection.closeConnection(connection);
      return result;
    } catch (error) {
      return error as Objectype;
    }
  }
}
