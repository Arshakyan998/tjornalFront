import AddPost from "../pages/AddPost/AddPost";


 
export enum links {
  ADD_POST = "/addPost",
}

export const routes = [{ component: AddPost, path: links.ADD_POST }];