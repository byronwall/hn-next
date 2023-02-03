"use client";

import { IconChevronUp, IconMessages } from "@tabler/icons-react";
import Link from "next/link";
import { getDomainForUrl } from "../data/getDomainForUrl";
import { useAppStoreContext } from "../store";
import { getTimeAgo } from "../timeAgo";
import { HnItem } from "./model";

type StoryListProps = {
  stories: HnItem[];
};

export function StoryList(props: StoryListProps) {
  const { stories } = props;

  const readIds = useAppStoreContext((s) => s.readIds);

  return (
    <div>
      <div className="flex flex-col gap-1">
        {stories.map((story) => {
          const isRead = readIds[story.id];
          return (
            <div key={story.id} className={isRead && "opacity-20"}>
              <Link
                href={story.url ?? ""}
                className="text-red-600"
                target="_blank"
                prefetch={false}
              >
                {story.title}
              </Link>
              <div className="flex gap-4">
                <div className="flex gap-1">
                  <IconChevronUp />
                  {story.score}
                </div>
                <Link
                  href={`/story/${story.id}`}
                  className="text-red-600"
                  prefetch={false}
                >
                  <div className="flex gap-1">
                    <IconMessages />
                    {story.descendants}
                  </div>
                </Link>

                <div> {getTimeAgo(story.time)}</div>

                <div>{getDomainForUrl(story.url)}</div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
