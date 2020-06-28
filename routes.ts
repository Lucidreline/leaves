import { Router } from "https://deno.land/x/oak/mod.ts";

const router = new Router();

router.get("/api/orders", ({ response }: { response: any }) => {
  response.body = {
    msg: "Hello world",
  };
});

export default router;
