import dotenv from "dotenv";

interface EnvironmentVariables {
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
    this._isInitiated = true;
    dotenv.config();
  }
}
