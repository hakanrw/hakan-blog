import { extract } from "$std/front_matter/any.ts";
import { join } from "$std/path/mod.ts";

export interface ArticleType {
  slug: string;
  title: string;
  publishedAt: Date;
  content: string;
  snippet: string;
  image: string;
}

export async function getArticles(): Promise<ArticleType[]> {
  const files = Deno.readDir("./articles");
  const promises = [];
  for await (const file of files) {
    const slug = file.name.replace(".md", "")
    promises.push(getArticle(slug));
  }

  const articles = await Promise.all(promises);
  articles.sort((a, b) => b!.publishedAt.getTime() - a!.publishedAt.getTime());
  return articles as ArticleType[];
}

export async function getArticle(slug: string): Promise<ArticleType | null> {
  try {
    const text = await Deno.readTextFile(join("./articles", `${slug}.md`));
    const { attrs, body } = extract<ArticleType>(text);
    return {
      slug,
      title: attrs.title as string,
      publishedAt: new Date(attrs.publishedAt),
      content: body,
      snippet: attrs.snippet,
      image: attrs.image,
    };
  } catch(_) {
    return null;
  }
}