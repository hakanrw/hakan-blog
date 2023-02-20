import Button from "../components/Button.tsx";
import Footer from "../components/Footer.tsx";
import Header from "../components/Header.tsx";
import Login from "../islands/Login.tsx";
import { getArticles } from "../lib/articles.ts";

export default function LogIn() {
  return (
    <>
      <Header active="" loggedIn={false} />
      <div class="min-h-[600px] flex flex-col justify-center">
      <Login />
      </div>
      <Footer blog={getArticles()}/>
    </>
  );
}