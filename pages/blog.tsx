import Head from "next/head";

export default function Blog() {
  return (
    <main style={{maxWidth: 900, margin: "2rem auto", padding: "2rem", background: "#fff", borderRadius: 12, boxShadow: "0 2px 16px #2563eb11"}}>
      <Head>
        <title>Blog | CloudDiagram.AI</title>
        <meta name="description" content="CloudDiagram.AI blog: Tips, guides, and news about AI-powered cloud architecture diagramming for AWS, Azure, and GCP." />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://clouddiagram.ai/blog" />
      </Head>
      <h1 style={{fontSize: "2rem", fontWeight: 700, marginBottom: "1.2rem"}}>CloudDiagram.AI Blog</h1>
      <h2>Welcome!</h2>
      <p>Stay tuned for tips, guides, and news about cloud architecture, AI, and diagramming best practices. Coming soon!</p>
    </main>
  );
}
