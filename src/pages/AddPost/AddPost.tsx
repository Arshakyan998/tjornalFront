import React from "react";
import { TextArea, MaynLayout } from "../../components";
import Editor from "../../components/Editor/Editor";
import Button from "../../components/Button/Button";
import { useLazyCreatedPostQuery } from "../../store/Posts/posts";
import Input from "../../components/Input";
import { useForm } from "react-hook-form";
import { OutputBlockData } from "@editorjs/editorjs";

const AddPost: React.FC = () => {
  const [trigger, { data, isError, isFetching }] = useLazyCreatedPostQuery();

  const [blocks, setBlocks] = React.useState<OutputBlockData[]>([]);

  const {
    handleSubmit,
    formState: { errors },
    register,
  } = useForm<{ title: string }>({
    mode: "onChange",
  });

  const getDataBlocks = (blocks: OutputBlockData[]) => {
    setBlocks(blocks);
  };

  const onSubmit = (data: { title: string }) => {
    if (blocks.length) {
      trigger({
        title: data.title,
        body: blocks,
      });
    }
  };

  return (
    <MaynLayout>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Input
          placeholder="Заголовок"
          title="Коммент"
          name="title"
          register={register}
          rules={{
            minLength: {
              value: 5,
              message: "Минимум 5 символов",
            },
          }}
        />
        {errors.title && (
          <span className="text-[red]"> {errors.title.message}</span>
        )}

        <Editor getContendBlocks={getDataBlocks} />
        <Button type="submit" disabled={isFetching}>
          {" "}
          Опубликовать
        </Button>
      </form>
    </MaynLayout>
  );
};

export default AddPost;
