import { StoryList } from "../../src/components/StoryList";
import { getStoryList } from "../../src/data/funcs";

export default async function Page() {
  const stories = await getStoryList("day");

  return (
    <main>
      <StoryList stories={stories} />
    </main>
  );
}
