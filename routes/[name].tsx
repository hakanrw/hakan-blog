import { Head } from "$fresh/runtime.ts";
import Header from "../components/Header.tsx";
import { PageProps } from "$fresh/server.ts";

export default function Greet(props: PageProps) {
  return (
    <>
      <Head>
        <title>Article</title>
      </Head>
      <Header active="" loggedIn={false} />
      <div>
        Example {props.params.name}
      </div>
    </>
  );
}
