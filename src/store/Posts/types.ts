import { OutputBlockData } from "@editorjs/editorjs";

export interface Posts {
  author: { id: string };
  body: OutputBlockData[];
  createdAt: string;
  tags: string[];
  title: string;

  updatedAt: Date;
  views: number;
  _id: string;
}

export interface PostRequest {
  title: string;
  body: OutputBlockData[];
  tags?: string[];
}
