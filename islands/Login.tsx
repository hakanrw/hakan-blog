import { useCallback, useRef, useState } from "preact/hooks";
import Button from "../components/Button.tsx";
import Input from "../components/Input.tsx";
import RoundedContainer from "../components/RoundedContainer.tsx";

export default function Login() {
  const usernameRef = useRef<HTMLInputElement>(null);
  const passwordRef = useRef<HTMLInputElement>(null);

  const [message, setMessage] = useState("");

  const logIn = useCallback(async () => {
    setMessage("");

    const username = usernameRef.current!.value;
    const password = passwordRef.current!.value;

    console.log(username, password);

    const rawResponse = await fetch('/api/login', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      redirect: 'follow',
      body: JSON.stringify({username, password})
    });

    if (rawResponse.status === 403) setMessage("invalid credentials");
    if (rawResponse.redirected) window.location.href = rawResponse.url;
  }, []);

  const onWrite = useCallback((e:KeyboardEvent) => {
    if (e.key === 'Enter') logIn();
  }, [logIn]);

  return (
    <RoundedContainer className="sm:w-[400px] text-center p-5 mx-5 sm:mx-auto">
      <h2 class="text-xl font-bold">Log In</h2>
      <Input class="block my-3 w-full sm:w-min sm:mx-auto" placeholder="username" refe={usernameRef} onKeyDown={onWrite} />
      <Input class="block my-3 w-full sm:w-min sm:mx-auto" placeholder="password" type="password" refe={passwordRef} onKeyDown={onWrite} />
      <>{ message !== "" && <div class="my-3">{message}</div> }</>
      <Button onClick={logIn}>Log In</Button>
    </RoundedContainer>
  );
}