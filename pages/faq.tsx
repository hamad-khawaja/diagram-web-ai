import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import { CookieConsent } from "../components/CookieConsent";

export default function FAQ() {
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
          <Link href="/" style={{ textDecoration: 'none' }}>
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
              cursor: 'pointer',
            }}>
              CloudDiagram.AI
            </span>
          </Link>
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
      <main style={{maxWidth: 800, margin: "2rem auto", padding: "2.5rem 2rem 2rem 2rem", background: "#fff", borderRadius: 16, boxShadow: "0 2px 16px #2563eb11"}}>
        <Head>
          <title>FAQ | CloudDiagram.AI</title>
          <meta name="description" content="Frequently asked questions about CloudDiagram.AI, the AI-powered cloud architecture diagram generator for AWS, Azure, and GCP." />
          <meta name="robots" content="index, follow" />
          <link rel="canonical" href="https://clouddiagram.ai/faq" />
        </Head>
        <h1 style={{fontSize: "2.2rem", fontWeight: 800, marginBottom: "1.5rem", color: '#2563eb', letterSpacing: '-0.01em', fontFamily: 'Sora, Inter, Montserrat, Arial, sans-serif'}}>Frequently Asked Questions</h1>
        <div style={{fontSize: '1.13rem', color: '#334155', lineHeight: 1.7, fontFamily: 'Inter, Montserrat, Arial, sans-serif'}}>
          <h2 style={{marginTop: '2.2rem', color: '#a259ff', fontWeight: 700, fontSize: '1.18rem'}}>What is CloudDiagram AI?</h2>
          <p>CloudDiagram AI is an AI-powered tool that instantly generates professional cloud architecture diagrams for AWS, Azure, and GCP from your natural language prompts. Just describe your architecture, and get a ready-to-use diagram.</p>
          <h2 style={{marginTop: '2.2rem', color: '#a259ff', fontWeight: 700, fontSize: '1.18rem'}}>How does it work?</h2>
          <p>Simply enter a description of your cloud architecture (e.g., "A 3-tier web app with load balancer, 2 app servers, and a database") and select your cloud provider. Our AI interprets your prompt and generates a visual diagram.</p>
          <h2 style={{marginTop: '2.2rem', color: '#a259ff', fontWeight: 700, fontSize: '1.18rem'}}>Is CloudDiagram AI free?</h2>
          <p>Yes! You can generate and download diagrams for free. No signup is required for basic usage.</p>
          <h2 style={{marginTop: '2.2rem', color: '#a259ff', fontWeight: 700, fontSize: '1.18rem'}}>What formats can I download?</h2>
          <p>You can download diagrams as PNG or SVG images for easy sharing and documentation. The raw diagram code is also available for advanced users.</p>
          <h2 style={{marginTop: '2.2rem', color: '#a259ff', fontWeight: 700, fontSize: '1.18rem'}}>Is my data private?</h2>
          <p>Yes. Your prompts and generated diagrams are not shared or sold. See our <Link href="/privacy" style={{ color: '#2563eb', textDecoration: 'underline' }}>Privacy Policy</Link> for details.</p>
          <h2 style={{marginTop: '2.2rem', color: '#a259ff', fontWeight: 700, fontSize: '1.18rem'}}>Are there any usage limits?</h2>
          <p>To prevent abuse, each user (by IP address) can generate up to 3 diagrams every 12 hours. If you hit the limit, please wait before trying again.</p>
          <h2 style={{marginTop: '2.2rem', color: '#a259ff', fontWeight: 700, fontSize: '1.18rem'}}>Which cloud providers are supported?</h2>
          <p>CloudDiagram AI supports AWS, Azure, and Google Cloud Platform (GCP).</p>
          <h2 style={{marginTop: '2.2rem', color: '#a259ff', fontWeight: 700, fontSize: '1.18rem'}}>Who is this for?</h2>
          <p>Cloud architects, DevOps engineers, students, and anyone who needs fast, accurate cloud diagrams for documentation, planning, or learning.</p>
          <h2 style={{marginTop: '2.2rem', color: '#a259ff', fontWeight: 700, fontSize: '1.18rem'}}>Can I use the diagrams in my presentations or documentation?</h2>
          <p>Absolutely! All generated diagrams are yours to use in your projects, presentations, or documentation.</p>
          <h2 style={{marginTop: '2.2rem', color: '#a259ff', fontWeight: 700, fontSize: '1.18rem'}}>How accurate are the diagrams?</h2>
          <p>The AI is trained to interpret common cloud architecture patterns, but always review and adjust the output for your specific needs.</p>
          <h2 style={{marginTop: '2.2rem', color: '#a259ff', fontWeight: 700, fontSize: '1.18rem'}}>How do I contact support?</h2>
          <p>Email us at <a href="mailto:hamad.khawaja@outlook.com" style={{ color: '#2563eb', textDecoration: 'underline' }}>hamad.khawaja@outlook.com</a> or open an issue on our <a href="https://github.com/hamad-khawaja/diagram-web-ai" target="_blank" rel="noopener noreferrer" style={{ color: '#2563eb', textDecoration: 'underline' }}>GitHub</a>.</p>
        </div>
      </main>
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
              <a href="mailto:hamad.khawaja@outlook.com" style={{
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
}
