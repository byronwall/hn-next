import { Story } from "../../../src/components/Story";

export default async function StoryPage({ params: { storyId } }) {
  const storyData = await getStoryData(storyId);

  return (
    <div>
      <Story story={storyData} />
    </div>
  );
}
async function getStoryData(storyId: any) {
  const res = await fetch("https://hn.byroni.us/api/story/" + storyId);

  return res.json();
}
