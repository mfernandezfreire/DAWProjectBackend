import { AuthModel } from '../model/AuthModel.js';

export class AuthService {
  static async ongSignUp(
    request,
    reply,
  ) {
    const { body } = request;
    const valuesToInsert = Object.values(body);
    const result = await AuthModel.ongSignUp(valuesToInsert);
    reply.send(result);
  }

  static async ongLogin(
    request,
    reply,
  ) {
    const { body } = request;
    const valuesToQuery = Object.values(body);
    const result = await AuthModel.ongLogin(valuesToQuery);
    reply.send(result);
  }

  static async ongDelete(
    request,
    reply,
  ) {
    const { body } = request;
    const valuesToQuery = Object.values(body);
    const result = await AuthModel.ongDelete(valuesToQuery);
    reply.send(result);
  }

  static async volunteerSignUp(
    request,
    reply,
  ) {
    const { body } = request;

    const valuesToInsert = Object.values(body);
    const result = await AuthModel.volunteerSignUp(valuesToInsert);
    reply.send(result);
  }

  static async volunteerLogin(
    request,
    reply,
  ) {
    const { body } = request;
    const valuesToQuery = Object.values(body);
    const result = await AuthModel.volunteerLogin(valuesToQuery);
    reply.send(result);
  }

  static async volunteerDelete(
    request,
    reply,
  ) {
    const { body } = request;
    const valuesToQuery = Object.values(body);
    const result = await AuthModel.volunteerDelete(valuesToQuery);
    reply.send(result);
  }
}
