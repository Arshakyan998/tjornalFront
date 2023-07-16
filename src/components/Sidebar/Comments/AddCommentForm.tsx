import React from "react";
import Input from "../../TextArea/TextArea";
import useInsideClick from "../../../hooks/useInsideClick";
import Button from "../../Button/Button";

interface Props {}

const AddCommentForm: React.FC<Props> = () => {
  const areaElement = React.useRef<HTMLTextAreaElement>(null);
  const [elementHeight, setElementHeight] = React.useState<number>(0);
  let { init, outside } = useInsideClick();

  React.useEffect(() => {
    init(areaElement.current);
  }, [init]);

  const scrollHeight: React.FormEventHandler<HTMLTextAreaElement> = (e) => {
  
    if(e.currentTarget.value){
    setElementHeight(e.currentTarget.scrollHeight);
    }else{
      setElementHeight(0);

    }
  };

  return (
    <div>
      <Input
        placeholder="написать коммент"
        title="Добавить комментарий"
        className="border border-white-[2px] resize-none overflow-y-hidden"
        row={!outside ? 1 : undefined}
        ref={areaElement}
        style={{
          minHeight:outside?elementHeight:'unset',
        }}
        onInput={scrollHeight}
      />
      {outside && <Button>Опубликовать</Button>}
    </div>
  );
};

export default AddCommentForm;
