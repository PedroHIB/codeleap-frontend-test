import { usePosts } from "../../hooks/usePosts";

export function Feed() {
  const { posts, loading, error } = usePosts();

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>{error}</p>;
  }

  return (
    <div>
      <h2>Feed</h2>

      {posts.map((post) => (
        <div key={post.id}>
          <h3>{post.title}</h3>
          <small>
            @{post.username} •{" "}
            {new Date(post.created_datetime).toLocaleString()}
          </small>
          <p>{post.content}</p>
        </div>
      ))}
    </div>
  );
}
