import { Head } from "$fresh/runtime.ts";
import { Handlers, PageProps } from "$fresh/server.ts";
import { getCookies } from "https://deno.land/std@0.177.0/http/cookie.ts";

import * as faunadb from "https://deno.land/x/fauna@5.0.0-deno-alpha9/mod.js";
const q = faunadb.query as any;

import { Article } from "../components/Article.tsx";
import Footer from "../components/Footer.tsx";
import Header from "../components/Header.tsx";
import Counter from "../islands/Counter.tsx";

import { getArticles } from "../lib/articles.ts";

interface Data {
  loggedIn: boolean;
  username?: string;
}

export const handler: Handlers = {
  async GET(req, ctx) {
    const cookies = getCookies(req.headers);

    if (cookies.auth != undefined) {  
      const faunaClient = new faunadb.Client({ 
        domain: Deno.env.get("FAUNA_DOMAIN"),
        secret: Deno.env.get("FAUNA_ADMIN_SECRET"),
      });
  
      // check user credentials
      const res = await faunaClient.query(
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
      ).catch(console.log);

      console.log(res);

      if (res.data.length === 1) {
        return ctx.render!({ loggedIn: true, username: res.data[0].data.username });
      }
  
    }

    return ctx.render!({ loggedIn: false });
  },
};


export default function Home({ data }: PageProps<Data>) {
  const articles = getArticles();
  
  return (
    <>
      <Head>
        <title>Hakan's Blog</title>
      </Head>
      <Header active="" loggedIn={data.loggedIn} />
      <div class="p-4 mx-auto max-w-screen-md">
        {
          articles.map(article => <Article {...article} />)
        }
      </div>
      <Footer blog={articles}/>
    </>
  );
}
