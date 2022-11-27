import type { Config } from "jest";

const jestConfig: Config = {
  rootDir: ".",
  transform: {
    "^.+\\.ts$": "ts-jest",
  },
  testRegex: "(/__test__/.*|(\\.|/)spec)\\.ts?$",
  moduleFileExtensions: ["ts", "js"],
  verbose: true,
};

export default jestConfig;
