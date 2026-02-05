import { useState } from "react";
import type { Post } from "../../types/Post";
import { Modal } from "../Modal";

type EditPostModalProps = {
  post: Post | null;
  isOpen: boolean;
  onClose: () => void;
  onSave: (id: number, title: string, content: string) => void;
};

export function EditPostModal({
  post,
  isOpen,
  onClose,
  onSave,
}: EditPostModalProps) {
  const [title, setTitle] = useState(post?.title ?? "");
  const [content, setContent] = useState(post?.content ?? "");

  if (!isOpen || !post) return null;

  function handleSave() {
    if (!post) return;

    onSave(post.id, title, content);
    onClose();
  }

  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <h3>Edit post</h3>

      <input value={title} onChange={(e) => setTitle(e.target.value)} />

      <textarea value={content} onChange={(e) => setContent(e.target.value)} />

      <div className="modal-actions">
        <button onClick={onClose}>Cancel</button>
        <button
          onClick={handleSave}
          style={{ background: "var(--primary)", color: "#fff" }}
        >
          Save
        </button>
      </div>
    </Modal>
  );
}
