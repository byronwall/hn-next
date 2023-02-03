import { Comment } from "./Comment";
import { HnKidObj } from "./model";

type CommentListProps = {
  comments: HnKidObj[];
};

export function CommentList(props: CommentListProps) {
  const { comments } = props;

  return (
    <div>
      {comments.map((comment) => (
        <Comment key={comment.id} comment={comment} />
      ))}
    </div>
  );
}
