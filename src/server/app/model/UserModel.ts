/* eslint-disable @typescript-eslint/no-explicit-any */
import { DDBBConnection } from '../tools/ddbbConnection';

interface Objectype {
  [key: string]: any
}

export class UserModel {
  static async checkActivities(): Promise<Objectype> {
    const connection = DDBBConnection.createConnection();
    try {
      const result = await connection.query('SELECT * FROM actividades_de_voluntariado');
      await DDBBConnection.closeConnection(connection);
      return result;
    } catch (error) {
      return error as Objectype;
    }
  }

  static async checkActivitiesByCif(valuesToQuery: string[]): Promise<Objectype> {
    const connection = DDBBConnection.createConnection();
    try {
      const result = await connection.query(
        'SELECT * FROM actividades_de_voluntariado WHERE cif_ong = ?',
        valuesToQuery,
      );
      await DDBBConnection.closeConnection(connection);
      return result;
    } catch (error) {
      return error as Objectype;
    }
  }

  static async checkActivitieDetail(valuesToQuery: string[]): Promise<Objectype> {
    const connection = DDBBConnection.createConnection();
    try {
      const result = await connection.query(
        'SELECT * FROM actividades_de_voluntariado WHERE id = ?',
        valuesToQuery,
      );
      await DDBBConnection.closeConnection(connection);
      return result;
    } catch (error) {
      return error as Objectype;
    }
  }

  static async createActivities(valueToInsert: string[]): Promise<Objectype> {
    const connection = DDBBConnection.createConnection();
    try {
      const result = await connection.query(
        'INSERT INTO actividades_de_voluntariado values (?, ?, ?, ?, ?, ?, ?, ? ,? ,? ,?)',
        valueToInsert,
      );
      await DDBBConnection.closeConnection(connection);
      return result;
    } catch (error) {
      return error as Objectype;
    }
  }

  static async updateActivitie(valueToInsert: string[]): Promise<Objectype> {
    const connection = DDBBConnection.createConnection();
    try {
      const result = await connection.query(
        'UPDATE actividades_de_voluntariado SET nombre = ?, sector = ?, numero_voluntarios = ?, descripcion_actividad = ?, descripcion_horarios = ?, calle = ?, cp = ?, localidad = ?,  provincia = ? WHERE id = ?',
        valueToInsert,
      );
      await DDBBConnection.closeConnection(connection);
      return result;
    } catch (error) {
      return error as Objectype;
    }
  }

  static async deleteActivitie(valuesToQuery: string[]): Promise<Objectype> {
    const connection = DDBBConnection.createConnection();
    try {
      const result = await connection.query(
        'DELETE FROM actividades_de_voluntariado WHERE id = ?',
        valuesToQuery,
      );
      await DDBBConnection.closeConnection(connection);
      return result;
    } catch (error) {
      return error as Objectype;
    }
  }

  static async addVolunteerToActivitie(valuesToQuery: string[]): Promise<Objectype> {
    const connection = DDBBConnection.createConnection();
    try {
      const result = await connection.query(
        'INSERT INTO actividades_de_voluntariado_voluntarios values (?, ?)',
        valuesToQuery,
      );
      await DDBBConnection.closeConnection(connection);
      return result;
    } catch (error) {
      return error as Objectype;
    }
  }

  static async deleteVolunteerFromActivitie(valuesToQuery: string[]): Promise<Objectype> {
    const connection = DDBBConnection.createConnection();
    try {
      const result = await connection.query(
        'DELETE FROM actividades_de_voluntariado_voluntarios WHERE nif_voluntario = ? AND id_actividad_de_voluntariado = ?',
        valuesToQuery,
      );
      await DDBBConnection.closeConnection(connection);
      return result;
    } catch (error) {
      return error as Objectype;
    }
  }

  static async getVolunteersByActivitie(valuesToQuery: string[]): Promise<Objectype> {
    const connection = DDBBConnection.createConnection();
    try {
      const result = await connection.query(
        'SELECT * FROM voluntario INNER JOIN actividades_de_voluntariado_voluntarios ON voluntario.nif = actividades_de_voluntariado_voluntarios.nif_voluntario WHERE actividades_de_voluntariado_voluntarios.id_actividad_de_voluntariado = ?',
        valuesToQuery,
      );
      await DDBBConnection.closeConnection(connection);
      return result;
    } catch (error) {
      return error as Objectype;
    }
  }

  static async getActivitiesByVolunteer(valuesToQuery: string[]): Promise<Objectype> {
    const connection = DDBBConnection.createConnection();
    try {
      const result = await connection.query(
        'SELECT * FROM actividades_de_voluntariado INNER JOIN actividades_de_voluntariado_voluntarios ON actividades_de_voluntariado.id = actividades_de_voluntariado_voluntarios.id_actividad_de_voluntariado WHERE actividades_de_voluntariado_voluntarios.nif_voluntario = ?',
        valuesToQuery,
      );
      await DDBBConnection.closeConnection(connection);
      return result;
    } catch (error) {
      return error as Objectype;
    }
  }
}
