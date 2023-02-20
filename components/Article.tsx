import RoundedContainer from "./RoundedContainer.tsx";

interface ArticleProps {
  title: string;
  content: string;
  img?: string;
}

export function Article(props: ArticleProps) {
  return (
    <RoundedContainer className="hover:bg-gray-200 mx-auto hover:cursor-pointer mb-5">
      <div class="flex flex-col sm:flex-row">
        <div class="flex-1">
          <div class="text-2xl ml-1 font-bold my-1">
            {props.title}
          </div>
          <div class="text-lg my-2 mx-1">
            {props.content}
          </div>
        </div>
        <div class="flex-initial p-2">
          <img src={props.img} class="w-full sm:w-64 rounded-md max-h-48 object-cover" />
        </div>
      </div>
    </RoundedContainer>
  );
}
