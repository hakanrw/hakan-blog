export type ArticleType = {
  title: string;
  img: string;
  href: string;
  content: string;
}


export function getArticles(): ArticleType[] {
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

  return articles;
}