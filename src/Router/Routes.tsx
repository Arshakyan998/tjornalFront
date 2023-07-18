import AddPost from "../pages/AddPost/AddPost";
import MainPage from "../pages/Main";

export enum links {
  ADD_POST = "/addPost",
  MAIN_PAGE = "/",
}

export const routes = [
  { component: AddPost, path: links.ADD_POST },

  { component: MainPage, path: links.MAIN_PAGE, index: true },
];
