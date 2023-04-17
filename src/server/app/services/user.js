/* eslint-disable camelcase */
import { UserModel } from '../model/UserModel.js';

export class UserService {
  static async checkActivities(
    request,
    reply,
  ) {
    const result = await UserModel.checkActivities();
    reply.send(result);
  }

  static async checkActivitiesByCif(
    request,
    reply,
  ) {
    const { body } = request;
    const valuesToQuery = Object.values(body);
    const result = await UserModel.checkActivitiesByCif(valuesToQuery);
    reply.send(result);
  }

  static async checkActivitiedetail(
    request,
    reply,
  ) {
    const { body } = request;
    const valuesToQuery = Object.values(body);
    const result = await UserModel.checkActivitieDetail(valuesToQuery);
    reply.send(result);
  }

  static async createActivitie(
    request,
    reply,
  ) {
    const { body } = request;
    const valuesToInsert = Object.values(body);
    const result = await UserModel.createActivities(valuesToInsert);
    reply.send(result);
  }

  static async updateActivitie(
    request,
    reply,
  ) {
    const { body } = request;
    const valuesToInsert = Object.values(body);
    const result = await UserModel.updateActivitie(valuesToInsert);
    reply.send(result);
  }

  static async deleteActivitie(
    request,
    reply,
  ) {
    const { id } = request.params;
    const valuesToInsert = Object.values({ id });
    const result = await UserModel.deleteActivitie(valuesToInsert);
    reply.send(result);
  }

  static async addVolunteerToActivitie(
    request,
    reply,
  ) {
    const { body } = request;
    const valuesToInsert = Object.values(body);
    const result = await UserModel.addVolunteerToActivitie(valuesToInsert);
    reply.send(result);
  }

  static async deleteVolunteerFromActivitie(
    request,
    reply,
  ) {
    const {
      nif_voluntario,
      id_actividad_de_voluntariado,
    } = request.query;
    const valuesToInsert = Object.values({
      nif_voluntario,
      id_actividad_de_voluntariado,
    });
    const result = await UserModel.deleteVolunteerFromActivitie(valuesToInsert);
    reply.send(result);
  }

  static async getVolunteersByActivie(
    request,
    reply,
  ) {
    const { body } = request;
    const valuesToInsert = Object.values(body);
    const result = await UserModel.getVolunteersByActivitie(valuesToInsert);
    reply.send(result);
  }

  static async getActivitesByVolunteer(
    request,
    reply,
  ) {
    const { body } = request;
    const valuesToInsert = Object.values(body);
    const result = await UserModel.getActivitiesByVolunteer(valuesToInsert);
    reply.send(result);
  }
}
