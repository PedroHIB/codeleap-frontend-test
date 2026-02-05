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
