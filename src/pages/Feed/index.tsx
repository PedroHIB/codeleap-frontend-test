import { useState } from "react";

import { usePosts } from "../../hooks/usePosts";
import { useAuth } from "../../contexts/useAuth";

import { PostCard } from "../../components/PostCard";
import { EditPostModal } from "../../components/EditPostModal";

import type { Post } from "../../types/Post";

import "./styles.css";

export function Feed() {
  const { posts, loading, error, createPost, editPost, deletePost } =
    usePosts();

  const { username } = useAuth();

  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  const [editingPost, setEditingPost] = useState<Post | null>(null);

  function handleCreatePost() {
    if (!username) return;
    if (!title.trim() || !content.trim()) return;

    createPost(username, title, content);

    setTitle("");
    setContent("");
  }

  function handleEdit(post: Post) {
    setEditingPost(post);
  }

  function handleCloseModal() {
    setEditingPost(null);
  }

  function handleSaveEdit(id: number, title: string, content: string) {
    editPost(id, title, content);
  }

  if (loading) return <p>Loading...</p>;
  if (error) return <p>{error}</p>;

  return (
    <div className="container feed">
      <h2>Feed</h2>

      <div>
        <input
          placeholder="Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />

        <textarea
          placeholder="Content"
          value={content}
          onChange={(e) => setContent(e.target.value)}
        />

        <button
          onClick={handleCreatePost}
          disabled={!title.trim() || !content.trim()}
        >
          Create
        </button>
      </div>

      {posts.map((post) => (
        <PostCard
          key={post.id}
          post={post}
          isOwner={post.username === username}
          onEdit={handleEdit}
          onDelete={deletePost}
        />
      ))}

      <EditPostModal
        post={editingPost}
        isOpen={!!editingPost}
        onClose={handleCloseModal}
        onSave={handleSaveEdit}
      />
    </div>
  );
}
