import axios from "axios";
import type { Post } from "../types/Post";

type GetPostsResponse = {
  results: Post[];
};

const api = axios.create({
  baseURL: "https://dev.codeleap.co.uk/careers/",
});

export async function getPosts(): Promise<Post[]> {
  const response = await api.get<GetPostsResponse>("/");
  return response.data.results;
}

export async function editPost(id: number, title: string, content: string) {
  await api.patch(`/${id}/`, { title, content });
}

export async function deletePost(id: number) {
  await api.delete(`/${id}/`);
}

export async function createPost(
  username: string,
  title: string,
  content: string,
) {
  await api.post("/", {
    username,
    title,
    content,
  });
}
