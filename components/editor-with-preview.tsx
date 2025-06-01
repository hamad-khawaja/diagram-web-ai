import { Editor } from "../components/editor";
import { Loading } from "../components/loading";
import { useRender } from "../components/pyodide-viz";

// @ts-ignore
import debounce from "lodash.debounce";
import React, { useState, useMemo, useEffect } from "react";

const DEFAULT_CODE = "";

// Accept both code and pngUrl props for compatibility
interface EditorWithPreviewProps {
  code?: string;
  pngUrl?: string | null;
}

export const EditorWithPreview: React.FC<EditorWithPreviewProps> = ({ code }) => {
  const [rendering, setRendering] = useState(false);
  const [loading, setLoading] = useState(false);
  const [editorCode, setEditorCode] = useState(code ?? DEFAULT_CODE);

  // Update editorCode if code prop changes
  useEffect(() => {
    if (typeof code === 'string') setEditorCode(code);
  }, [code]);

  const { renderDiagram } = useRender({
    onLoadStart: () => {
      setLoading(true);
    },
    onLoad: async () => {
      setLoading(false);

      await renderDiagram(DEFAULT_CODE);
    },
  });


  const onChange = useMemo(() => {
    return debounce(async (newCode: string) => {
      setEditorCode(newCode);
      setRendering(true);
      await renderDiagram(newCode);
      setRendering(false);
    }, 100);
  }, [renderDiagram]);

  return (
    <div className="grid grid-cols-2">
      <div className="overflow-y-scroll border-r">
        <Editor code={editorCode} onChange={onChange} />
      </div>

      <div className="relative flex flex-col items-start justify-start h-full">
        {(loading || rendering) && <Loading />}
        <div id="chart"></div>
      </div>
    </div>
  );
};
