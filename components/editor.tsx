import CodeMirror from "@uiw/react-codemirror";
import { python } from "@codemirror/lang-python";
import { EditorView } from "@codemirror/view";
import { lineNumbers, highlightActiveLineGutter, highlightSpecialChars, drawSelection, dropCursor, rectangularSelection, crosshairCursor } from "@codemirror/view";
import { Extension } from "@codemirror/state";
import { defaultHighlightStyle, syntaxHighlighting, indentOnInput, bracketMatching, foldGutter, foldKeymap } from "@codemirror/language";
import { defaultKeymap, history, historyKeymap } from "@codemirror/commands";
import { autocompletion, completionKeymap, closeBrackets, closeBracketsKeymap } from "@codemirror/autocomplete";
import React, { useEffect, useState } from "react";

const customTheme = EditorView.theme({
  "&": {
    color: "#374151",
    backgroundColor: "#ffffff",
    fontFamily: "'JetBrains Mono', 'SF Mono', Monaco, 'Cascadia Code', 'Roboto Mono', Consolas, 'Courier New', monospace",
    fontSize: "14px",
    lineHeight: "1.6",
  },
  ".cm-content": {
    padding: "16px",
    caretColor: "#3b82f6",
    minHeight: "40px",
  },
  ".cm-focused .cm-cursor": {
    borderLeftColor: "#3b82f6",
    borderLeftWidth: "2px",
  },
  ".cm-focused .cm-selectionBackground, ::selection": {
    backgroundColor: "#dbeafe",
  },
  ".cm-activeLine": {
    backgroundColor: "#f8fafc",
  },
  ".cm-activeLineGutter": {
    backgroundColor: "#f1f5f9",
    color: "#6b7280",
  },
  ".cm-gutters": {
    backgroundColor: "#f8fafc",
    color: "#9ca3af",
    border: "none",
    borderRight: "1px solid #e5e7eb",
  },
  ".cm-lineNumbers .cm-gutterElement": {
    padding: "0 8px 0 16px",
    fontSize: "13px",
    fontWeight: "500",
  },
  ".cm-foldGutter": {
    width: "16px",
  },
  "&.cm-focused .cm-matchingBracket": {
    backgroundColor: "#fef3c7",
    outline: "1px solid #f59e0b",
  },
  ".cm-searchMatch": {
    backgroundColor: "#fef3c7",
    outline: "1px solid #f59e0b",
  },
  ".cm-selectionMatch": {
    backgroundColor: "#e0f2fe",
  },
});

const extensions: Extension[] = [
  lineNumbers(),
  highlightActiveLineGutter(),
  highlightSpecialChars(),
  history(),
  foldGutter(),
  drawSelection(),
  dropCursor(),
  indentOnInput(),
  bracketMatching(),
  closeBrackets(),
  autocompletion(),
  rectangularSelection(),
  crosshairCursor(),
  syntaxHighlighting(defaultHighlightStyle, { fallback: true }),
  python(),
  customTheme,
  EditorView.lineWrapping,
];

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
    <div style={{
      border: "1px solid #e5e7eb",
      borderRadius: "8px",
      overflow: "hidden",
      background: "#ffffff",
      boxShadow: "inset 0 1px 3px 0 rgba(0, 0, 0, 0.1)",
    }}>
      <CodeMirror
        value={internalCode}
        height="calc(100vh - 240px)"
        extensions={extensions}
        onChange={val => {
          setInternalCode(val);
          onChange?.(val);
        }}
        className="editor-container"
        basicSetup={false}
      />
    </div>
  );
};
