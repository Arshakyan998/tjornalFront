import React from "react";
import Comment from "./Comment";

interface Props {}
const IMG_URL =
  "https://cdn.promodj.com/afs/ff76b55b804c8b9cbbed5a68b82609a111%3Aresize%3A440x732%3Asame%3A37cac4";
const Comments: React.FC<Props> = () => {
  const [isHideComments, setIsHideComments] = React.useState<boolean>(false);

  const hideComments = () => {
    setIsHideComments((prev) => !prev);
  };

  const commentArray = new Array(3)
    .fill(undefined)
    .map((_, i) => (
      <Comment
        avatarUrl={IMG_URL}
        comment="pupkin 777"
        userLastName="Pupkin"
        userName="Vasya"
        createdAt={new Date()}
        key={i}
      />
    ));
  return (
    <div className="max-w-[250px]  flex flex-col"  >
      <div onClick={hideComments} className="text-left cursor-pointer"style={{
      transform:isHideComments ? 'rotate(-90deg) translateX(-50px)':'none',
      transformOrigin: 'right'
     }}  >
        <h1 >  Коментарри  {">"} </h1>
      </div>
      {!isHideComments && commentArray}
    </div>
  );
};

export default Comments;
