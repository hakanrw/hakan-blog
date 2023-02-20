import { JSX, Ref } from "preact";
import { IS_BROWSER } from "$fresh/runtime.ts";


type InputAttributes = JSX.HTMLAttributes<HTMLInputElement> & {refe: Ref<HTMLInputElement>};

export default function Input(props: InputAttributes) {
  return (
    <input
      {...props}
      disabled={!IS_BROWSER || props.disabled}
      ref={props.refe}
      class={`px-3 py-2 bg-white rounded border(gray-500 2) disabled:(opacity-50 cursor-not-allowed) ${
        props.class ?? ""
      }`}
    />
  );
}