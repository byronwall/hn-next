import { StoryList } from "../src/components/StoryList";

export default async function Page() {
  const stories = await (
    await fetch("https://hn.byroni.us/topstories/day")
  ).json();

  console.log(stories);

  return (
    <main>
      <StoryList stories={stories} />
    </main>
  );
}
