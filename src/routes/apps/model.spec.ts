import { Request } from "@hapi/hapi";
import { AppsModel } from "./model";
import { CountIncomingAppsParams } from "./type";

describe("apps", () => {
  describe("model", () => {
    describe("getAllApps", () => {
      it("should return constant result", async () => {
        const expectedResult = { apps: [1, 2, 3, 4] };

        const data = await AppsModel.getAllApps();

        expect(data).toEqual(expectedResult);
      });
    });

    describe("countIncomingApps", () => {
      describe("empty array", () => {
        it("should return incoming apps count", async () => {
          const params: CountIncomingAppsParams = { apps: [] };

          const data = await AppsModel.countIncomingApps(params);

          expect(data).toEqual(params.apps.length);
        });
      });

      describe("filled array", () => {
        it("should return incoming apps count", async () => {
          const params: CountIncomingAppsParams = { apps: [1, 10, 2, 5] };

          const data = await AppsModel.countIncomingApps(params);

          expect(data).toEqual(params.apps.length);
        });
      });
    });
  });
});
