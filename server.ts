import { Application } from "https://deno.land/x/oak/mod.ts";
import router from "./routes.ts";
import ConnectDB from "./connectToDB.ts";

ConnectDB();

const port = 8090;

const app = new Application();

// middleware
app.use(router.routes());
app.use(router.allowedMethods());

console.log(`Server running on port ${port}\nhttp://localhost:${port}`);

await app.listen({ port });
