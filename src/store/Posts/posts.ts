import Posts from ".";
import type { Posts as IPosts, PostRequest } from "./types";

const endpointsForPosts = Posts.injectEndpoints({
  endpoints: (build) => ({
    createdPost: build.query<IPosts, PostRequest>({
      query: (body) => ({
        url: "/posts",
        method: "POST",
        body,
      }),
    }),
  }),
});

export const { useLazyCreatedPostQuery } = endpointsForPosts;
