import * as faunadb from "https://deno.land/x/fauna@5.0.0-deno-alpha9/mod.js";
import { Handlers } from "$fresh/server.ts";
import { setCookie } from "https://deno.land/std@0.177.0/http/cookie.ts";
    
const q = faunadb.query as any;

export const handler: Handlers = {
  async POST(req) {
    const url = new URL(req.url);
    const form = await req.json();


    const faunaClient = new faunadb.Client({ 
      domain: Deno.env.get("FAUNA_DOMAIN"),
      secret: Deno.env.get("FAUNA_ADMIN_SECRET"),
    });

    // check user credentials
    const res = await faunaClient.query(
      q.Filter(
        q.Map(
          q.Paginate(q.Documents(q.Collection("users"))),
          q.Lambda("ref", q.Get(q.Var("ref")))
        ),
        q.Lambda(
          "usr",
          q.And(
            q.Equals(form["username"], q.Select("username", q.Select("data", q.Var("usr")))),
            q.Equals(form["password"], q.Select("password", q.Select("data", q.Var("usr")))),
          )
        )
      )
    ).catch(console.log);

    console.log(res)


    if (res.data.length === 1) {

      // generate session 
      const sess = await faunaClient.query(
        q.Create(
          q.Collection("sessions"),
          {
            data: {
              sessionId: q.NewId(),
              username: res.data[0].data.username
            }
          }
        )
      );
      console.log(sess);

      const headers = new Headers();
      setCookie(headers, {
        name: "auth",
        value: sess.data.sessionId, // this should be a unique value for each session
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