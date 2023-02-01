import { Story } from "../../../src/components/Story";
import { getStoryData } from "../../../src/data/funcs";

export default async function StoryPage({ params: { storyId } }) {
  const storyData = await getStoryData(storyId);

  return (
    <div>
      <Story story={storyData} />
    </div>
  );
}
