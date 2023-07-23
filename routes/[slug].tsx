import { Head } from "$fresh/runtime.ts";
import Header from "../components/Header.tsx";
import { Handlers, PageProps } from "$fresh/server.ts";
import Footer from "../components/Footer.tsx";
import { ArticleType, getArticle } from "../lib/articles.ts";
import { CSS, render } from "$gfm";
import { tw, css, apply } from "twind/css";

interface Data {
  article: ArticleType;
}

export const handler: Handlers = {
  async GET(req, ctx) {
    const article = await getArticle(ctx.params.slug)

    return ctx.render!({ article })
  }
}

export default function Article({ data }: PageProps<Data>) {
  const article = data.article;

  if (article === null) return (
    <>
      <Head>
        <title>Not Found</title>
      </Head>
      <Header active="" loggedIn={false} />
      <div class="text-4xl text-center mt-[40vh]">Page not found.</div>
    </>
  );

  return (
    <>
      <Head>
        <title>{article.title}</title>
        <meta
          name="description"
          content={article.snippet}
        />
        <meta property="og:type" content="website" />
        <meta
          property="og:image"
          content={"https://blog.hakan.candar.dev" + article.image}
        />
        <meta property="og:title" content={article.title} />
        <meta property="og:description" content={article.snippet} />
        <meta property="og:url" content={"https://blog.hakan.candar.dev/" + article.slug} />
        <meta property="twitter:card" content="summary_large_image" />
        <meta
          property="twitter:image"
          content={"https://blog.hakan.candar.dev" + article.image}
        />
        <meta property="twitter:title" content={article.title} />
        <meta property="twitter:description" content={article.snippet} />
        <meta property="twitter:url" content={"https://blog.hakan.candar.dev/" + article.slug} />
        <style dangerouslySetInnerHTML={{ __html: CSS }} />
      </Head>
      <Header active="" loggedIn={false} />
      <div class="mx-auto sm:w-[450px] md:w-[600px] px-5 md:px-0 py-6 min-h-[70vh]">
        <div class="mb-3">
          <img src={article.image} class="w-full md:w-[600px] rounded-md max-h-[300px] object-cover" />
        </div>
        <h3 class="text(3xl gray-900) font-bold">{article.title}</h3>
        <time class="text-gray-500 text-lg">
          {new Date(article.publishedAt).toLocaleDateString("en-us", {
            year: "numeric",
            month: "long",
            day: "numeric",
          })}
        </time>
        <div class="mt-8 !text-lg markdown-body"
        dangerouslySetInnerHTML={{ __html:  render(article.content) }}
        />
      </div>
      <Footer blog={[]}/>
    </>
  );
}
