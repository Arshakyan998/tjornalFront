import { baseQuery } from "./../baseQuery";
import { createApi } from "@reduxjs/toolkit/query/react";
import type { Posts as IPosts } from "./types";

const Posts = createApi({
  baseQuery,
  endpoints: (build) => ({
    getAllost: build.query<IPosts[], undefined>({
      query: () => ({
        url: "/posts",
        method: "GET",
      }),
    }),
  }),
});

export const { useGetAllostQuery } = Posts;

export default Posts;
