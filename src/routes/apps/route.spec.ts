import { ServerInjectOptions } from "@hapi/hapi";
import { Server } from "../../server";
import { countIncomingAppsRoute, getAllAppsRoute } from "./route";
import { CountIncomingAppsParams } from "./type";

describe("apps", () => {
  describe("routes", () => {
    let server: Server;

    describe("getAllAppsRoute", () => {
      beforeEach(async () => {
        server = new Server({
          host: "test",
          port: "0",
          routes: [getAllAppsRoute],
        });
      });

      it("should return constant result", async () => {
        const expectedResult = { apps: [1, 2, 3, 4] };
        const options: ServerInjectOptions = {
          method: getAllAppsRoute.method as ServerInjectOptions["method"],
          url: getAllAppsRoute.path,
        };

        const data = await server.instance.inject(options);

        expect(data.statusCode).toBe(200);
        expect(data.result).toEqual(expectedResult);
      });
    });

    describe("countIncomingAppsRoute", () => {
      beforeEach(async () => {
        server = new Server({
          host: "test",
          port: "0",
          routes: [countIncomingAppsRoute],
        });
      });

      it("should return incoming apps count", async () => {
        const payload: CountIncomingAppsParams = { apps: [1, 2, 3, 4] };
        const options: ServerInjectOptions = {
          method:
            countIncomingAppsRoute.method as ServerInjectOptions["method"],
          url: countIncomingAppsRoute.path,
          payload,
        };

        const data = await server.instance.inject(options);

        expect(data.statusCode).toBe(200);
        expect(data.result).toEqual(payload.apps.length);
      });
    });
  });
});
