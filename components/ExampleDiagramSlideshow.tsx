import React from "react";
import Image from "next/image";

const EXAMPLES = [
  {
    src: "/gcp.png",
    alt: "GCP Simple Web App Example Diagram",
    title: "GCP Simple Web App",
    description: "A load-balanced web tier on Compute Engine connects to Cloud SQL and Cloud Storage."
  },
  {
    src: "/aws.png",
    alt: "AWS 3-Tier Web App Example Diagram",
    title: "AWS 3-Tier Web App",
    description: "A classic 3-tier architecture with an Application Load Balancer, EC2 web/app servers in private subnets, and an RDS database."
  }
];

export const ExampleDiagramSlideshow: React.FC = () => {
  const [index, setIndex] = React.useState(0);
  const total = EXAMPLES.length;
  const current = EXAMPLES[index];

  return (
    <div style={{
      background: '#fff',
      borderRadius: 16,
      boxShadow: '0 2px 16px 0 rgba(162,89,255,0.07)',
      padding: '1.2rem',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      maxWidth: 480,
      width: '100%',
      position: 'relative',
      minHeight: 420,
    }}>
      <button
        onClick={() => setIndex((index - 1 + total) % total)}
        disabled={total <= 1}
        style={{
          position: 'absolute', left: 8, top: '50%', transform: 'translateY(-50%)',
          background: 'none', border: 'none', color: '#a259ff', fontSize: 28, fontWeight: 700,
          cursor: total > 1 ? 'pointer' : 'default', opacity: total > 1 ? 1 : 0.3, borderRadius: 6, zIndex: 2
        }}
        aria-label="Previous example"
      >‹</button>
      <Image
        src={current.src}
        alt={current.alt}
        width={340}
        height={340}
        priority
        style={{
          width: '100%',
          maxWidth: 340,
          height: 'auto',
          borderRadius: 12,
          boxShadow: '0 2px 12px #2563eb11',
          marginBottom: '1.1rem',
          background: '#f8fafc',
          aspectRatio: '1 / 1',
        }}
      />
      <div style={{ color: '#334155', fontSize: '1rem', fontWeight: 500, textAlign: 'center', marginBottom: '0.2rem' }}>
        <b>{current.title}</b>
      </div>
      <div style={{ color: '#64748b', fontSize: '0.9rem', textAlign: 'center', opacity: 0.92 }}>
        {current.description}
      </div>
      <button
        onClick={() => setIndex((index + 1) % total)}
        disabled={total <= 1}
        style={{
          position: 'absolute', right: 8, top: '50%', transform: 'translateY(-50%)',
          background: 'none', border: 'none', color: '#a259ff', fontSize: 28, fontWeight: 700,
          cursor: total > 1 ? 'pointer' : 'default', opacity: total > 1 ? 1 : 0.3, borderRadius: 6, zIndex: 2
        }}
        aria-label="Next example"
      >›</button>
      {total > 1 && (
        <span style={{ position: 'absolute', bottom: 10, right: 18, fontSize: '0.9rem', color: '#64748b', fontWeight: 400, opacity: 0.7 }}>{index + 1}/{total}</span>
      )}
    </div>
  );
};
