import { ServerRoute } from "@hapi/hapi";
import { AppsHandler } from "./handler";
import { AppsValidator } from "./validator";

const rootPath = "/apps";

export const getAllAppsRoute: ServerRoute = {
  method: "GET",
  path: rootPath,
  handler: AppsHandler.getAllApps,
};

export const countIncomingAppsRoute: ServerRoute = {
  method: "POST",
  path: rootPath,
  handler: AppsHandler.countIncomingApps,
  options: {
    validate: { payload: AppsValidator.countIncomingAppsPayload },
  },
};

export const appRoutes: ServerRoute[] = [
  getAllAppsRoute,
  countIncomingAppsRoute,
];
