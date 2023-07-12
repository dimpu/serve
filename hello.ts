import { serve } from "https://deno.land/std@0.192.0/http/server.ts";

let port = 8000;
let content = "Hellow World";

function handler(_req: Request): Response {
  const portIndex = Deno.args.findIndex(arg => arg === "--port");
  if(portIndex > -1) {
    port = Deno.args[portIndex+1];
  }
  const contentIndex = Deno.args.findIndex(arg => arg === "--content");
  if(contentIndex > -1) {
    content = Deno.args[contentIndex+1];
  }
  return new Response(content);
}
console.log("Listening on http://localhost:" + port);
serve({port, handler});
