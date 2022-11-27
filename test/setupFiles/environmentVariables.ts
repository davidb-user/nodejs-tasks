import { EnvironmentVariables } from "../../src/config";

const environmentVariables: EnvironmentVariables = {
  PORT: "5000",
  HOST: "localhost",
};

Object.assign(process.env, environmentVariables);
