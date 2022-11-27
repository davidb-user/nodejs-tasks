import { ServerInjectOptions } from "@hapi/hapi";
import { Server } from "../../server";
import { countIncomingAppsRoute, getAllAppsRoute } from "./route";
import { CountIncomingAppsParams } from "./type";
import { AppsValidator } from "./validator";

describe("apps", () => {
  describe("validator", () => {
    describe("countIncomingAppsPayload", () => {
      describe("valid input", () => {
        describe("empty apps array", () => {
          it("should be considered as valid", () => {
            const payload: CountIncomingAppsParams = { apps: [] };

            const result =
              AppsValidator.countIncomingAppsPayload.validate(payload);

            expect(result.error).not.toBeDefined();
          });
        });
        describe("filled apps array", () => {
          it("should be considered as valid", () => {
            const payload: CountIncomingAppsParams = { apps: [1, 2, 3, 4] };

            const result =
              AppsValidator.countIncomingAppsPayload.validate(payload);

            expect(result.error).not.toBeDefined();
          });
        });
      });
      describe("invalid input", () => {
        describe("missing apps array", () => {
          it("should be considered as invalid", () => {
            const payload: Partial<CountIncomingAppsParams> = {};

            const result =
              AppsValidator.countIncomingAppsPayload.validate(payload);

            expect(result.error).toBeDefined();
          });
        });

        describe("apps array items are strings", () => {
          it("should be considered as invalid", () => {
            const payload: CountIncomingAppsParams = {
              apps: ["1"] as unknown as number[],
            };

            const result =
              AppsValidator.countIncomingAppsPayload.validate(payload);

            expect(result.error).toBeDefined();
          });
        });

        describe("apps array items are not numbers", () => {
          it("should be considered as invalid", () => {
            const payload: CountIncomingAppsParams = {
              apps: [true] as unknown as number[],
            };

            const result =
              AppsValidator.countIncomingAppsPayload.validate(payload);

            expect(result.error).toBeDefined();
          });
        });
      });
    });
  });
});
