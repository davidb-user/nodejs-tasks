import Hapi from "@hapi/hapi";

interface ServerOptions {
  port: string;
  host: string;
  routes: Hapi.ServerRoute[];
}

export class Server {
  private _server: Hapi.Server;

  constructor({ host, port, routes }: ServerOptions) {
    const server = Hapi.server({
      port,
      host,
    });

    routes.forEach((route) => server.route(route));

    this._server = server;
  }

  get instance(): Readonly<Hapi.Server> {
    return this._server;
  }

  async start() {
    await this._server.start();
    console.log(`Server running on ${this._server.info.uri}`);
  }

  async stop() {
    await this._server.stop();
    console.log("Server terminated successfully");
  }
}
