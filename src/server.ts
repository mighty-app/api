import "reflect-metadata";
import app from "./app";

const main = async () => {
  const port = process.env.PORT || 5000;

  app.listen({ port }, () => console.log(`🚀 Server ready and listening at ==> http://localhost:${port}`));
};

main().catch((error) => console.log("🛑 Error:", error));
