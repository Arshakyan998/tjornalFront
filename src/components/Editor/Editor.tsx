import React from "react";
import EditorJS from "@editorjs/editorjs";

interface Props {}

const Editor: React.FC<Props> = () => {
  React.useEffect(() => {
    const editor = new EditorJS({
      holder: "editor",
      placeholder: "Test",
      inlineToolbar: ["link", "marker", "bold", "italic"],
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
