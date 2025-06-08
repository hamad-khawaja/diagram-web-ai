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
    <div
      className="grid grid-cols-2"
      style={{
        margin: '0 0 1.5rem 0',
        background: 'var(--card-bg)',
        border: '1px solid var(--border-color)',
        borderRadius: 12,
        boxShadow: '0 2px 16px 0 rgba(100,116,139,0.06)',
      }}
    >
      <div
        className="overflow-y-scroll border-r"
        style={{
          padding: '1.2rem 1.1rem 1.2rem 1.5rem',
          minHeight: 'calc(100vh - 120px)',
          display: 'flex',
          flexDirection: 'column',
          height: '100%',
          background: '#ffffff',
          borderRight: '1px solid var(--border-color)',
        }}
      >
        <div style={{
          fontWeight: 700,
          fontSize: '1.08rem',
          marginBottom: '1.1rem',
          color: 'var(--text-accent)',
          letterSpacing: '0.01em',
          display: 'flex',
          alignItems: 'center',
          gap: '6px',
        }}>
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M18 3a3 3 0 0 0-3 3v12a3 3 0 0 0 3 3 3 3 0 0 0 3-3 3 3 0 0 0-3-3H6a3 3 0 0 0-3 3 3 3 0 0 0 3 3 3 3 0 0 0 3-3V6a3 3 0 0 0-3-3 3 3 0 0 0-3 3 3 3 0 0 0 3 3h12a3 3 0 0 0 3-3 3 3 0 0 0-3-3z"></path>
          </svg>
          CloudDiagram Code Editor
        </div>
        <div style={{ flex: 1, display: 'flex', flexDirection: 'column' }}>
          <Editor code={editorCode} onChange={onChange} />
        </div>
      </div>

      <div
        className="relative flex flex-col items-start justify-start h-full"
        style={{
          padding: '1.2rem 1.5rem 1.2rem 1.1rem',
          minHeight: 'calc(100vh - 120px)',
          background: '#ffffff',
        }}
      >
        <div style={{
          fontWeight: 700,
          fontSize: '1.08rem',
          marginBottom: '1.1rem',
          color: 'var(--text-accent)',
          letterSpacing: '0.01em',
          display: 'flex',
          alignItems: 'center',
          gap: '6px',
        }}>
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect>
            <line x1="9" y1="3" x2="9" y2="21"></line>
          </svg>
          <span role="img" aria-label="diagram sparkle">✨</span> Your cloud diagram preview will appear here
        </div>
        {(loading || rendering) && <Loading />}
        <div id="chart" style={{ width: '100%' }}></div>
      </div>
    </div>
  );
};
