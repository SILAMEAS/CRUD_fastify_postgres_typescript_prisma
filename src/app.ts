import fastify from "fastify";
import { FastifyInstance } from "fastify/types/instance";
import { UserRoute } from "./routes/userRoute";
// create server
const server: FastifyInstance = fastify();
// create middleware
const port = 3001;
server.register(UserRoute, { prefix: "/user" });
async function Running() {
  await server.listen({ port: port }, (err, add) => {
    if (err) {
      server.log.error(err);
    }
    console.log("server running on port " + port);
  });
}
Running();
