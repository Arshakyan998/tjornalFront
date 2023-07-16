import React from "react";
import { TextArea, MaynLayout } from "../../components";
import Editor from "../../components/Editor/Editor";
import Button from "../../components/Button/Button";

const AddPost: React.FC = () => {
  return (
    <MaynLayout>
      <TextArea placeholder="Пост" title="Коммент" />
      <Button> Опубликовать</Button>
      <Editor />
    </MaynLayout>
  );
};

export default AddPost;
