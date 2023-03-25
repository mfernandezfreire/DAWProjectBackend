import { FastifyRequest, FastifyReply } from 'fastify';
import { AuthModel } from '../model/AuthModel';

export interface ONG {
  cif: string;
  nombre: string;
  password: string;
  tipo: string;
  descripcion: string;
  sector_intervencion: string;
  calle: string;
  cp: number;
  localidad: string;
  provincia: string;
  ano_creacion: number,
  telefono: number;
  correo_electronico: string;
}

export interface ONG_LOGIN {
  cif: string;
  password: string;
}

export interface ONG_DELETE {
  cif: string;
}

export interface VOLUNTEER {
  nif: string;
  nombre: string;
  apellidos: string;
  password: string;
  estudios: string;
  campo_estudio: string;
  idiomas: string;
  telefono: string;
  correo_electronico: string;
  motivacion_voluntariado: string;
}

export interface VOLUNTEER_LOGIN {
  nif: string;
  password: string;
}

export interface VOLUNTEER_DELETE {
  cif: string;
}

export class AuthService {
  static async ongSignUp(
    request: FastifyRequest,
    reply: FastifyReply,
  ): Promise<void> {
    const { body } = request;
    const valuesToInsert = Object.values(body as ONG);
    const result = await AuthModel.ongSignUp(valuesToInsert);
    reply.send(result);
  }

  static async ongLogin(
    request: FastifyRequest,
    reply: FastifyReply,
  ): Promise<void> {
    const { body } = request;
    const valuesToQuery = Object.values(body as ONG_LOGIN);
    const result = await AuthModel.ongLogin(valuesToQuery);
    reply.send(result);
  }

  static async ongDelete(
    request: FastifyRequest,
    reply: FastifyReply,
  ): Promise<void> {
    const { body } = request;
    const valuesToQuery = Object.values(body as ONG_LOGIN);
    const result = await AuthModel.ongDelete(valuesToQuery);
    reply.send(result);
  }

  static async volunteerSignUp(
    request: FastifyRequest,
    reply: FastifyReply,
  ): Promise<void> {
    const { body } = request;

    const valuesToInsert = Object.values(body as VOLUNTEER);
    const result = await AuthModel.volunteerSignUp(valuesToInsert);
    reply.send(result);
  }

  static async volunteerLogin(
    request: FastifyRequest,
    reply: FastifyReply,
  ): Promise<void> {
    const { body } = request;
    const valuesToQuery = Object.values(body as VOLUNTEER_LOGIN);
    const result = await AuthModel.volunteerLogin(valuesToQuery);
    reply.send(result);
  }

  static async volunteerDelete(
    request: FastifyRequest,
    reply: FastifyReply,
  ): Promise<void> {
    const { body } = request;
    const valuesToQuery = Object.values(body as VOLUNTEER_DELETE);
    const result = await AuthModel.volunteerDelete(valuesToQuery);
    reply.send(result);
  }
}
