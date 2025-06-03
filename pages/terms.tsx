import Head from "next/head";

export default function Terms() {
  return (
    <main style={{maxWidth: 800, margin: "2rem auto", padding: "2rem", background: "#fff", borderRadius: 12, boxShadow: "0 2px 16px #2563eb11"}}>
      <Head>
        <title>Terms of Service | CloudDiagram.AI</title>
        <meta name="description" content="CloudDiagram.AI terms of service. Understand your rights and responsibilities when using our AI-powered cloud diagram generator." />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://clouddiagram.ai/terms" />
      </Head>
      <h1 style={{fontSize: "2rem", fontWeight: 700, marginBottom: "1.2rem"}}>Terms of Service</h1>
      <p>By using CloudDiagram.AI, you agree to use the service for lawful purposes only. We provide no warranty for generated diagrams. You are responsible for verifying the accuracy and compliance of your diagrams.</p>
      <h2 style={{marginTop: "2rem"}}>Acceptable Use</h2>
      <ul>
        <li>No illegal, harmful, or abusive content.</li>
        <li>No attempts to reverse engineer or disrupt the service.</li>
      </ul>
      <h2 style={{marginTop: "2rem"}}>Limitation of Liability</h2>
      <ul>
        <li>CloudDiagram.AI is provided as-is, without warranty.</li>
        <li>We are not liable for any damages arising from use of the service.</li>
      </ul>
    </main>
  );
}
