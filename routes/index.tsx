import { Head } from "$fresh/runtime.ts";
import { Handlers, PageProps } from "$fresh/server.ts";
import { getCookies } from "https://deno.land/std@0.177.0/http/cookie.ts";

import { Article } from "../components/Article.tsx";
import Footer from "../components/Footer.tsx";
import Header from "../components/Header.tsx";
import Counter from "../islands/Counter.tsx";

import { getArticles } from "../lib/articles.ts";

interface Data {
  loggedIn: boolean;
}

export const handler: Handlers = {
  GET(req, ctx) {
    const cookies = getCookies(req.headers);
    return ctx.render!({ loggedIn: cookies.auth === "true" });
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
