import { useEffect, useState } from "react";
import type { Post } from "../types/Post";
import {
  getPosts,
  createPost as createPostService,
  editPost as editPostService,
  deletePost as deletePostService,
} from "../services/posts.service";

export function usePosts() {
  const [posts, setPosts] = useState<Post[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  async function fetchPosts() {
    try {
      setLoading(true);
      const data = await getPosts();

      const sorted = data.sort(
        (a, b) =>
          new Date(b.created_datetime).getTime() -
          new Date(a.created_datetime).getTime(),
      );

      setPosts(sorted);
    } catch {
      setError("Failed to load posts");
    } finally {
      setLoading(false);
    }
  }

  async function createPost(username: string, title: string, content: string) {
    try {
      setLoading(true);
      await createPostService(username, title, content);
      await fetchPosts();
    } catch {
      setError("Failed to create post");
    } finally {
      setLoading(false);
    }
  }

  async function editPost(id: number, title: string, content: string) {
    try {
      setLoading(true);
      await editPostService(id, title, content);
      await fetchPosts();
    } catch {
      setError("Failed to edit post");
    } finally {
      setLoading(false);
    }
  }

  async function deletePost(id: number) {
    try {
      setLoading(true);
      await deletePostService(id);
      await fetchPosts();
    } catch {
      setError("Failed to delete post");
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    fetchPosts();
  }, []);

  return {
    posts,
    loading,
    error,
    refetch: fetchPosts,
    createPost,
    editPost,
    deletePost,
  };
}
