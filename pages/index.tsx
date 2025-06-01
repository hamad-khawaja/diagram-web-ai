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
      <header style={{
        width: '100%',
        background: 'linear-gradient(90deg, #2563eb 0%, #60a5fa 100%)',
        color: '#fff',
        padding: '2.5rem 0 2rem 0',
        textAlign: 'center',
        boxShadow: '0 2px 24px 0 rgba(37,99,235,0.10)',
        marginBottom: 0,
        letterSpacing: '0.5px',
        borderBottom: '1px solid #e5e7eb',
      }}>
        <h1 style={{ fontSize: '2.5rem', fontWeight: 800, margin: 0, letterSpacing: '1px', textShadow: '0 2px 8px #2563eb22' }}>
          Diagram Web AI
        </h1>
        <p style={{ fontSize: '1.25rem', fontWeight: 500, margin: '1rem 0 0 0', opacity: 0.92, letterSpacing: '0.5px' }}>
          Next-Gen <span style={{ color: '#38bdf8', fontWeight: 700 }}>AI-Powered</span> Diagram Generation &nbsp;|&nbsp; <span style={{ color: '#facc15', fontWeight: 700 }}>LLM</span> + <span style={{ color: '#a3e635', fontWeight: 700 }}>Cloud</span> + <span style={{ color: '#f472b6', fontWeight: 700 }}>Automation</span>
        </p>
      </header>
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
      <section style={{ margin: '0 0 1.5rem 0', padding: '1rem', border: '1px solid #ccc' }}>
        <GenerateSection setEditorCode={setEditorCode} setPngUrl={setPngUrl} clearAll={() => {
          setEditorCode("");
          setPngUrl(null);
          // Also clear the chart area if present
          const chartDiv = document.getElementById('chart');
          if (chartDiv) {
            chartDiv.innerHTML = '';
          }
        }} />
      </section>

      <Header />

      <EditorWithPreview code={editorCode} />
      <footer style={{
        width: '100%',
        marginTop: '2rem',
        padding: '2.5rem 0 2rem 0',
        background: 'linear-gradient(90deg, #0f172a 0%, #2563eb 60%, #60a5fa 100%)',
        textAlign: 'center',
        fontSize: '1.15rem',
        color: '#fff',
        letterSpacing: '0.5px',
        borderRadius: 0,
        boxShadow: '0 -4px 32px 0 rgba(37,99,235,0.10)',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        gap: '0.75rem',
        position: 'relative',
        overflow: 'hidden',
      }}>
        <div style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          background: 'radial-gradient(circle at 80% 20%, #38bdf8 0%, transparent 60%)',
          opacity: 0.18,
          zIndex: 0,
        }} />
        <span style={{ fontWeight: 700, fontSize: '1.2rem', letterSpacing: '1px', display: 'flex', alignItems: 'center', gap: '0.5rem', zIndex: 1 }}>
          <svg width="28" height="28" fill="none" viewBox="0 0 24 24" style={{ verticalAlign: 'middle', filter: 'drop-shadow(0 2px 8px #0ea5e9)' }}>
            <path fill="#fff" d="M12 2C6.48 2 2 6.48 2 12c0 4.42 2.87 8.17 6.84 9.49.5.09.68-.22.68-.48 0-.24-.01-.87-.01-1.7-2.78.6-3.37-1.34-3.37-1.34-.45-1.15-1.1-1.46-1.1-1.46-.9-.62.07-.61.07-.61 1 .07 1.53 1.03 1.53 1.03.89 1.52 2.34 1.08 2.91.83.09-.65.35-1.08.63-1.33-2.22-.25-4.56-1.11-4.56-4.95 0-1.09.39-1.98 1.03-2.68-.1-.25-.45-1.27.1-2.65 0 0 .84-.27 2.75 1.02A9.56 9.56 0 0 1 12 6.8c.85.004 1.71.12 2.51.35 1.91-1.29 2.75-1.02 2.75-1.02.55 1.38.2 2.4.1 2.65.64.7 1.03 1.59 1.03 2.68 0 3.85-2.34 4.7-4.57 4.95.36.31.68.92.68 1.85 0 1.33-.01 2.4-.01 2.73 0 .27.18.58.69.48A10.01 10.01 0 0 0 22 12c0-5.52-4.48-10-10-10Z"/>
          </svg>
          <a
            href="https://github.com/hamad-khawaja/diagram-web-ai"
            target="_blank"
            rel="noopener noreferrer"
            style={{ color: '#fff', textDecoration: 'underline', fontWeight: 'bold', fontSize: '1.15rem', letterSpacing: '0.5px', transition: 'color 0.2s' }}
            onMouseOver={e => (e.currentTarget.style.color = '#38bdf8')}
            onMouseOut={e => (e.currentTarget.style.color = '#fff')}
          >
            View on GitHub
          </a>
        </span>
        <span style={{ fontSize: '1rem', opacity: 0.85, marginTop: '0.25rem', zIndex: 1 }}>
          &copy; {new Date().getFullYear()} <span style={{ fontWeight: 600, letterSpacing: '0.5px' }}>Hamad Khawaja</span>
        </span>
      </footer>
    </div>
  );
};


