import { Head } from "$fresh/runtime.ts";
import Header from "../components/Header.tsx";
import { Handlers, PageProps } from "$fresh/server.ts";
import Footer from "../components/Footer.tsx";
import { ArticleType, getArticle } from "../lib/articles.ts";

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

  return (
    <>
      <Head>
        <title>{article.title}</title>
      </Head>
      <Header active="" loggedIn={false} />
      <div class="mx-auto max-w-screen-lg py-6 px-8 min-h-[70vh]">
        <h3 class="text(3xl gray-900) font-bold">{article.title}</h3>
        <time class="text-gray-500 text-lg">
          {new Date(article.publishedAt).toLocaleDateString("en-us", {
            year: "numeric",
            month: "long",
            day: "numeric",
          })}
        </time>
        <div class="mt-8 text-lg"
        dangerouslySetInnerHTML={{ __html: article.content }}
        />
      </div>
      <Footer blog={[]}/>
    </>
  );
}
