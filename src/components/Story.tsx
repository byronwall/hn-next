import Link from "next/link";
import { getDomainForUrl } from "../data/getDomainForUrl";

import { getTimeAgo } from "../timeAgo";
import { CommentList } from "./CommentList";
import { HnItem } from "./model";

type StoryProps = {
  story: HnItem;
};

export function Story(props: StoryProps) {
  const { story } = props;

  const headerText = <div>{story.title}</div>;

  const headerLink = story.url ? (
    <Link href={story.url ?? ""} target="_blank" className="text-blue-400">
      {headerText}
    </Link>
  ) : (
    headerText
  );

  return (
    <div className="flex flex-col gap-4">
      <div>
        <div className="text-xl font-bold">{headerLink}</div>
        <div className="flex gap-4">
          <div>{story.by}</div>
          <div>{story.score}</div>
          <div>{getTimeAgo(story.time)}</div>
          <div>{getDomainForUrl(story.url)}</div>
        </div>
        <div
          dangerouslySetInnerHTML={{ __html: story.text }}
          className="prose leading-snug"
        />
      </div>

      <div className="p-4" />

      {story.kidsObj && <CommentList comments={story.kidsObj} />}
    </div>
  );
}
