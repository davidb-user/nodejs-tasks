import { Config } from "./config";
import { ErrorHandler } from "./errorHandler";
import { Server } from "./server";

const init = async () => {
  ErrorHandler.handleUhandledRejections();

  const server = new Server({
    port: Config.get("PORT"),
    host: Config.get("HOST"),
  });
  await server.start();
};

init();
