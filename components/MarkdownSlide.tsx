import React from "react";
import ReactMarkdown from "react-markdown";

export const MarkdownSlide: React.FC<{ content: string }> = ({ content }) => (
  <ReactMarkdown
    components={{
      p: ({ node, ...props }) => <span {...props} style={{ whiteSpace: 'pre-line' }} />,
      li: ({ node, ...props }) => <li {...props} style={{ marginBottom: 4 }} />,
      a: ({ node, ...props }) => <a {...props} target="_blank" rel="noopener noreferrer" />,
    }}
  >
    {content}
  </ReactMarkdown>
);
