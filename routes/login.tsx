import { Head } from "https://deno.land/x/fresh@1.1.3/runtime.ts";
import Button from "../components/Button.tsx";
import Footer from "../components/Footer.tsx";
import Header from "../components/Header.tsx";
import Login from "../islands/Login.tsx";
import { getArticles } from "../lib/articles.ts";

export default function LogIn() {
  return (
    <>
      <Head>
        <title>Log In | Hakan's Blog</title>
      </Head>
      <Header active="" loggedIn={false} />
      <div class="min-h-[600px] flex flex-col justify-center">
      <Login />
      </div>
      <Footer blog={[]}/>
    </>
  );
}