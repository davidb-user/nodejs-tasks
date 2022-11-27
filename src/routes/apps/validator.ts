import Joi from "joi";
import { CountIncomingAppsParams } from "./type";

export const AppsValidator = {
  countIncomingAppsPayload: Joi.object<CountIncomingAppsParams>({
    apps: Joi.array().items(Joi.number().strict()).required(),
  }),
};
