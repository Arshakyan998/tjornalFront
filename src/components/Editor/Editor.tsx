import React from "react";
import EditorJS, { OutputBlockData } from "@editorjs/editorjs";

interface Props {
  getContendBlocks: (blocks: OutputBlockData[]) => void;
}

const Editor: React.FC<Props> = ({ getContendBlocks }) => {
  React.useEffect(() => {
    const editor = new EditorJS({
      holder: "editor",
      placeholder: "Test",
      onChange: async (_, event) => {
        let content = await editor.save();
        getContendBlocks(content.blocks);
      },
    });

    editor.isReady.then(console.log);
    return () => {
      console.log("out");
      editor.isReady
        .then(() => {
          editor.destroy();
        })
        .catch(console.log);
    };
  }, []);

  return <div id="editor" />;
};

export default Editor;
