// Cognito auth is now handled server-side in /api/generate
import type { NextPage } from "next";
import Head from "next/head";
import Script from "next/script";
import React from "react";
import { MarkdownSlide } from "../components/MarkdownSlide";
import { ExampleDiagramSlideshow } from "../components/ExampleDiagramSlideshow";
import dynamic from "next/dynamic";
import Image from "next/image";

import Link from "next/link";


import { Header } from "../components/header";
import { CookieConsent } from "../components/CookieConsent";

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
      <CookieConsent />
      <header style={{
        width: '100%',
        background: 'linear-gradient(132deg, #ffb347, #ff5858 54%, #a259ff 86%)',
        color: '#fff',
        padding: '0.65rem 0',
        textAlign: 'left',
        boxShadow: '0 2px 16px 0 rgba(162,89,255,0.10)',
        marginBottom: 0,
        borderBottom: 'none',
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        minHeight: 0,
        position: 'relative',
      }}>
        <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', gap: '1.1rem' }}>
          <Image src="/clouddiagram-logo.svg" alt="CloudDiagram.AI Logo" width={38} height={38} style={{ marginLeft: 32, borderRadius: 12, boxShadow: '0 1px 6px #2563eb22' }} priority />
          <span style={{
            fontSize: '1.35rem',
            fontWeight: 700,
            letterSpacing: '0.03em',
            fontFamily: 'Sora, Inter, Montserrat, Arial, sans-serif',
            color: '#fff',
            textShadow: '0 2px 8px #a259ff33, 0 1px 0 #fff',
            background: 'none',
            lineHeight: 1.1,
            display: 'block',
          }}>
            CloudDiagram.AI
          </span>
        </div>
        <a
          href="https://github.com/hamad-khawaja/diagram-web-ai"
          target="_blank"
          rel="noopener noreferrer"
          style={{
            color: '#fff',
            textDecoration: 'none',
            fontWeight: 600,
            fontSize: '1.08rem',
            letterSpacing: '0.04em',
            marginRight: 32,
            padding: '0.45rem 1.2rem',
            borderRadius: 8,
            background: 'rgba(37,99,235,0.12)',
            boxShadow: '0 1px 6px #2563eb22',
            transition: 'background 0.18s, color 0.18s',
            display: 'inline-block',
            position: 'relative',
            top: 0,
          }}
          onMouseOver={e => { e.currentTarget.style.background = '#fff'; e.currentTarget.style.color = '#2563eb'; }}
          onMouseOut={e => { e.currentTarget.style.background = 'rgba(37,99,235,0.12)'; e.currentTarget.style.color = '#fff'; }}
        >
          View on GitHub
        </a>
      </header>
      <Script
        data-domain="diagrams-web.vercel.app"
        src="https://plausible.io/js/plausible.js"
        strategy="lazyOnload"
      />

      <Head>
        <title>CloudDiagram.AI | AI Cloud Architecture Diagram Generator</title>
        <meta name="description" content="Generate professional cloud architecture diagrams for AWS, Azure, and GCP using AI. Visualize, edit, and share your cloud diagrams instantly. No signup required." />
        <meta name="keywords" content="cloud diagram, architecture diagram, AWS, Azure, GCP, AI, generator, SaaS, cloud architecture, infrastructure, devops, cloud design" />
        <meta property="og:title" content="CloudDiagram.AI | AI Cloud Architecture Diagram Generator" />
        <meta property="og:description" content="Generate professional cloud architecture diagrams for AWS, Azure, and GCP using AI. Visualize, edit, and share your cloud diagrams instantly." />
        <meta property="og:image" content="/clouddiagram-logo.svg" />
        <meta property="og:url" content="https://clouddiagram.ai/" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="CloudDiagram.AI | AI Cloud Architecture Diagram Generator" />
        <meta name="twitter:description" content="Generate professional cloud architecture diagrams for AWS, Azure, and GCP using AI. Visualize, edit, and share your cloud diagrams instantly." />
        <meta name="twitter:image" content="/clouddiagram-logo.svg" />
        <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
        <link rel="alternate icon" href="/favicon.ico" />
        <link rel="canonical" href="https://clouddiagram.ai/" />
        <meta name="robots" content="index, follow" />
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
      {/* Cloud provider logos bar at the top for branding */}




      {/* Instructions and Example Diagram side-by-side section */}
      <section style={{
        width: '100%',
        maxWidth: 1100,
        margin: '2.5rem auto 0 auto',
        padding: '2.2rem 1.5rem 1.5rem 1.5rem',
        background: 'linear-gradient(90deg, #f0f9ff 0%, #e0e7ff 100%)',
        borderRadius: 18,
        boxShadow: '0 4px 32px 0 rgba(37,99,235,0.07)',
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'flex-start',
        gap: '2.5rem',
        position: 'relative',
        zIndex: 2,
        flexWrap: 'wrap',
      }}>
        {/* Instructions */}
        <div style={{ flex: 1, minWidth: 320, maxWidth: 520, display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '1.2rem' }}>
          <h2 style={{
            fontSize: '1.35rem',
            fontWeight: 700,
            color: '#2563eb',
            marginBottom: '0.5rem',
            letterSpacing: '0.01em',
            fontFamily: 'Sora, Inter, Montserrat, Arial, sans-serif',
            textAlign: 'center',
          }}>
            How to generate an AI diagram
          </h2>
          <p style={{
            color: '#334155',
            fontSize: '1.08rem',
            textAlign: 'center',
            margin: 0,
            maxWidth: 540,
            opacity: 0.92,
          }}>
            Follow these simple steps to create a professional cloud architecture diagram in seconds:
          </p>
          <ol style={{
            listStyle: 'none',
            padding: 0,
            margin: '1.2rem 0 0 0',
            width: '100%',
            maxWidth: 540,
            display: 'flex',
            flexDirection: 'column',
            gap: '1.1rem',
          }}>
            <li style={{ display: 'flex', alignItems: 'flex-start', gap: '1.1rem' }}>
              <span style={{
                background: 'linear-gradient(132deg, #ffb347, #ff5858 54%, #a259ff 86%)',
                color: '#fff',
                fontWeight: 700,
                borderRadius: '50%',
                width: 36,
                height: 36,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: '1.18rem',
                boxShadow: '0 2px 8px #a259ff22',
                flexShrink: 0,
              }}>1</span>
              <span style={{ fontSize: '1.08rem', color: '#334155', fontWeight: 500 }}>
              <b>Describe your architecture</b> in plain English (e.g., &quot;A 3-tier web app with load balancer, 2 app servers, and a database&quot;).
              </span>
            </li>
            <li style={{ display: 'flex', alignItems: 'flex-start', gap: '1.1rem' }}>
              <span style={{
                background: 'linear-gradient(132deg, #ffb347, #ff5858 54%, #a259ff 86%)',
                color: '#fff',
                fontWeight: 700,
                borderRadius: '50%',
                width: 36,
                height: 36,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: '1.18rem',
                boxShadow: '0 2px 8px #a259ff22',
                flexShrink: 0,
              }}>2</span>
              <span style={{ fontSize: '1.08rem', color: '#334155', fontWeight: 500 }}>
                <b>Select your cloud provider</b> (AWS, Azure, or GCP) from the dropdown.
              </span>
            </li>
            <li style={{ display: 'flex', alignItems: 'flex-start', gap: '1.1rem' }}>
              <span style={{
                background: 'linear-gradient(132deg, #ffb347, #ff5858 54%, #a259ff 86%)',
                color: '#fff',
                fontWeight: 700,
                borderRadius: '50%',
                width: 36,
                height: 36,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: '1.18rem',
                boxShadow: '0 2px 8px #a259ff22',
                flexShrink: 0,
              }}>3</span>
              <span style={{ fontSize: '1.08rem', color: '#334155', fontWeight: 500 }}>
                <b>Click &quot;Generate&quot;</b> to let AI create your diagram and code instantly.
              </span>
            </li>
            <li style={{ display: 'flex', alignItems: 'flex-start', gap: '1.1rem' }}>
              <span style={{
                background: 'linear-gradient(132deg, #ffb347, #ff5858 54%, #a259ff 86%)',
                color: '#fff',
                fontWeight: 700,
                borderRadius: '50%',
                width: 36,
                height: 36,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: '1.18rem',
                boxShadow: '0 2px 8px #a259ff22',
                flexShrink: 0,
              }}>4</span>
              <span style={{ fontSize: '1.08rem', color: '#334155', fontWeight: 500 }}>
                <b>Download</b> your diagram in your preferred format (PNG, SVG, PDF, etc.) or copy the code for further editing.
              </span>
            </li>
            <li style={{ display: 'flex', alignItems: 'flex-start', gap: '1.1rem' }}>
              <span style={{
                background: 'linear-gradient(132deg, #ffb347, #ff5858 54%, #a259ff 86%)',
                color: '#fff',
                fontWeight: 700,
                borderRadius: '50%',
                width: 36,
                height: 36,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: '1.18rem',
                boxShadow: '0 2px 8px #a259ff22',
                flexShrink: 0,
              }}>5</span>
              <span style={{ fontSize: '1.08rem', color: '#334155', fontWeight: 500 }}>
                <b>Iterate</b>: Paste the generated code back in to refine or expand your diagram with AI.
              </span>
            </li>
          </ol>
        </div>

        {/* Example Diagram Slideshow */}
        <div style={{ flex: 1, minWidth: 320, maxWidth: 480, display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '1.2rem' }}>
          <h2 style={{
            fontSize: '1.22rem',
            fontWeight: 700,
            color: '#2563eb',
            marginBottom: '0.5rem',
            letterSpacing: '0.01em',
            fontFamily: 'Sora, Inter, Montserrat, Arial, sans-serif',
            textAlign: 'center',
          }}>
            Example Diagrams
          </h2>
          <ExampleDiagramSlideshow />
        </div>
      </section>

      {/* Cloud Diagram Step-by-Step Guide section */}
      <section style={{
        width: '100%',
        maxWidth: 900,
        margin: '2.5rem auto 0 auto',
        padding: '2.2rem 1.5rem 1.5rem 1.5rem',
        background: 'linear-gradient(90deg, #f0f9ff 0%, #e0e7ff 100%)',
        borderRadius: 18,
        boxShadow: '0 4px 32px 0 rgba(37,99,235,0.07)',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: '1.2rem',
        position: 'relative',
        zIndex: 2,
      }}>
        <h2 style={{
          fontSize: '1.25rem',
          fontWeight: 700,
          color: '#2563eb',
          marginBottom: '0.5rem',
          letterSpacing: '0.01em',
          fontFamily: 'Sora, Inter, Montserrat, Arial, sans-serif',
          textAlign: 'center',
        }}>
          Step-by-step guide on generating a cloud architecture diagram
        </h2>
        <ol style={{
          listStyle: 'decimal',
          padding: '0 0 0 1.2rem',
          margin: '0.7rem 0 0 0',
          width: '100%',
          maxWidth: 700,
          color: '#334155',
          fontSize: '1.08rem',
          display: 'flex',
          flexDirection: 'column',
          gap: '0.85rem',
        }}>
          <li>
            <b>Write a clear prompt describing your cloud architecture.</b> While a simple one-liner works, the best results come from prompts that are 3-4 sentences long. Start by listing the main resources and any logical or network groupings (like VPCs, subnets, microservices, or resource groups).
          </li>
          <li>
            <b>Describe how the components connect and interact.</b> Outline the flow of data or requests through your system (e.g., “A user uploads a file to the web application, which stores it in object storage and triggers a compute function”).
          </li>
          <li>
            <b>Generate your diagram</b> using the completed prompt.
          </li>
          <li>
            <b>Refine your diagram with follow-up prompts.</b> You can iteratively improve the diagram by providing additional instructions or edits.
          </li>
          <li>
            <b>Manually adjust the layout</b> using the diagram editor’s GUI controls for the perfect presentation (if supported).
          </li>
        </ol>
        <div style={{
          marginTop: '1.2rem',
          background: '#f8fafc',
          borderRadius: 12,
          padding: '1.1rem 1.3rem',
          color: '#2563eb',
          fontSize: '1.05rem',
          boxShadow: '0 2px 12px 0 rgba(37,99,235,0.07)',
          maxWidth: 700,
          width: '100%',
        }}>
          <b>Tips for generating cloud diagrams:</b>
          <ul style={{ margin: '0.7rem 0 0 1.1rem', color: '#334155', fontSize: '1.03rem' }}>
            <li>If you’re short on time, paste relevant excerpts from docs, transcripts, or code (like CloudFormation, Terraform, Pulumi, ARM, or Bicep) instead of writing a prompt from scratch.</li>
            <li>Collaborate with an AI assistant to help list out resources and describe the data flow for a more complete prompt.</li>
          </ul>
        </div>
      </section>

      <footer style={{
        width: '100%',
        marginTop: '2.5rem',
        padding: '0',
        background: 'linear-gradient(120deg, #0f172a 0%, #2563eb 60%, #a259ff 100%)',
        color: '#fff',
        borderRadius: 0,
        boxShadow: '0 -4px 32px 0 rgba(37,99,235,0.10)',
        position: 'relative',
        overflow: 'hidden',
        zIndex: 1,
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
        <div style={{
          maxWidth: 1200,
          margin: '0 auto',
          padding: '2.5rem 1.5rem 1.2rem 1.5rem',
          display: 'flex',
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-between',
          flexWrap: 'wrap',
          gap: '2.5rem',
          zIndex: 2,
        }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '1.1rem' }}>
            <Image src="/clouddiagram-logo.svg" alt="CloudDiagram.AI Logo" width={38} height={38} style={{ borderRadius: 10, boxShadow: '0 1px 6px #2563eb22' }} />
            <span style={{ fontWeight: 700, fontSize: '1.25rem', letterSpacing: '0.03em', color: '#fff', textShadow: '0 2px 8px #a259ff33, 0 1px 0 #fff' }}>
              CloudDiagram.AI
            </span>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start', gap: '0.5rem', minWidth: 220 }}>
            <span style={{ fontSize: '1.08rem', fontWeight: 500, opacity: 0.96 }}>
              Effortless Cloud Architecture Diagrams
            </span>
            <span style={{ fontSize: '1.01rem', opacity: 0.82, marginTop: 2 }}>
              Visualize, edit, and share cloud diagrams for AWS, Azure, GCP, and more.
            </span>
            <div style={{ marginTop: '0.7rem', display: 'flex', gap: '0.7rem', flexWrap: 'wrap' }}>
              <Link
                href="/"
                style={{
                  background: 'linear-gradient(90deg, #38bdf8 0%, #2563eb 100%)',
                  color: '#fff',
                  fontWeight: 700,
                  fontSize: '1.07rem',
                  borderRadius: 8,
                  padding: '0.55rem 1.4rem',
                  textDecoration: 'none',
                  boxShadow: '0 2px 8px #2563eb22',
                  transition: 'background 0.18s',
                  display: 'inline-block',
                }}
              >
                Start diagramming for free
              </Link>
              <Link href="/faq" style={{ color: '#fff', fontWeight: 500, fontSize: '1.07rem', opacity: 0.85, textDecoration: 'underline', borderRadius: 8, padding: '0.55rem 1.1rem', background: 'rgba(162,89,255,0.13)', boxShadow: '0 1px 4px #a259ff11', transition: 'background 0.18s', display: 'inline-block' }}>FAQ</Link>
              <Link href="/blog" style={{ color: '#fff', fontWeight: 500, fontSize: '1.07rem', opacity: 0.85, textDecoration: 'underline', borderRadius: 8, padding: '0.55rem 1.1rem', background: 'rgba(162,89,255,0.13)', boxShadow: '0 1px 4px #a259ff11', transition: 'background 0.18s', display: 'inline-block' }}>Blog</Link>
              <Link href="/privacy" style={{ color: '#fff', fontWeight: 500, fontSize: '1.07rem', opacity: 0.85, textDecoration: 'underline', borderRadius: 8, padding: '0.55rem 1.1rem', background: 'rgba(162,89,255,0.13)', boxShadow: '0 1px 4px #a259ff11', transition: 'background 0.18s', display: 'inline-block' }}>Privacy</Link>
              <Link href="/terms" style={{ color: '#fff', fontWeight: 500, fontSize: '1.07rem', opacity: 0.85, textDecoration: 'underline', borderRadius: 8, padding: '0.55rem 1.1rem', background: 'rgba(162,89,255,0.13)', boxShadow: '0 1px 4px #a259ff11', transition: 'background 0.18s', display: 'inline-block' }}>Terms</Link>
              <a href="mailto:support@clouddiagram.ai" style={{
                color: '#fff',
                fontWeight: 500,
                fontSize: '1.07rem',
                opacity: 0.85,
                textDecoration: 'underline',
                borderRadius: 8,
                padding: '0.55rem 1.1rem',
                background: 'rgba(162,89,255,0.13)',
                boxShadow: '0 1px 4px #a259ff11',
                transition: 'background 0.18s',
                display: 'inline-block',
              }}>Contact</a>
            </div>
      {/* SEO: Keyword-rich intro for homepage */}
      <section style={{ maxWidth: 900, margin: '2.5rem auto 0 auto', padding: '1.5rem', background: 'linear-gradient(90deg, #f0f9ff 0%, #e0e7ff 100%)', borderRadius: 18, boxShadow: '0 4px 32px 0 rgba(37,99,235,0.07)', textAlign: 'center' }}>
        <h1 style={{ fontSize: '2.1rem', fontWeight: 800, color: '#2563eb', marginBottom: '1.1rem', letterSpacing: '0.01em', fontFamily: 'Sora, Inter, Montserrat, Arial, sans-serif' }}>
          AI Cloud Architecture Diagram Generator for AWS, Azure, and GCP
        </h1>
        <p style={{ color: '#334155', fontSize: '1.18rem', maxWidth: 700, margin: '0 auto', opacity: 0.96 }}>
          Instantly generate, visualize, and share professional cloud architecture diagrams for AWS, Azure, and Google Cloud using AI. No signup required. Perfect for DevOps, architects, and cloud engineers who want fast, accurate, and beautiful diagrams.
        </p>
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "SoftwareApplication",
          "name": "CloudDiagram.AI",
          "url": "https://clouddiagram.ai/",
          "applicationCategory": "DeveloperApplication",
          "operatingSystem": "All",
          "description": "Generate professional cloud architecture diagrams for AWS, Azure, and GCP using AI. Visualize, edit, and share your cloud diagrams instantly.",
          "offers": {
            "@type": "Offer",
            "price": "0",
            "priceCurrency": "USD"
          },
          "publisher": {
            "@type": "Organization",
            "name": "CloudDiagram.AI"
          }
        }) }} />
      </section>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-end', gap: '0.7rem', minWidth: 180 }}>
            <a href="https://github.com/hamad-khawaja/diagram-web-ai" target="_blank" rel="noopener noreferrer" style={{
              color: '#fff',
              fontWeight: 600,
              fontSize: '1.08rem',
              letterSpacing: '0.04em',
              padding: '0.45rem 1.2rem',
              borderRadius: 8,
              background: 'rgba(37,99,235,0.12)',
              boxShadow: '0 1px 6px #2563eb22',
              transition: 'background 0.18s, color 0.18s',
              display: 'inline-block',
              position: 'relative',
              top: 0,
            }}>View on GitHub</a>
            <span style={{ fontSize: '0.98rem', opacity: 0.7, marginTop: 2 }}>
              &copy; {new Date().getFullYear()} CloudDiagram.AI
            </span>
          </div>
        </div>
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
  const [downloadUrls, setDownloadUrls] = React.useState<{ [key: string]: string }>({});
  const [diagramDataUrl, setDiagramDataUrl] = React.useState<string | null>(null);
  const [rawCodeUrl, setRawCodeUrl] = React.useState<string | null>(null);
  const [sanitizedCodeUrl, setSanitizedCodeUrl] = React.useState<string | null>(null);
  const [explanation, setExplanation] = React.useState<string | null>(null);
  const [explanationSlide, setExplanationSlide] = React.useState(0);
  const [explanationMdUrl, setExplanationMdUrl] = React.useState<string | null>(null);
  const [inputError, setInputError] = React.useState<string | null>(null);

  const handleGenerate = async () => {
    setInputError(null);
    if (!input.trim()) {
      setInputError('Please enter a description.');
      return;
    }
    if (input.trim().split(/\s+/).length < 6) {
      setInputError('Please enter at least 6 words for a meaningful diagram.');
      return;
    }
    setLoading(true);
    setResult(null);
    try {
      // Call the Next.js API route, which handles Cognito and AWS API Gateway
      const response = await fetch('/api/generate', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          description: input,
          provider,
        }),
      });
      let data;
      if (!response.ok) {
        // Log the entire response for debugging
        console.log('API error response:', response);
        try {
          const errorData = await response.json();
          console.log('API error JSON:', errorData);
          if (errorData && (errorData.error || errorData.message)) {
            setResult('Error: ' + (errorData.error || errorData.message));
            return;
          }
          throw new Error(JSON.stringify(errorData) || 'API error');
        } catch (e) {
          try {
            const errorText = await response.text();
            console.log('API error text:', errorText);
            setResult('Error: ' + errorText);
            return;
          } catch {
            setResult('Error: API error');
            return;
          }
        }
      }
      data = await response.json();
      setResult(typeof data === 'string' ? data : JSON.stringify(data, null, 2));
      // Set code in editor if available
      if (data && data.raw_code_url) {
        const url = data.raw_code_url.startsWith('http') ? data.raw_code_url : data.raw_code_url;
        const codeResp = await fetch(url);
        if (codeResp.ok) {
          const codeText = await codeResp.text();
          setEditorCode(codeText);
        }
      }
      // Set all diagram file download URLs
      if (data && data.diagram_files) {
        const urls: { [key: string]: string } = {};
        Object.entries(data.diagram_files).forEach(([type, path]) => {
          if (typeof path === 'string') {
            urls[type] = path.startsWith('http') ? path : `https://oe4b2ep0ch.execute-api.us-east-1.amazonaws.com${path}`;
          }
        });
        setDownloadUrls(urls);
        // Set PNG for preview if available
        if (urls.png) {
          setPngUrl(urls.png);
          // Fetch the PNG and convert to data URL for separate download
          try {
            const resp = await fetch(urls.png);
            const blob = await resp.blob();
            const reader = new FileReader();
            reader.onloadend = () => {
              setDiagramDataUrl(reader.result as string);
            };
            reader.readAsDataURL(blob);
          } catch {
            setDiagramDataUrl(null);
          }
        } else {
          setPngUrl(null);
        }
      } else {
        setDownloadUrls({});
        setPngUrl(null);
        setDiagramDataUrl(null);
      }
      // Set code download links
      setRawCodeUrl(data?.raw_code_url ? (data.raw_code_url.startsWith('http') ? data.raw_code_url : `https://oe4b2ep0ch.execute-api.us-east-1.amazonaws.com${data.raw_code_url}`) : null);
      setSanitizedCodeUrl(data?.sanitized_code_url ? (data.sanitized_code_url.startsWith('http') ? data.sanitized_code_url : `https://oe4b2ep0ch.execute-api.us-east-1.amazonaws.com${data.sanitized_code_url}`) : null);
      // Set explanation and markdown url
      setExplanation(data?.explanation || null);
      setExplanationSlide(0);
      setExplanationMdUrl(data?.explanation_md_url ? (data.explanation_md_url.startsWith('http') ? data.explanation_md_url : `https://oe4b2ep0ch.execute-api.us-east-1.amazonaws.com${data.explanation_md_url}`) : null);
    } catch (err: any) {
      setResult('Error: ' + (err?.message || JSON.stringify(err) || 'Unknown error'));
    } finally {
      setLoading(false);
    }
  };
  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
      {/* Tip moved below the input box */}
      <div style={{ width: '100%', maxWidth: '600px', marginBottom: '1rem' }} />
      <div style={{ width: '100%', maxWidth: '820px', marginBottom: '1.5rem' }}>
        <form
          onSubmit={e => { e.preventDefault(); handleGenerate(); }}
          style={{
            display: 'flex',
            flexDirection: 'row',
            gap: 0,
            width: '100%',
            maxWidth: 900,
            minWidth: 320,
            margin: '0 auto',
            background: 'linear-gradient(132deg, #ffb347, #ff5858 54%, #a259ff 86%)',
            borderRadius: '28px',
            boxShadow: '0 16px 56px 0 rgba(162,89,255,0.13), 0 2px 12px 0 rgba(100,116,139,0.08)',
            border: 'none',
            position: 'relative',
            overflow: 'hidden',
            padding: '2.5px',
            transition: 'box-shadow 0.4s cubic-bezier(.4,2,.6,1)',
            animation: 'fadeInForm 0.7s cubic-bezier(.4,2,.6,1)',
          }}
        >
          {/* Provider dropdown inside the input bar */}
          <div style={{
            display: 'flex',
            alignItems: 'center',
            background: 'rgba(255,255,255,0.97)',
            borderTopLeftRadius: '24px',
            borderBottomLeftRadius: '24px',
            padding: '0 0.7rem 0 1.1rem',
            borderRight: '1.5px solid #e5e7eb',
            height: 48,
            minWidth: 0,
            zIndex: 2,
          }}>
            <select
              id="provider"
              value={provider}
              onChange={e => setProvider(e.target.value)}
              style={{
                fontSize: '1.08rem',
                padding: '0.45rem 1.1rem 0.45rem 0.7rem',
                border: 'none',
                borderRadius: '12px',
                background: '#f8fafc',
                color: '#2563eb',
                fontWeight: 700,
                outline: 'none',
                minWidth: '90px',
                boxShadow: '0 1px 4px #2563eb11',
                transition: 'background 0.18s',
                marginRight: 0,
                marginLeft: 0,
                cursor: 'pointer',
              }}
            >
              <option value="aws">AWS</option>
              <option value="azure">Azure</option>
              <option value="gcp">GCP</option>
            </select>
          </div>
          <div style={{
            flex: 1,
            background: 'rgba(255,255,255,0.97)',
            borderRadius: 0,
            display: 'flex',
            alignItems: 'center',
            transition: 'box-shadow 0.3s cubic-bezier(.4,2,.6,1), background 0.2s',
            boxShadow: '0 2px 12px 0 rgba(37,99,235,0.08)',
            padding: 0,
          }}>
            <textarea
              value={input}
              onChange={e => setInput(e.target.value)}
              placeholder='e.g. "A 3-tier web app with load balancer, 2 app servers, and a database"'
              rows={1}
              style={{
                flex: 1,
                fontSize: '1.15rem',
                padding: '0.9rem 1.25rem',
                border: 'none',
                borderRadius: 0,
                boxShadow: 'none',
                fontFamily: 'inherit',
                background: 'transparent',
                color: '#1e293b',
                whiteSpace: 'nowrap',
                outline: 'none',
                resize: 'none',
                minHeight: 38,
                maxHeight: 60,
                letterSpacing: '0.01em',
                animation: 'slideInInput 0.7s cubic-bezier(.4,2,.6,1)',
                overflow: 'hidden',
              }}
              aria-invalid={!!inputError}
              onFocus={e => {
                if (e.currentTarget.parentElement) {
                  e.currentTarget.parentElement.style.background = '#f0f6ff';
                  e.currentTarget.parentElement.style.boxShadow = '0 0 0 2px #2563eb33';
                }
              }}
              onBlur={e => {
                if (e.currentTarget.parentElement) {
                  e.currentTarget.parentElement.style.background = 'rgba(255,255,255,0.97)';
                  e.currentTarget.parentElement.style.boxShadow = '0 2px 12px 0 rgba(37,99,235,0.08)';
                }
              }}
            />
          </div>
          <button
            type="submit"
            style={{
              padding: '0 2.5rem',
              background: 'linear-gradient(90deg, #2563eb 0%, #60a5fa 100%)',
              color: 'white',
              border: 'none',
              borderRadius: '0 22px 22px 0',
              fontWeight: 700,
              fontSize: '1.15rem',
              boxShadow: '0 6px 24px 0 #2563eb33',
              cursor: 'pointer',
              transition: 'background 0.2s, box-shadow 0.2s, transform 0.18s cubic-bezier(.4,2,.6,1)',
              minHeight: 38,
              display: 'flex',
              alignItems: 'center',
              outline: 'none',
              position: 'relative',
              overflow: 'hidden',
              letterSpacing: '0.04em',
              animation: 'slideInButton 0.7s cubic-bezier(.4,2,.6,1)',
            }}
            onMouseOver={e => {
              e.currentTarget.style.background = 'linear-gradient(90deg, #2563eb 0%, #38bdf8 100%)';
              e.currentTarget.style.boxShadow = '0 12px 32px 0 #2563eb44';
              e.currentTarget.style.transform = 'scale(1.045)';
            }}
            onMouseOut={e => {
              e.currentTarget.style.background = 'linear-gradient(90deg, #2563eb 0%, #60a5fa 100%)';
              e.currentTarget.style.boxShadow = '0 6px 24px 0 #2563eb33';
              e.currentTarget.style.transform = 'scale(1)';
            }}
            disabled={loading}
          >
            <span style={{
              display: 'inline-block',
              transition: 'transform 0.18s cubic-bezier(.4,2,.6,1)',
              transform: loading ? 'scale(0.95)' : 'scale(1)',
            }}>
              {loading ? 'Generating...' : 'Generate'}
            </span>
            {loading && (
              <span style={{
                marginLeft: 10,
                width: 18,
                height: 18,
                border: '2.5px solid #fff',
                borderTop: '2.5px solid #2563eb',
                borderRadius: '50%',
                display: 'inline-block',
                animation: 'spin 0.7s linear infinite',
                verticalAlign: 'middle',
              }} />
            )}
          </button>
        </form>
      {/* Tip now appears here, directly below the textarea */}
      <div
        style={{
          maxWidth: '820px',
          margin: '0.5rem auto 0.15rem auto',
          color: '#2563eb',
          fontSize: '1.09rem',
          background: 'linear-gradient(90deg, #e0e7ff 0%, #f0f9ff 100%)',
          borderRadius: '18px',
          padding: '0.85rem 1.2rem',
          textAlign: 'left',
          fontWeight: 500,
          boxShadow: '0 2px 16px 0 rgba(37,99,235,0.07)',
          display: 'flex',
          alignItems: 'center',
          gap: '0.6rem',
        }}
      >
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" style={{ flexShrink: 0 }} xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="12" fill="#2563eb" fillOpacity="0.13"/><path d="M12 7.5V13" stroke="#2563eb" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round"/><circle cx="12" cy="16" r="1" fill="#2563eb"/></svg>
        <span>
          <span style={{ fontWeight: 700, color: '#2563eb' }}>Tip:</span> Want AI to improve or change your diagram? Paste the generated code back in and generate again for iterative refinement.
        </span>
      </div>
      </div>
      {inputError && (
        <div style={{
          display: 'flex',
          justifyContent: 'flex-end',
          maxWidth: '600px',
          margin: '-1rem auto 1rem auto',
        }}>
          <span
            style={{
              background: '#fef2f2',
              color: '#b91c1c',
              border: '1px solid #fecaca',
              borderRadius: '6px',
              padding: '0.4rem 0.9rem',
              fontSize: '1rem',
              fontWeight: 500,
              zIndex: 10,
              boxShadow: '0 2px 8px rgba(185,28,28,0.08)',
              whiteSpace: 'nowrap',
            }}
            role="tooltip"
          >
            {inputError}
          </span>
        </div>
      )}
      {/* Clear button removed */}
      {/* Download links for all diagram files */}
      {Object.keys(downloadUrls).length > 0 && !loading && !result?.startsWith('Error:') && (
        <div style={{ margin: '1rem 0', display: 'flex', flexWrap: 'wrap', gap: '0.7rem' }}>
          {Object.entries(downloadUrls)
            .filter(([type]) => type.toLowerCase() !== 'dot')
            .map(([type, url]) => (
              <a
                key={type}
                href={url}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  padding: '0.65rem 1.5rem',
                  background: 'linear-gradient(90deg, #38bdf8 0%, #2563eb 100%)',
                  color: 'white',
                  border: 'none',
                  borderRadius: '6px',
                  fontWeight: 'bold',
                  fontSize: '1.05rem',
                  boxShadow: '0 2px 8px rgba(37,99,235,0.12)',
                  cursor: 'pointer',
                  textDecoration: 'none',
                  transition: 'background 0.2s',
                  display: 'inline-block',
                }}
              >
                Download {type.toUpperCase()}
              </a>
            ))}
        </div>
      )}
      {/* Show explanation as a vibrant, compact slideshow if available */}
      {explanation && !loading && !result?.startsWith('Error:') && (() => {
        // Split explanation into bullet points (handle both '-' and '*')
        const bullets = explanation
          .split(/\n|\r/)
          .map(line => line.trim())
          .filter(line => line.match(/^[-*•]/))
          .map(line => line.replace(/^[-*•]\s*/, ''));
        // If no bullets, fallback to single slide
        const slides = bullets.length > 0 ? bullets : [explanation];
        const totalSlides = slides.length;
        const current = explanationSlide >= 0 && explanationSlide < totalSlides ? explanationSlide : 0;
        return (
          <div style={{
            margin: '0.5rem 0 1.2rem 0',
            background: 'linear-gradient(90deg, #e0e7ff 0%, #f0f9ff 100%)',
            color: '#2563eb',
            borderRadius: '10px',
            padding: '0.65rem 1.1rem',
            fontSize: '0.98rem',
            fontWeight: 500,
            boxShadow: '0 2px 12px 0 rgba(162,89,255,0.07)',
            maxWidth: 420,
            minWidth: 0,
            width: '100%',
            display: 'flex',
            alignItems: 'center',
            gap: '0.7rem',
            position: 'relative',
          }}>
            <button
              onClick={() => setExplanationSlide((current - 1 + totalSlides) % totalSlides)}
              disabled={totalSlides <= 1}
              style={{
                background: 'none',
                border: 'none',
                color: '#a259ff',
                fontSize: '1.2rem',
                fontWeight: 700,
                cursor: totalSlides > 1 ? 'pointer' : 'default',
                opacity: totalSlides > 1 ? 1 : 0.3,
                padding: '0 0.3rem',
                transition: 'opacity 0.2s',
                borderRadius: 6,
              }}
              aria-label="Previous explanation slide"
            >
              ‹
            </button>
            <span style={{ flex: 1, minWidth: 0, color: '#334155', fontWeight: 500, fontSize: '0.97rem', whiteSpace: 'pre-line', overflow: 'hidden', textOverflow: 'ellipsis' }}>
              <MarkdownSlide content={slides[current]} />
            </span>
            <button
              onClick={() => setExplanationSlide((current + 1) % totalSlides)}
              disabled={totalSlides <= 1}
              style={{
                background: 'none',
                border: 'none',
                color: '#a259ff',
                fontSize: '1.2rem',
                fontWeight: 700,
                cursor: totalSlides > 1 ? 'pointer' : 'default',
                opacity: totalSlides > 1 ? 1 : 0.3,
                padding: '0 0.3rem',
                transition: 'opacity 0.2s',
                borderRadius: 6,
              }}
              aria-label="Next explanation slide"
            >
              ›
            </button>
            {totalSlides > 1 && (
              <span style={{
                position: 'absolute',
                bottom: 6,
                right: 12,
                fontSize: '0.85rem',
                color: '#64748b',
                fontWeight: 400,
                opacity: 0.7,
              }}>{current + 1}/{totalSlides}</span>
            )}
          </div>
        );
      })()}
      {loading && <div style={{ marginTop: '1rem', color: '#2563eb' }}>Generating...</div>}
      {result && result.startsWith('Error:') && (
        <pre style={{
          marginTop: '0.15rem',
          marginBottom: '0.15rem',
          background: '#f3f4f6',
          color: '#b91c1c',
          padding: '0.7rem',
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
