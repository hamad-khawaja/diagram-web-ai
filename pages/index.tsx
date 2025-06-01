import type { NextPage } from "next";
import Head from "next/head";
import Script from "next/script";
import React from "react";
import dynamic from "next/dynamic";

import { Header } from "../components/header";

const EditorWithPreview = dynamic(
  // @ts-ignore
  () =>
    import("../components/editor-with-preview").then(
      (mod) => mod.EditorWithPreview
    ),
  { ssr: false }
);

const Home: NextPage = () => {
  const [editorCode, setEditorCode] = React.useState("");
  const [pngUrl, setPngUrl] = React.useState<string | null>(null);
  return (
    <div>
      <Script
        defer
        data-domain="diagrams-web.vercel.app"
        src="https://plausible.io/js/plausible.js"
      ></Script>

      <Head>
        <title>Diagrams</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* New Generate Section at the top */}
      <section style={{ margin: '2rem 0', padding: '1rem', border: '1px solid #ccc' }}>
        <GenerateSection setEditorCode={setEditorCode} setPngUrl={setPngUrl} clearAll={() => {
          setEditorCode("");
          setPngUrl(null);
        }} />
      </section>

      <Header />

      <EditorWithPreview code={editorCode} pngUrl={pngUrl} />
    </div>
  );
};


const GenerateSection: React.FC<{ setEditorCode: (code: string) => void, setPngUrl: (url: string | null) => void, clearAll: () => void }> = ({ setEditorCode, setPngUrl, clearAll }) => {
  const [input, setInput] = React.useState("");
  const [provider, setProvider] = React.useState("aws");
  const [loading, setLoading] = React.useState(false);
  const [result, setResult] = React.useState<string | null>(null);

  const handleGenerate = async () => {
    setLoading(true);
    setResult(null);
    try {
      const response = await fetch('http://localhost:5050/generate', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          description: input,
          provider,
        }),
      });
      if (!response.ok) throw new Error('API error');
      const data = await response.json();
      setResult(typeof data === 'string' ? data : JSON.stringify(data, null, 2));
      if (data && data.raw_code_url) {
        // Fetch the code from the raw_code_url and set it in the editor
        const url = data.raw_code_url.startsWith('http') ? data.raw_code_url : `http://localhost:5050${data.raw_code_url}`;
        const codeResp = await fetch(url);
        if (codeResp.ok) {
          const codeText = await codeResp.text();
          setEditorCode(codeText);
        }
      }
      if (data && data.diagram_files && data.diagram_files.png) {
        const pngUrl = data.diagram_files.png.startsWith('http') ? data.diagram_files.png : `http://localhost:5050${data.diagram_files.png}`;
        setPngUrl(pngUrl);
      } else {
        setPngUrl(null);
      }
    } catch (err: any) {
      setResult('Error: ' + (err.message || 'Unknown error'));
    } finally {
      setLoading(false);
    }
  };
  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
      <h2 style={{ fontWeight: 'bold', marginBottom: '1rem', fontSize: '2rem', color: '#2563eb', letterSpacing: '1px' }}>Generate</h2>
      <div style={{ width: '100%', maxWidth: '600px', marginBottom: '1rem' }} />
      <textarea
        value={input}
        onChange={e => setInput(e.target.value)}
        placeholder="Enter your input..."
        rows={4}
        style={{
          width: '100%',
          maxWidth: '600px',
          fontSize: '1.25rem',
          padding: '1rem',
          border: '1.5px solid #2563eb',
          borderRadius: '8px',
          marginBottom: '1.5rem',
          boxShadow: '0 2px 8px rgba(37,99,235,0.08)'
        }}
      />
      <div style={{ display: 'flex', gap: '1rem', marginBottom: '1rem', alignItems: 'center' }}>
        <label htmlFor="provider" style={{ fontWeight: 'bold', color: '#2563eb' }}>Provider:</label>
        <select
          id="provider"
          value={provider}
          onChange={e => setProvider(e.target.value)}
          style={{
            fontSize: '1.1rem',
            padding: '0.5rem 1rem',
            border: '1.5px solid #2563eb',
            borderRadius: '8px',
            background: 'white',
            color: '#1e293b',
            fontWeight: 'bold',
            outline: 'none',
            minWidth: '120px'
          }}
        >
          <option value="aws">AWS</option>
          <option value="azure">Azure</option>
          <option value="gcp">GCP</option>
        </select>
        <button
          onClick={handleGenerate}
          style={{
            padding: '0.75rem 2.5rem',
            background: 'linear-gradient(90deg, #2563eb 0%, #60a5fa 100%)',
            color: 'white',
            border: 'none',
            borderRadius: '6px',
            fontWeight: 'bold',
            fontSize: '1.1rem',
            boxShadow: '0 2px 8px rgba(37,99,235,0.12)',
            cursor: 'pointer',
            transition: 'background 0.2s'
          }}
          onMouseOver={e => (e.currentTarget.style.background = '#1d4ed8')}
          onMouseOut={e => (e.currentTarget.style.background = 'linear-gradient(90deg, #2563eb 0%, #60a5fa 100%)')}
        >
          Generate
        </button>
        <button
          onClick={() => {
            setInput("");
            setResult(null);
            clearAll();
          }}
          style={{
            padding: '0.75rem 2.5rem',
            background: '#e5e7eb',
            color: '#1e293b',
            border: 'none',
            borderRadius: '6px',
            fontWeight: 'bold',
            fontSize: '1.1rem',
            boxShadow: '0 2px 8px rgba(100,116,139,0.12)',
            cursor: 'pointer',
            transition: 'background 0.2s'
          }}
        >
          Clear
        </button>
      </div>
      {loading && <div style={{ marginTop: '1rem', color: '#2563eb' }}>Generating...</div>}
      {result && result.startsWith('Error:') && (
        <pre style={{
          marginTop: '1.5rem',
          background: '#f3f4f6',
          color: '#b91c1c',
          padding: '1rem',
          borderRadius: '8px',
          maxWidth: '600px',
          width: '100%',
          overflowX: 'auto',
          fontSize: '1rem',
        }}>{result}</pre>
      )}
    </div>
  );
};

export default Home;
