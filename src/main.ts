import { Config } from "./config";
import { ErrorHandler } from "./errorHandler";
import { Server } from "./server";
import { routes } from "./routes";

export const main = async () => {
  ErrorHandler.handleUhandledRejections();

  const server = new Server({
    port: Config.get("PORT"),
    host: Config.get("HOST"),
    routes,
  });
  await server.start();

  return server;
};
