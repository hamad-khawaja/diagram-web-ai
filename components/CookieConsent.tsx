import React from "react";
import Link from "next/link";

const COOKIE_KEY = "cookie_consent";

export const CookieConsent: React.FC = () => {
  const [visible, setVisible] = React.useState(false);

  React.useEffect(() => {
    if (typeof window !== "undefined") {
      setVisible(!localStorage.getItem(COOKIE_KEY));
    }
  }, []);

  const accept = () => {
    localStorage.setItem(COOKIE_KEY, "true");
    setVisible(false);
  };

  if (!visible) return null;
  return (
    <div style={{
      position: "fixed", bottom: 18, left: 0, right: 0, zIndex: 9999,
      background: "linear-gradient(90deg, #2563eb 0%, #a259ff 100%)",
      color: "#fff", padding: "1.1rem 2rem", borderRadius: 12, maxWidth: 420, margin: "0 auto", boxShadow: "0 2px 16px #2563eb22", display: "flex", alignItems: "center", gap: 16
    }}>
      <span style={{flex: 1, fontSize: "1rem"}}>
        This site uses privacy-friendly analytics (Plausible) to improve your experience. By continuing, you accept our <Link href="/privacy" style={{color: "#fff", textDecoration: "underline"}}>Privacy Policy</Link>.
      </span>
      <button onClick={accept} style={{background: "#fff", color: "#2563eb", fontWeight: 700, border: "none", borderRadius: 8, padding: "0.5rem 1.2rem", cursor: "pointer"}}>Accept</button>
    </div>
  );
};
