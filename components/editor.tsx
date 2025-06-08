import CodeMirror from "@uiw/react-codemirror";
import { python } from "@codemirror/lang-python";
import React, { useEffect, useState } from "react";

export const Editor = ({
  onChange,
  code,
}: {
  code: string;
  onChange?: (code: string) => void;
}) => {
  const [internalCode, setInternalCode] = useState(code);

  useEffect(() => {
    setInternalCode(code);
  }, [code]);

  return (
    <CodeMirror
      value={internalCode}
      height="calc(100vh - 58px)"
      extensions={[python()]}
      onChange={val => {
        setInternalCode(val);
        onChange?.(val);
      }}
      className="editor-container"
      theme="light"
    />
  );
};
