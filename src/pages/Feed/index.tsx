import { useState } from "react";

import { usePosts } from "../../hooks/usePosts";
import { useAuth } from "../../contexts/useAuth";

import { PostCard } from "../../components/PostCard";
import { EditPostModal } from "../../components/EditPostModal";
import { DeletePostModal } from "../../components/DeletePostModal";

import type { Post } from "../../types/Post";

import "./styles.css";

export function Feed() {
  const { posts, loading, error, createPost, editPost, deletePost } =
    usePosts();

  const { username } = useAuth();

  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  const [editingPost, setEditingPost] = useState<Post | null>(null);
  const [postToDelete, setPostToDelete] = useState<number | null>(null);

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

  function handleCloseEditModal() {
    setEditingPost(null);
  }

  function handleSaveEdit(id: number, title: string, content: string) {
    editPost(id, title, content);
    setEditingPost(null);
  }

  function handleDeleteRequest(id: number) {
    setPostToDelete(id);
  }

  function handleCancelDelete() {
    setPostToDelete(null);
  }

  function handleConfirmDelete() {
    if (!postToDelete) return;

    deletePost(postToDelete);
    setPostToDelete(null);
  }

  if (loading) return <p>Loading...</p>;
  if (error) return <p>{error}</p>;

  return (
    <div className="container feed">
      <h2>CodeLeap Network</h2>

      <div className="formContainer">
        <h3>What’s on your mind?</h3>

        <label>Title</label>
        <input
          placeholder="Hello world"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />

        <label>Content</label>
        <textarea
          placeholder="Content here"
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
          onDelete={handleDeleteRequest}
        />
      ))}

      <EditPostModal
        post={editingPost}
        isOpen={!!editingPost}
        onClose={handleCloseEditModal}
        onSave={handleSaveEdit}
      />

      <DeletePostModal
        isOpen={postToDelete !== null}
        onCancel={handleCancelDelete}
        onConfirm={handleConfirmDelete}
      />
    </div>
  );
}
