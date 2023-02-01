import { getTimeAgo } from "../timeAgo";
import { HnKidObj } from "./model";

type CommentListProps = {
  comments: HnKidObj[];
};

export function CommentList(props: CommentListProps) {
  const { comments } = props;

  return (
    <div>
      {comments.map((comment) => (
        <div key={comment.id} className="border-l border-l-red-300 pl-3">
          <div className="flex gap-4">
            <div>{comment.by}</div>
            <div>{getTimeAgo(comment.time)}</div>
          </div>
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
      ))}
    </div>
  );
}
