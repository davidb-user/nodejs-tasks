import { CountIncomingAppsParams } from "./type";

export class AppsModel {
  static async getAllApps() {
    return { apps: [1, 2, 3, 4] };
  }

  static async countIncomingApps(
    params: CountIncomingAppsParams
  ): Promise<number> {
    return params.apps?.length || 0;
  }
}
