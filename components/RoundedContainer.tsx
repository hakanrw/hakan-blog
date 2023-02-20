import { JSX } from "preact";

type Props = {
  children?: JSX.Element | JSX.Element[] | string;
  className?: string;
};

export default function RoundedContainer({ children, className }: Props) {
  return (
    <div class={`px-2 py-1 rounded-md border(gray-500 2) ${className}`}>
      {children}
    </div>
  )
}