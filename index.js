import { GraphQLServer } from "graphql-yoga";
import resolvers from "./graphql-basics/resolvers";

const server = new GraphQLServer({
  typeDefs: "graphql-basics/schema.graphql",
  resolvers,
});

server.start(() => console.log("GraphQL server running..."));
