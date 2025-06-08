import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { CookieConsent } from "../components/CookieConsent";

export default function Privacy() {
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
              fontSize: '1.1rem',
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
            fontSize: '1rem',
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
          <title>Privacy Policy | CloudDiagram.AI</title>
          <meta name="description" content="CloudDiagram.AI privacy policy. Learn how we protect your data and respect your privacy while generating cloud architecture diagrams with AI." />
          <meta name="robots" content="index, follow" />
          <link rel="canonical" href="https://clouddiagram.ai/privacy" />
        </Head>
        <h1 style={{fontSize: "2.5rem", fontWeight: 800, marginBottom: "1.5rem", color: '#2563eb', letterSpacing: '-0.01em', fontFamily: 'Sora, Inter, Montserrat, Arial, sans-serif'}}>Privacy Policy</h1>
        <div style={{fontSize: '1rem', color: '#334155', lineHeight: 1.7, fontFamily: 'Inter, Montserrat, Arial, sans-serif'}}>
          <p style={{marginBottom: '1.5rem'}}>We respect your privacy. CloudDiagram.AI does not collect personal data beyond what is necessary for analytics and service improvement. We use Plausible Analytics, which is privacy-friendly and does not use cookies or track you across sites. For questions, contact <a href="mailto:hamad.khawaja@outlook.com" style={{ color: '#2563eb', textDecoration: 'underline' }}>hamad.khawaja@outlook.com</a>.</p>
          <h2 style={{marginTop: '2.2rem', color: '#a259ff', fontWeight: 700, fontSize: '1.2rem'}}>What We Collect</h2>
          <ul style={{marginLeft: '1.2rem', marginBottom: '1.5rem'}}>
            <li>Anonymous usage analytics (via Plausible)</li>
            <li>Information you provide in prompts (used only for diagram generation)</li>
          </ul>
          <h2 style={{marginTop: '2.2rem', color: '#a259ff', fontWeight: 700, fontSize: '1.2rem'}}>Your Rights</h2>
          <ul style={{marginLeft: '1.2rem', marginBottom: '1.5rem'}}>
            <li>You may request deletion of your data at any time.</li>
            <li>We do not sell or share your data with third parties.</li>
          </ul>
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
            <span style={{ fontWeight: 700, fontSize: '1.1rem', letterSpacing: '0.03em', color: '#fff', textShadow: '0 2px 8px #a259ff33, 0 1px 0 #fff' }}>
              CloudDiagram.AI
            </span>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start', gap: '0.5rem', minWidth: 220 }}>
            <span style={{ fontSize: '1rem', fontWeight: 500, opacity: 0.96 }}>
              Effortless Cloud Architecture Diagrams
            </span>
            <span style={{ fontSize: '0.9rem', opacity: 0.82, marginTop: 2 }}>
              Visualize, edit, and share cloud diagrams for AWS, Azure, GCP, and more.
            </span>
            <div style={{ marginTop: '0.7rem', display: 'flex', gap: '0.7rem', flexWrap: 'wrap' }}>
              <Link
                href="/"
                style={{
                  background: 'linear-gradient(90deg, #38bdf8 0%, #2563eb 100%)',
                  color: '#fff',
                  fontWeight: 700,
                  fontSize: '1rem',
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
              <Link href="/faq" style={{ color: '#fff', fontWeight: 500, fontSize: '1rem', opacity: 0.85, textDecoration: 'underline', borderRadius: 8, padding: '0.55rem 1.1rem', background: 'rgba(162,89,255,0.13)', boxShadow: '0 1px 4px #a259ff11', transition: 'background 0.18s', display: 'inline-block' }}>FAQ</Link>
              <Link href="/blog" style={{ color: '#fff', fontWeight: 500, fontSize: '1rem', opacity: 0.85, textDecoration: 'underline', borderRadius: 8, padding: '0.55rem 1.1rem', background: 'rgba(162,89,255,0.13)', boxShadow: '0 1px 4px #a259ff11', transition: 'background 0.18s', display: 'inline-block' }}>Blog</Link>
              <Link href="/privacy" style={{ color: '#fff', fontWeight: 500, fontSize: '1rem', opacity: 0.85, textDecoration: 'underline', borderRadius: 8, padding: '0.55rem 1.1rem', background: 'rgba(162,89,255,0.13)', boxShadow: '0 1px 4px #a259ff11', transition: 'background 0.18s', display: 'inline-block' }}>Privacy</Link>
              <Link href="/terms" style={{ color: '#fff', fontWeight: 500, fontSize: '1rem', opacity: 0.85, textDecoration: 'underline', borderRadius: 8, padding: '0.55rem 1.1rem', background: 'rgba(162,89,255,0.13)', boxShadow: '0 1px 4px #a259ff11', transition: 'background 0.18s', display: 'inline-block' }}>Terms</Link>
              <a href="mailto:hamad.khawaja@outlook.com" style={{
                color: '#fff',
                fontWeight: 500,
                fontSize: '1rem',
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
              fontSize: '1rem',
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
            <span style={{ fontSize: '0.9rem', opacity: 0.7, marginTop: 2 }}>
              &copy; {new Date().getFullYear()} CloudDiagram.AI
            </span>
          </div>
        </div>
      </footer>
    </div>
  );
}
