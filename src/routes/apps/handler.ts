import { Request } from "@hapi/hapi";
import { AppsModel } from "./model";
import { CountIncomingAppsParams } from "./type";

export class AppsHandler {
  static async getAllApps() {
    return { apps: [1, 2, 3, 4] };
  }

  static async countIncomingApps(request: Request): Promise<number> {
    const payload = request.payload as CountIncomingAppsParams;

    return AppsModel.countIncomingApps(payload);
  }
}
