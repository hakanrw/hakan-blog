import * as faunadb from "https://deno.land/x/fauna@5.0.0-deno-alpha9/mod.js";
import { Handlers } from "$fresh/server.ts";
import { deleteCookie, getCookies } from "https://deno.land/std@0.177.0/http/cookie.ts";

const q = faunadb.query as any;

export const handler: Handlers = {
  GET(req) { 
    const url = new URL(req.url);
    const headers = new Headers(req.headers);
    const cookies = getCookies(req.headers);

    const faunaClient = new faunadb.Client({ 
      domain: Deno.env.get("FAUNA_DOMAIN"),
      secret: Deno.env.get("FAUNA_ADMIN_SECRET"),
    });

    faunaClient.query(
      q.Delete(
        q.Select(
          "ref",
          q.Select(
            0,
            q.Filter(
              q.Map(
                q.Paginate(q.Documents(q.Collection("sessions"))),
                q.Lambda("ref", q.Get(q.Var("ref")))
              ),
              q.Lambda(
                "usr",
                q.Equals(cookies.auth, q.Select("sessionId", q.Select("data", q.Var("usr")))),
              )
            )
          )
        )
      )
    ).catch(console.log).then(console.log);
    

    deleteCookie(headers, "auth", { path: "/", domain: url.hostname });

    headers.set("location", "/");
    return new Response(null, {
      status: 302,
      headers,
    });
  },
};