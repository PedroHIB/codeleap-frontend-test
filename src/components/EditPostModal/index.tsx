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
      <h3>Edit item</h3>

      <div className="formEdit">
        <span>Title</span>
        <input
          value={title}
          placeholder="Hello world"
          onChange={(e) => setTitle(e.target.value)}
        />

        <span>Content</span>
        <textarea
          value={content}
          placeholder="Content here"
          onChange={(e) => setContent(e.target.value)}
        />

        <div className="modal-actions">
          <button className="cancel" onClick={onClose}>
            Cancel
          </button>
          <button className="save" onClick={handleSave}>
            Save
          </button>
        </div>
      </div>
    </Modal>
  );
}
