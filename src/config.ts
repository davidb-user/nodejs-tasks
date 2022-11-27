import dotenv from "dotenv";
import Joi from "joi";
import { ErrorHandler } from "./errorHandler";

export interface EnvironmentVariables {
  PORT: string;
  HOST: string;
}

export class Config {
  private static _isInitiated = false;

  static get(key: keyof EnvironmentVariables): string {
    if (!this._isInitiated) {
      Config.init();
    }

    return process.env[key];
  }

  private static init() {
    const schema = Joi.object<EnvironmentVariables>({
      HOST: Joi.string().required(),
      PORT: Joi.string().required(),
    }).unknown();

    dotenv.config();

    const validationResult = schema.validate(process.env);

    if (validationResult.error?.message) {
      ErrorHandler.handle(new Error(validationResult.error.message));
    }

    this._isInitiated = true;
  }
}
