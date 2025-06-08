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
      className="editor-container"
      style={{
        margin: '0 0 1.5rem 0',
        background: 'linear-gradient(135deg, #f8fafc 0%, #f1f5f9 100%)',
        border: '1px solid #e2e8f0',
        borderRadius: 16,
        boxShadow: '0 8px 32px 0 rgba(100,116,139,0.12), 0 2px 8px 0 rgba(148,163,184,0.08)',
        overflow: 'hidden',
        position: 'relative',
        display: 'grid',
        gridTemplateColumns: '1fr 1fr',
        animation: 'fadeInEditor 0.6s ease-out',
      }}
    >
      {/* Enhanced Left Panel - Code Editor */}
      <div
        className="editor-panel overflow-hidden border-r"
        style={{
          display: 'flex',
          flexDirection: 'column',
          height: '100%',
          background: 'linear-gradient(180deg, #ffffff 0%, #fafbfc 100%)',
          borderRight: '1px solid #e2e8f0',
          position: 'relative',
        }}
      >
        {/* Editor Header with Toolbar */}
        <div className="editor-toolbar" style={{
          padding: '1rem 1.5rem',
          background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
          color: '#ffffff',
          borderBottom: '1px solid #e2e8f0',
          width: '100%',
          boxSizing: 'border-box',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          minHeight: '90px',
        }}>
          <div className="editor-toolbar-title" style={{
            fontWeight: 700,
            fontSize: '1rem',
            letterSpacing: '0.01em',
            display: 'flex',
            alignItems: 'center',
            gap: '8px',
          }}>
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <polyline points="16,18 22,12 16,6"></polyline>
              <polyline points="8,6 2,12 8,18"></polyline>
            </svg>
            CloudDiagram Code Editor
          </div>
          <div className="editor-toolbar-buttons" style={{ display: 'flex', gap: '8px', alignItems: 'center' }}>
            <button
              onClick={() => navigator.clipboard.writeText(editorCode)}
              style={{
                background: 'rgba(255,255,255,0.15)',
                border: '1px solid rgba(255,255,255,0.2)',
                borderRadius: '6px',
                padding: '4px 8px',
                color: 'white',
                fontSize: '0.8rem',
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                gap: '4px',
                transition: 'all 0.2s',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = 'rgba(255,255,255,0.25)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = 'rgba(255,255,255,0.15)';
              }}
            >
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect>
                <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path>
              </svg>
              Copy
            </button>
          </div>
        </div>
        
        {/* Code Editor Area */}
        <div className="editor-content" style={{
          flex: 1,
          padding: '1.2rem 1.5rem',
          minHeight: 'calc(100vh - 180px)',
          background: '#ffffff',
          position: 'relative',
        }}>
          <Editor code={editorCode} onChange={onChange} />
        </div>
        
        {/* Status Bar */}
        <div style={{
          padding: '0.6rem 1.5rem',
          background: '#f8fafc',
          borderTop: '1px solid #e2e8f0',
          fontSize: '0.8rem',
          color: '#64748b',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
        }}>
          <span>Python | Diagrams Library</span>
          <span>{editorCode.split('\n').length} lines</span>
        </div>
      </div>

      {/* Enhanced Right Panel - Preview */}
      <div
        className="relative flex flex-col items-start justify-start h-full"
        style={{
          background: 'linear-gradient(180deg, #ffffff 0%, #fafbfc 100%)',
          position: 'relative',
        }}
      >
        {/* Preview Header */}
        <div style={{
          padding: '1rem 1.5rem',
          background: 'linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)',
          color: '#ffffff',
          borderBottom: '1px solid #e2e8f0',
          width: '100%',
          boxSizing: 'border-box',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          minHeight: '90px',
        }}>
          <div style={{
            fontWeight: 700,
            fontSize: '1rem',
            letterSpacing: '0.01em',
            display: 'flex',
            alignItems: 'center',
            gap: '8px',
          }}>
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect>
              <line x1="9" y1="3" x2="9" y2="21"></line>
            </svg>
            <span role="img" aria-label="diagram sparkle">✨</span> Live Preview
          </div>
          <div style={{
            fontSize: '0.8rem',
            opacity: 0.9,
            display: 'flex',
            alignItems: 'center',
            gap: '6px',
          }}>
            {(loading || rendering) ? (
              <>
                <div style={{
                  width: '8px',
                  height: '8px',
                  background: '#fbbf24',
                  borderRadius: '50%',
                  animation: 'pulse 1.5s infinite',
                }}></div>
                Rendering...
              </>
            ) : (
              <>
                <div style={{
                  width: '8px',
                  height: '8px',
                  background: '#10b981',
                  borderRadius: '50%',
                }}></div>
                Ready
              </>
            )}
          </div>
        </div>
        
        {/* Preview Content */}
        <div className="preview-content" style={{
          flex: 1,
          padding: '1.2rem 1.5rem',
          minHeight: 'calc(100vh - 180px)',
          width: '100%',
          background: '#ffffff',
          position: 'relative',
        }}>
          {(loading || rendering) && <Loading />}
          <div id="chart" style={{ width: '100%' }}></div>
        </div>
        
        {/* Preview Status Bar */}
        <div style={{
          padding: '0.6rem 1.5rem',
          background: '#f8fafc',
          borderTop: '1px solid #e2e8f0',
          fontSize: '0.8rem',
          color: '#64748b',
          width: '100%',
          textAlign: 'center',
        }}>
          Diagram updates automatically as you type
        </div>
      </div>
    </div>
  );
};
