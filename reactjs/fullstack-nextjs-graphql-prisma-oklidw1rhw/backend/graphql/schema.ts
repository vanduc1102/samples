import { buildSchema } from "type-graphql";
import { resolvers } from "./__generated__/type-graphql";

const schema = await buildSchema({
  resolvers,
  validate: false,
});

export default schema;
