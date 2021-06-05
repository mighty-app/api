import { ApolloServer } from "apollo-server-express";
import "reflect-metadata";
import app from "./app";
import buildSchema from "./buildSchema";

const main = async () => {
  const port = process.env.PORT || 5000;

  const schema = await buildSchema();

  const server = new ApolloServer({ schema });
  server.applyMiddleware({ app });

  app.listen({ port }, () =>
    console.log(`🚀 Server ready and listening at ==> http://localhost:${port}${server.graphqlPath}`)
  );
};

main().catch((error) => console.log("🛑 Error:", error));
