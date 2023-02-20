import BookIcon from "https://deno.land/x/tabler_icons_tsx@0.0.1/tsx/book-2.tsx";
import LogButton from "../islands/LogButton.tsx";
import Button from "./Button.tsx";

type Props = {
  active: string;
  loggedIn: boolean;
};

export default function Header({ active, loggedIn }: Props) {
  const menus = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
  ];

  return (
    <div class="bg-white w-full max-w-screen-lg py-6 px-8 flex flex-col md:flex-row gap-4 mx-auto">
      <div class="flex items-center flex-1" href="/">
        <a class="flex items-center flex-1">
          <BookIcon />
          <div class="text-2xl  ml-1 font-bold">
            Hakan's Blog
          </div>
        </a>
      <div class="md:hidden"><LogButton loggedIn={loggedIn} /></div>
      </div>
      <ul class="flex items-center gap-6">
        {menus.map((menu) => (
          <li>
            <a
              href={menu.href}
              class={"text-gray-500 hover:text-gray-700 py-1 border-gray-500" +
                (menu.href === active ? " font-bold border-b-2" : "")}
            >
              {menu.name}
            </a>
          </li>
        ))}
        <li class="hidden md:block">
          <LogButton loggedIn={loggedIn} />
        </li>
      </ul>
    </div>
  );
}
