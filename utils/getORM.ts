import { MikroORM, RequestContext } from "@mikro-orm/core";
import { NextApiHandler, NextApiRequest, NextApiResponse } from "next";

import config from "../config/mikro-orm";

// Define global interface for MikroORM
declare global {
  var __MikroORM__: MikroORM | undefined;
}

const getORM = async () => {
  if (!global.__MikroORM__) {
    global.__MikroORM__ = await MikroORM.init(config);
  }

  return global.__MikroORM__;
};f

const withORM =
  (handler: NextApiHandler) =>
  async (req: NextApiRequest, res: NextApiResponse) => {
    const orm = await getORM();

    return RequestContext.create(orm!.em, async () => handler(req, res));
  };

export default getORM;
