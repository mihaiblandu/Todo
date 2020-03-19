import { mergeResolvers } from"merge-graphql-schemas";
import User from "./userResolver";
import Todo from "./todoResolver";

const resolvers= [User,Todo];

export default mergeResolvers(resolvers);