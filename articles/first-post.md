---
title: This is my first blog post! 🚀
publishedAt: 2023-06-01T15:00:00.000Z
snippet: It has been some while, and I managed to make my blog fully functional! I used Deno with Fresh 🍋, and it turned out great 😁.
image: /tmb/first-blog.jpg
---

It has been some while, and I managed to make my blog fully functional!
I used Deno with Fresh 🍋, and it turned out great 😁

While first creating the blog, I had used FaunaDB to make a register and login system.
I was also going to add posts through Fauna with an admin panel. However, I then
found it unnecessary and shelved it. Now, posts are stored as markown files in the `articles/` folder.
This made development a lot easier.

## The advantages of TypeScript
I used TS for this blog, and it reduced the errors i faced due to unknown types. Here is an example
of the interface my posts use 😁

```
export interface ArticleType {
  slug: string;
  title: string;
  publishedAt: Date;
  content: string;
  snippet: string;
  image: string;
}

```

## Where I got help from
When the home and about pages of the site were done, I was not very sure how to continue with
developing the post pages. Should it be staticly generated? Should it be SSR? Should it be CSR?
I knew Fresh had a good SSR system, and that it'd work nicely. To get an idea how others did it,
I searched the web. [This blog post](https://deno.com/blog/build-a-blog-with-fresh) helped me greatly!
Props to them 😃

## Closing words
This was a fun project, and I am more than happy how it turned out 😄. I hope you liked my first
blog post. Stay in turned for more posts by me! I'll be sharing about technology 💻, life 🏖️, recent news 📰 and more.
See you soon! 👋