const GenerateSection: React.FC<{ setEditorCode: (code: string) => void, setPngUrl: (url: string | null) => void, clearAll: () => void }> = ({ setEditorCode, setPngUrl, clearAll }) => {
  // Note: Encourage users to feed back the code for iterative improvement
  const [input, setInput] = React.useState("");
  const [provider, setProvider] = React.useState("aws");
  const [loading, setLoading] = React.useState(false);
  const [result, setResult] = React.useState<string | null>(null);
  const [downloadUrl, setDownloadUrl] = React.useState<string | null>(null);
  const [diagramDataUrl, setDiagramDataUrl] = React.useState<string | null>(null);
  const [editableUrl, setEditableUrl] = React.useState<string | null>(null);

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
        setDownloadUrl(pngUrl);
        // Fetch the PNG and convert to data URL for separate download
        try {
          const resp = await fetch(pngUrl);
          const blob = await resp.blob();
          const reader = new FileReader();
          reader.onloadend = () => {
            setDiagramDataUrl(reader.result as string);
          };
          reader.readAsDataURL(blob);
        } catch {
          setDiagramDataUrl(null);
        }
        // Try to get editable diagram (code) as a downloadable file
        if (data.raw_code_url) {
          const codeUrl = data.raw_code_url.startsWith('http') ? data.raw_code_url : `http://localhost:5050${data.raw_code_url}`;
          setEditableUrl(codeUrl);
        } else {
          setEditableUrl(null);
        }
      } else {
        setPngUrl(null);
        setDownloadUrl(null);
        setDiagramDataUrl(null);
        setEditableUrl(null);
      }
    } catch (err: any) {
      setResult('Error: ' + (err.message || 'Unknown error'));
    } finally {
      setLoading(false);
    }
  };
  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
      <h2 style={{ fontWeight: 'bold', marginBottom: '1rem', fontSize: '2rem', color: '#2563eb', letterSpacing: '1px' }}>Generate Cloud Architecture Diagram</h2>
      <div style={{ maxWidth: '600px', marginBottom: '1rem', color: '#64748b', fontSize: '1.05rem', background: '#f1f5f9', borderRadius: '6px', padding: '0.75rem 1rem', textAlign: 'center' }}>
        <strong>Tip:</strong> Want AI to make the diagram better or change something? Feed back the code and generate again!
      </div>
      <div style={{ width: '100%', maxWidth: '600px', marginBottom: '1rem' }} />
      <textarea
        value={input}
        onChange={e => setInput(e.target.value)}
        placeholder={
          `e.g. "3-tier web app with load balancer, 2 app servers, and a database\n\n` +
          `Or: 'VPC with 2 public subnets, 2 private subnets, an EC2 instance, and an RDS instance'\n\n` +
          `Describe your cloud architecture...`
        }
        rows={4}
        style={{
          width: '100%',
          maxWidth: '600px',
          fontSize: '1.25rem',
          padding: '1rem',
          border: '1.5px solid #2563eb',
          borderRadius: '8px',
          marginBottom: '1.5rem',
          boxShadow: '0 2px 8px rgba(37,99,235,0.08)',
          fontFamily: 'inherit',
          background: '#f8fafc',
          color: '#1e293b',
          whiteSpace: 'pre-line',
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
      {downloadUrl && !loading && !result?.startsWith('Error:') && (
        <div style={{ margin: '1rem 0' }}>
          <a
            href={downloadUrl}
            target="_blank"
            rel="noopener noreferrer"
            style={{
              padding: '0.75rem 2.5rem',
              background: 'linear-gradient(90deg, #38bdf8 0%, #2563eb 100%)',
              color: 'white',
              border: 'none',
              borderRadius: '6px',
              fontWeight: 'bold',
              fontSize: '1.1rem',
              boxShadow: '0 2px 8px rgba(37,99,235,0.12)',
              cursor: 'pointer',
              textDecoration: 'none',
              transition: 'background 0.2s',
              display: 'inline-block',
            }}
          >
            Download AI Generated Diagram
          </a>
        </div>
      )}
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
