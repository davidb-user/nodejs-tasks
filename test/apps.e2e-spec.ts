import { main } from "../src/main";
import {
  getAllAppsRoute,
  countIncomingAppsRoute,
} from "../src/routes/apps/route";
import { CountIncomingAppsParams } from "../src/routes/apps/type";
import { Server } from "../src/server";
import axios from "axios";
import { EnvironmentVariables } from "../src/config";

describe("apps", () => {
  let server: Server;
  let baseUrl: string;

  beforeAll(async () => {
    server = await main();
    const HOST = process.env.HOST as unknown as EnvironmentVariables;
    const PORT = process.env.PORT as unknown as EnvironmentVariables;
    baseUrl = `http://${HOST}:${PORT}`;
    axios.defaults.baseURL = baseUrl;
  });

  afterAll(async () => {
    await server.stop();
  });

  describe("GET /", () => {
    it("should return constant result", async () => {
      const expectedResult = { apps: [1, 2, 3, 4] };

      const result = await axios<number>(getAllAppsRoute.path, {
        method: getAllAppsRoute.method as string,
      });

      expect(result.status).toBe(200);
      expect(result.data).toEqual(expectedResult);
    });
  });

  describe("POST /", () => {
    it("should return incoming apps count", async () => {
      const payload: CountIncomingAppsParams = { apps: [1, 2, 3, 4] };

      const result = await axios<number>(countIncomingAppsRoute.path, {
        method: countIncomingAppsRoute.method as string,
        data: payload,
      });

      expect(result.status).toBe(200);
      expect(result.data).toEqual(payload.apps.length);
    });
  });
});
