import data from "./data/data.json";
import { getAppUsers } from "./src/getAppUsers";

interface User {
  id: number;
  name: string;
  role: string;
}

export interface App {
  id: number;
  name: string;
  users: User[];
}

const apps: App[] = data;
console.log(getAppUsers(apps));
