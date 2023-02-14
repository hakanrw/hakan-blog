import { Head } from "$fresh/runtime.ts";
import { Article } from "../components/Article.tsx";
import Footer from "../components/Footer.tsx";
import Header from "../components/Header.tsx";
import Counter from "../islands/Counter.tsx";

export default function Home() {
  const articles = [
    {
      title: "Humongus",
      img: "https://i.kym-cdn.com/photos/images/original/002/462/780/73c",
      href: "#",
      content: "Amog u."
    },
    {
      title: "Blog launched",
      img: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b6/Image_created_with_a_mobile_phone.png/800px-Image_created_with_a_mobile_phone.png",
      href: "#",
      content: "My first blog"
    }
  ]

  return (
    <>
      <Head>
        <title>Hakan's Blog</title>
      </Head>
      <Header active="" />
      <div class="p-4 mx-auto max-w-screen-md">
        {
          articles.map(article => <Article {...article} />)
        }
      </div>
      <Footer blog={articles}/>
    </>
  );
}
