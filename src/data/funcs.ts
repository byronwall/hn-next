export async function getStoryData(storyId: any) {
  const res = await fetch("https://hn.byroni.us/api/story/" + storyId, {
    next: { revalidate: 60 },
  });

  return res.json();
}

type ListOpt = "topstories" | "day" | "week";

export async function getStoryList(opt: ListOpt) {
  const res = await fetch("https://hn.byroni.us/topstories/" + opt, {
    next: { revalidate: 60 },
  });

  const stories = await res.json();

  const goodStories = stories.filter((story: any) => story !== null);

  // await delay(50000);

  return goodStories;
}

// create a delay function in ms

function delay(ms: number) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}
