import { useSignal } from "@preact/signals";
import { ArticleType } from "../lib/articles.ts";
import RoundedContainer from "../components/RoundedContainer.tsx";
import { Article } from "../components/Article.tsx";
import Button from "../components/Button.tsx";

type Props = {
  articles: ArticleType[];
};

export default function Posts({ articles } : Props) {
  const page = useSignal(1);
  const pageCount = Math.ceil(articles.length / 10);

  return (
    <div class="p-4 mx-auto max-w-screen-md min-h-[70vh]">
      {
        articles.map(article => <Article {...article} />).slice( (page.value - 1) * 10, page.value * 10)
      }
      <div class="mt-2 flex flex-row gap-2 justify-end items-center">
        { page.value !== 1 && <Button onClick={() => page.value -= 1}>{"<"}</Button>}
        { pageCount > 1 && <div>{""+page}</div> }
        { page.value !== pageCount && <Button onClick={() => page.value += 1}>{">"}</Button> }
      </div>
    </div>
  );
}