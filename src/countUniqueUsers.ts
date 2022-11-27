import { App } from "../index";

export function countUniqueUsers(currApp: App) {
  return [...new Set(currApp.users.map((user) => user.id))].length;
}
