import { ServerRoute } from "@hapi/hapi";
import { appRoutes } from "./apps/route";

export const routes: ServerRoute[] = [...appRoutes];
