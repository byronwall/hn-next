"use client";

import { MouseEventHandler, useEffect, useRef } from "react";
import { useAppStoreContext } from "../store";
import { getTimeAgo } from "../timeAgo";
import { CommentList } from "./CommentList";
import { HnKidObj } from "./model";
import { useOnScreen } from "./useOnScreen";

type CommentProps = {
  comment: HnKidObj;
};

export function Comment(props: CommentProps) {
  const { comment } = props;

  const isCollapsed = useAppStoreContext(
    (s) => s.collapsedIds[comment.id] ?? false
  );

  const toggleCollapsed = useAppStoreContext((s) => s.toggleCollapsed);

  const handleCollapse: MouseEventHandler = (evt) => {
    toggleCollapsed(comment.id);

    evt.stopPropagation();
    evt.preventDefault();
  };

  const ref = useRef<HTMLDivElement>(null);

  const isVisible = useOnScreen(ref, "-100px");

  const wasEverVisible = useRef(false);

  useEffect(() => {
    if (isVisible) {
      wasEverVisible.current = true;
    }
  }, [isVisible]);

  return (
    <div
      key={comment.id}
      className="border-l border-l-red-300 pl-3 mb-2"
      onClick={handleCollapse}
      ref={ref}
    >
      <div className="flex gap-4">
        <div>{comment.by}</div>
        <div>{getTimeAgo(comment.time)}</div>
      </div>

      {!isCollapsed && wasEverVisible && (
        <div>
          <div
            dangerouslySetInnerHTML={{ __html: comment.text ?? "" }}
            className="prose leading-snug"
          />
          {comment.kidsObj && (
            <div className="p-2">
              <CommentList comments={comment.kidsObj} />
            </div>
          )}
        </div>
      )}
    </div>
  );
}
