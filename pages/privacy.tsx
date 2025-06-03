import Head from "next/head";

export default function Privacy() {
  return (
    <main style={{maxWidth: 800, margin: "2rem auto", padding: "2rem", background: "#fff", borderRadius: 12, boxShadow: "0 2px 16px #2563eb11"}}>
      <Head>
        <title>Privacy Policy | CloudDiagram.AI</title>
        <meta name="description" content="CloudDiagram.AI privacy policy. Learn how we protect your data and respect your privacy while generating cloud architecture diagrams with AI." />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://clouddiagram.ai/privacy" />
      </Head>
      <h1 style={{fontSize: "2rem", fontWeight: 700, marginBottom: "1.2rem"}}>Privacy Policy</h1>
      <p>We respect your privacy. CloudDiagram.AI does not collect personal data beyond what is necessary for analytics and service improvement. We use Plausible Analytics, which is privacy-friendly and does not use cookies or track you across sites. For questions, contact <a href="mailto:support@clouddiagram.ai">support@clouddiagram.ai</a>.</p>
      <h2 style={{marginTop: "2rem"}}>What We Collect</h2>
      <ul>
        <li>Anonymous usage analytics (via Plausible)</li>
        <li>Information you provide in prompts (used only for diagram generation)</li>
      </ul>
      <h2 style={{marginTop: "2rem"}}>Your Rights</h2>
      <ul>
        <li>You may request deletion of your data at any time.</li>
        <li>We do not sell or share your data with third parties.</li>
      </ul>
    </main>
  );
}
