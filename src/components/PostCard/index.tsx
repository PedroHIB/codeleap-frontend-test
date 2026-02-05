import type { Post } from "../../types/Post";
import DeleteIcon from "./deleteIcon";
import EditIcon from "./editIcon";
import "./styles.css";
import { timeAgo } from "../../utils/timeAgo";

type PostCardProps = {
  post: Post;
  isOwner: boolean;
  onEdit: (post: Post) => void;
  onDelete: (id: number) => void;
};

export function PostCard({ post, isOwner, onEdit, onDelete }: PostCardProps) {
  return (
    <div className="post">
      <div className="post-header">
        <h3>{post.title}</h3>

        {isOwner && (
          <div className="post-actions">
            <button className="delete" onClick={() => onDelete(post.id)}>
              <DeleteIcon />
            </button>
            <button onClick={() => onEdit(post)}>
              <EditIcon />
            </button>
          </div>
        )}
      </div>

      <div className="post-body">
        <div className="post-meta">
          <span className="post-meta__name">@{post.username}</span>

          <span className="post-meta__time">
            {timeAgo(post.created_datetime)}
          </span>
        </div>

        <p className="post-meta__content">{post.content}</p>
      </div>
    </div>
  );
}
