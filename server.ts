import { Application, Router } from "https://deno.land/x/oak/mod.ts";

const port = 8090;

const app = new Application();
const router = new Router();

// middleware
app.use(router.routes());
app.use(router.allowedMethods());

router.get("/api/orders", ({ response }: { response: any }) => {
  console.log("Hello World!");
});

console.log(`Server running on port ${port}\nhttp://localhost:${port}`);

await app.listen({ port });
