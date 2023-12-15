import "reflect-metadata";
import { createYoga } from "graphql-yoga";
import type { NextApiRequest, NextApiResponse } from "next";
import { createContext } from "@/backend/graphql/context";
import schema from "../../backend/graphql/schema";

export default createYoga<{
  req: NextApiRequest;
  res: NextApiResponse;
}>({
  schema: schema,
  context: createContext,
  graphqlEndpoint: "/api/graphql",
});

export const config = {
  api: {
    bodyParser: false,
  },
};
