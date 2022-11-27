import Hapi from "@hapi/hapi";

interface ServerOptions {
  port: string;
  host: string;
}

export class Server {
  private _server: Hapi.Server;

  constructor({ host, port }: ServerOptions) {
    const server = Hapi.server({
      port,
      host,
    });

    server.route({
      method: "GET",
      path: "/",
      handler: () => "Hello World!",
    });
    this._server = server;
  }

  async start() {
    await this._server.start();
    console.log("Server running on %s", this._server.info.uri);
  }
}
