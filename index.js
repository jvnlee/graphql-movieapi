import { GraphQLServer } from "graphql-yoga";
import resolvers from "./graphql-movieapi/resolvers";

const server = new GraphQLServer({
  typeDefs: "graphql-movieapi/schema.graphql",
  resolvers,
});

server.start(() => console.log("GraphQL server running..."));
