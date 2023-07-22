import { Head } from "$fresh/runtime.ts";
import { PageProps } from "$fresh/server.ts";
import Header from "../components/Header.tsx";


export default function Home({ data }: PageProps) { 
  
  return (
    <>
      <Head>
        <title>Hakan's Blog</title>
      </Head>
      <Header active="/about" loggedIn={false} />
      <div class="mx-auto max-w-screen-lg py-6 px-8 text-lg">just hakan's blog.</div>
    </>
  );
}
