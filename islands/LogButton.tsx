import Button from "../components/Button.tsx";

export default function LogButton({loggedIn} : {loggedIn: boolean}) {
  return (
    <>
      {loggedIn === false
        ? <a href="/login"><Button class="p-1">Log In</Button></a>
        : <a href="/api/logout"><Button class="p-1">Log Out</Button></a>
      }
    </>
  );
}