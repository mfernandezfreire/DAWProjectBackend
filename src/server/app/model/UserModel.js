/* eslint-disable @typescript-eslint/no-explicit-any */
import { DDBBConnection } from '../tools/ddbbConnection.js';

export class UserModel {
  static async checkActivities() {
    const connection = DDBBConnection.createConnection();
    try {
      const result = await connection.query('SELECT * FROM actividades_de_voluntariado');
      await DDBBConnection.closeConnection(connection);
      return result;
    } catch (error) {
      return error;
    }
  }

  static async checkActivitiesByCif(valuesToQuery) {
    const connection = DDBBConnection.createConnection();
    try {
      const result = await connection.query(
        'SELECT * FROM actividades_de_voluntariado WHERE cif_ong = ?',
        valuesToQuery,
      );
      await DDBBConnection.closeConnection(connection);
      return result;
    } catch (error) {
      return error;
    }
  }

  static async checkActivitieDetail(valuesToQuery) {
    const connection = DDBBConnection.createConnection();
    try {
      const result = await connection.query(
        'SELECT * FROM actividades_de_voluntariado WHERE id = ?',
        valuesToQuery,
      );
      await DDBBConnection.closeConnection(connection);
      return result;
    } catch (error) {
      return error;
    }
  }

  static async createActivities(valueToInsert) {
    const connection = DDBBConnection.createConnection();
    try {
      const result = await connection.query(
        'INSERT INTO actividades_de_voluntariado values (?, ?, ?, ?, ?, ?, ?, ? ,? ,? ,?)',
        valueToInsert,
      );
      await DDBBConnection.closeConnection(connection);
      return result;
    } catch (error) {
      return error;
    }
  }

  static async updateActivitie(valueToInsert) {
    const connection = DDBBConnection.createConnection();
    try {
      const result = await connection.query(
        'UPDATE actividades_de_voluntariado SET nombre = ?, sector = ?, numero_voluntarios = ?, descripcion_actividad = ?, descripcion_horarios = ?, calle = ?, cp = ?, localidad = ?,  provincia = ? WHERE id = ?',
        valueToInsert,
      );
      await DDBBConnection.closeConnection(connection);
      return result;
    } catch (error) {
      return error;
    }
  }

  static async deleteActivitie(valuesToQuery) {
    const connection = DDBBConnection.createConnection();
    try {
      const result = await connection.query(
        'DELETE FROM actividades_de_voluntariado WHERE id = ?',
        valuesToQuery,
      );
      await DDBBConnection.closeConnection(connection);
      return result;
    } catch (error) {
      return error;
    }
  }

  static async addVolunteerToActivitie(valuesToQuery) {
    const connection = DDBBConnection.createConnection();
    try {
      const result = await connection.query(
        'INSERT INTO actividades_de_voluntariado_voluntarios values (?, ?)',
        valuesToQuery,
      );
      await DDBBConnection.closeConnection(connection);
      return result;
    } catch (error) {
      return error;
    }
  }

  static async deleteVolunteerFromActivitie(valuesToQuery) {
    const connection = DDBBConnection.createConnection();
    try {
      const result = await connection.query(
        'DELETE FROM actividades_de_voluntariado_voluntarios WHERE nif_voluntario = ? AND id_actividad_de_voluntariado = ?',
        valuesToQuery,
      );
      await DDBBConnection.closeConnection(connection);
      return result;
    } catch (error) {
      return error;
    }
  }

  static async getVolunteersByActivitie(valuesToQuery) {
    const connection = DDBBConnection.createConnection();
    try {
      const result = await connection.query(
        'SELECT * FROM voluntario INNER JOIN actividades_de_voluntariado_voluntarios ON voluntario.nif = actividades_de_voluntariado_voluntarios.nif_voluntario WHERE actividades_de_voluntariado_voluntarios.id_actividad_de_voluntariado = ?',
        valuesToQuery,
      );
      await DDBBConnection.closeConnection(connection);
      return result;
    } catch (error) {
      return error;
    }
  }

  static async getActivitiesByVolunteer(valuesToQuery) {
    const connection = DDBBConnection.createConnection();
    try {
      const result = await connection.query(
        'SELECT * FROM actividades_de_voluntariado INNER JOIN actividades_de_voluntariado_voluntarios ON actividades_de_voluntariado.id = actividades_de_voluntariado_voluntarios.id_actividad_de_voluntariado WHERE actividades_de_voluntariado_voluntarios.nif_voluntario = ?',
        valuesToQuery,
      );
      await DDBBConnection.closeConnection(connection);
      return result;
    } catch (error) {
      return error;
    }
  }
}
