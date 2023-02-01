export async function getStoryData(storyId: any) {
  const res = await fetch("https://hn.byroni.us/api/story/" + storyId);

  return res.json();
}

type ListOpt = "topstories" | "day" | "week";

export async function getStoryList(opt: ListOpt) {
  const res = await fetch("https://hn.byroni.us/topstories/" + opt);

  return await res.json();
}
