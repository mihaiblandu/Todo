import { mergeTypes } from "merge-graphql-schemas";

import User from "./userType";
import Todo from "./todoType";

const typeDefs = [User,Todo];

export default mergeTypes(typeDefs, { all: true });