import { App } from "../index";
import { countUniqueUsers } from "./countUniqueUsers";

export function getAppUsers(apps: App[]) {
  const appUsersCountByAppId: Record<string, number> = {};

  apps.reduce((reducer, currApp) => {
    const usersCount = countUniqueUsers(currApp);
    const appId = currApp.id.toString();
    reducer[appId] = usersCount;
    return reducer;
  }, appUsersCountByAppId);

  return appUsersCountByAppId;
}
