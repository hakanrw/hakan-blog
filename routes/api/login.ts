import { Handlers } from "$fresh/server.ts";
import { setCookie } from "https://deno.land/std@0.177.0/http/cookie.ts";

export const handler: Handlers = {
  async POST(req) {
    const url = new URL(req.url);
    const form = await req.json();
    if (form["username"] === "deno" && form["password"] === "land") {
      const headers = new Headers();
      setCookie(headers, {
        name: "auth",
        value: "true", // this should be a unique value for each session
        maxAge: 120,
        sameSite: "Lax", // this is important to prevent CSRF attacks
        domain: url.hostname,
        path: "/",
        secure: true,
      });

      headers.set("location", "/");
      return new Response(null, {
        status: 303, // "See Other"
        headers,
      });
    } else {
      return new Response(null, {
        status: 403,
      });
    }
  },
};