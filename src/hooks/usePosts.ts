import { useEffect, useState } from "react";
import type { Post } from "../types/Post";
import { getPosts } from "../services/posts.service";

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

  useEffect(() => {
    fetchPosts();
  }, []);

  return {
    posts,
    loading,
    error,
    refetch: fetchPosts,
  };
}
