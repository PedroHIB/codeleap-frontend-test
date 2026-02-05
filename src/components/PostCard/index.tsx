import type { Post } from "../../types/Post";
import "./styles.css";

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
            <button onClick={() => onEdit(post)}>Edit</button>
            <button className="delete" onClick={() => onDelete(post.id)}>
              Delete
            </button>
          </div>
        )}
      </div>

      <div className="post-meta">
        @{post.username} • {new Date(post.created_datetime).toLocaleString()}
      </div>

      <p>{post.content}</p>
    </div>
  );
}
