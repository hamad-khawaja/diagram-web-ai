
import Head from "next/head";
import Link from "next/link";

export default function FAQ() {
  return (
    <main style={{maxWidth: 900, margin: "2rem auto", padding: "2rem", background: "#fff", borderRadius: 12, boxShadow: "0 2px 16px #2563eb11"}}>
      <Head>
        <title>FAQ | CloudDiagram.AI</title>
        <meta name="description" content="Frequently asked questions about CloudDiagram.AI, the AI-powered cloud architecture diagram generator for AWS, Azure, and GCP." />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://clouddiagram.ai/faq" />
      </Head>
      <h1 style={{fontSize: "2rem", fontWeight: 700, marginBottom: "1.2rem"}}>Frequently Asked Questions</h1>
      <h2>What is CloudDiagram.AI?</h2>
      <p>CloudDiagram.AI is an AI-powered tool that generates professional cloud architecture diagrams for AWS, Azure, and GCP from plain English descriptions.</p>
      <h2>Is it free to use?</h2>
      <p>Yes! You can generate and download diagrams for free. No signup required.</p>
      <h2>What formats can I download?</h2>
      <p>You can download diagrams as PNG or SVG images for easy sharing and documentation.</p>
      <h2>Is my data private?</h2>
      <p>Yes. We do not sell or share your data. See our <Link href="/privacy" style={{ color: '#2563eb', textDecoration: 'underline' }}>Privacy Policy</Link> for details.</p>
      <h2>Can I use this for AWS, Azure, and GCP?</h2>
      <p>Yes, CloudDiagram.AI supports all three major cloud providers.</p>
      <h2>Who is this for?</h2>
      <p>Cloud architects, DevOps engineers, students, and anyone who needs fast, accurate cloud diagrams.</p>
      <h2>How do I contact support?</h2>
      <p>Email us at <a href="mailto:support@clouddiagram.ai">support@clouddiagram.ai</a>.</p>
    </main>
  );
}
