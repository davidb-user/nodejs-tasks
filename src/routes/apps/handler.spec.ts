import { Request } from "@hapi/hapi";
import { AppsHandler } from "./handler";
import { CountIncomingAppsParams } from "./type";

describe("apps", () => {
  describe("handler", () => {
    describe("getAllApps", () => {
      it("should return constant result", async () => {
        const expectedResult = { apps: [1, 2, 3, 4] };

        const data = await AppsHandler.getAllApps();

        expect(data).toEqual(expectedResult);
      });
    });

    describe("countIncomingApps", () => {
      it("should return incoming apps count", async () => {
        const payload: CountIncomingAppsParams = { apps: [1, 10, 2, 5] };

        const data = await AppsHandler.countIncomingApps({
          payload,
        } as Request);

        expect(data).toEqual(payload.apps.length);
      });
    });
  });
});
