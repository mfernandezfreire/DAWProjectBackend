import { FastifyRequest, FastifyReply } from 'fastify';
import { UserModel } from '../model/UserModel';

interface Objectype {
  [key: string]: any
}

interface ACTIVITIE {
  id: string;
  cif_ong: string;
  nombre: string;
  sector: string;
  numero_voluntarios: string;
  descripcion_actividad: string;
  descripcion_horarios: string;
  calle: string;
  cp: string;
  localidad: string;
  provincia: string;
}

export class UserService {
  static async checkActivities(
    request: FastifyRequest,
    reply: FastifyReply,
  ): Promise<void> {
    const result = await UserModel.checkActivities();
    reply.send(result);
  }

  static async checkActivitiesByCif(
    request: FastifyRequest,
    reply: FastifyReply,
  ): Promise<void> {
    const { body } = request;
    const valuesToQuery = Object.values(body as Objectype);
    const result = await UserModel.checkActivitiesByCif(valuesToQuery);
    reply.send(result);
  }

  static async checkActivitiedetail(
    request: FastifyRequest,
    reply: FastifyReply,
  ): Promise<void> {
    const { body } = request;
    const valuesToQuery = Object.values(body as Objectype);
    const result = await UserModel.checkActivitieDetail(valuesToQuery);
    reply.send(result);
  }

  static async createActivitie(
    request: FastifyRequest,
    reply: FastifyReply,
  ): Promise<void> {
    const { body } = request;
    const valuesToInsert = Object.values(body as ACTIVITIE);
    const result = await UserModel.createActivities(valuesToInsert);
    reply.send(result);
  }

  static async updateActivitie(
    request: FastifyRequest,
    reply: FastifyReply,
  ): Promise<void> {
    const { body } = request;
    const valuesToInsert = Object.values(body as ACTIVITIE);
    const result = await UserModel.updateActivitie(valuesToInsert);
    reply.send(result);
  }

  static async deleteActivitie(
    request: FastifyRequest,
    reply: FastifyReply,
  ): Promise<void> {
    const { body } = request;
    const valuesToInsert = Object.values(body as Objectype);
    const result = await UserModel.deleteActivitie(valuesToInsert);
    reply.send(result);
  }

  static async addVolunteerToActivitie(
    request: FastifyRequest,
    reply: FastifyReply,
  ): Promise<void> {
    const { body } = request;
    const valuesToInsert = Object.values(body as Objectype);
    const result = await UserModel.addVolunteerToActivitie(valuesToInsert);
    reply.send(result);
  }

  static async deleteVolunteerFromActivitie(
    request: FastifyRequest,
    reply: FastifyReply,
  ): Promise<void> {
    const { body } = request;
    const valuesToInsert = Object.values(body as Objectype);
    const result = await UserModel.deleteVolunteerFromActivitie(valuesToInsert);
    reply.send(result);
  }
}
