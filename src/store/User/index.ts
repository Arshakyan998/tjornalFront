// import { store } from "./../index";
// import { UserRequesData } from "../../types/types";
// import { baseQuery } from "./../baseQuery";
// import { createApi } from "@reduxjs/toolkit/query/react";
// import type { ErrorDataRequest, UserDataResponse } from "./types";
// import { initalizeUser, errorOnResponse } from "./UserSlicce";
// export const getUser = createApi({
//   reducerPath: "userApi",
//   baseQuery,
//   tagTypes: ["Posts"],
//   endpoints: (build) => ({
//     GetUserByData: build.mutation<any, UserRequesData>({
//       query: (body) => {
//         return {
//           url: "/auth",
//           method: "POST",
//           body,
//         };
//       },
//       // transformResponse: (res: UserDataResponse) => {
//       //   // store.dispatch(initalizeUser(res));
//       // },
//       // transformErrorResponse: (err) => {
//       //   const { data } = err;
//       //   console.log(data);

//       //   // store.dispatch(errorOnResponse(data));
//       // },
//     }),
//   }),
// });

// export const { useGetUserByDataMutation } = getUser;
// export default getUser;

export default {}