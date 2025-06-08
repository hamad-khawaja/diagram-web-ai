import Head from "next/head";
import Link from "next/link";
import { ThemeToggle } from "../components/ThemeToggle";
import Image from "next/image";
import { useState, useEffect } from "react";

export default function Blog() {
  const [hoveredLink, setHoveredLink] = useState<string | null>(null);
  const [showSidebar, setShowSidebar] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setShowSidebar(window.innerWidth > 1200);
    };

    // Set initial state
    handleResize();

    // Add event listener
    window.addEventListener('resize', handleResize);

    // Cleanup
    return () => window.removeEventListener('resize', handleResize);
  }, []);
  return (
    <div>
      <Head>
        <title>On Building CloudDiagram.AI with AI | Blog</title>
        <meta name="description" content="The journey of building CloudDiagram.AI: strategic decisions, technical challenges, and lessons learned in creating an AI-powered cloud architecture diagramming tool." />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://clouddiagram.ai/blog" />
        <style dangerouslySetInnerHTML={{
          __html: `
            html {
              scroll-behavior: smooth;
            }
          `
        }} />
      </Head>
      
      {/* Header */}
      <header style={{
        width: '100%',
        background: 'var(--header-bg)',
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
          <Link href="/" style={{ display: 'flex', alignItems: 'center', gap: '1.1rem', textDecoration: 'none' }}>
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
          </Link>
        </div>
        <div style={{ display: 'flex', alignItems: 'center', marginRight: 32 }}>
          <ThemeToggle />
        </div>
      </header>
      
      {/* Article Header */}
      <div style={{ 
        textAlign: 'center', 
        padding: '80px 20px 60px', 
        background: 'var(--background-alt)',
        borderBottom: '1px solid var(--border-color)'
      }}>
        <div style={{ maxWidth: '800px', margin: '0 auto' }}>
          <span style={{ 
            fontSize: '0.9rem', 
            fontWeight: 600, 
            textTransform: 'uppercase', 
            letterSpacing: '1px',
            color: 'var(--text-accent)',
            marginBottom: '20px',
            display: 'block'
          }}>
            CloudDiagram.AI Journey
          </span>
          <h1 style={{ 
            fontSize: '3rem', 
            fontWeight: 800, 
            marginBottom: '2rem',
            lineHeight: 1.2,
            background: 'linear-gradient(132deg, #ffb347, #ff5858 54%, #a259ff 86%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            display: 'inline-block'
          }}>
            On Building CloudDiagram.AI with AI
          </h1>
          <p style={{ 
            fontSize: '1.3rem', 
            color: 'var(--text-secondary)', 
            lineHeight: 1.6,
            marginBottom: '30px'
          }}>
            Strategic decisions, technical challenges, and lessons learned in creating an AI-powered cloud architecture diagramming tool
          </p>
          <div style={{ 
            display: 'flex', 
            alignItems: 'center', 
            justifyContent: 'center',
            gap: '20px',
            fontSize: '0.95rem',
            color: 'var(--text-secondary)'
          }}>
            <span>June 8, 2025</span>
            <span>•</span>
            <span>12 min read</span>
          </div>
        </div>
      </div>
      
      {/* Table of Contents Sidebar */}
      {showSidebar && (
        <div className="sidebar-toc" style={{
          position: 'fixed',
          top: '50%',
          right: '20px',
          transform: 'translateY(-50%)',
          background: 'var(--card-bg)',
          border: '1px solid var(--border-color)',
          borderRadius: '12px',
          padding: '20px',
          maxWidth: '200px',
          boxShadow: '0 4px 20px rgba(0, 0, 0, 0.1)',
          zIndex: 1000
        }}>
        <h3 style={{
          fontSize: '0.9rem',
          fontWeight: 600,
          marginBottom: '15px',
          color: 'var(--text-primary)',
          textTransform: 'uppercase',
          letterSpacing: '0.5px'
        }}>
          Contents
        </h3>
        <nav>
          <ul style={{
            listStyle: 'none',
            padding: 0,
            margin: 0
          }}>
            <li style={{ marginBottom: '8px' }}>
              <a href="#introduction" style={{
                fontSize: '0.85rem',
                color: hoveredLink === 'introduction' ? 'var(--text-accent)' : 'var(--text-secondary)',
                textDecoration: 'none',
                display: 'block',
                padding: '4px 0',
                borderLeft: `2px solid ${hoveredLink === 'introduction' ? 'var(--text-accent)' : 'transparent'}`,
                paddingLeft: '8px',
                transition: 'all 0.2s ease'
              }}
              onMouseEnter={() => setHoveredLink('introduction')}
              onMouseLeave={() => setHoveredLink(null)}>
                Introduction
              </a>
            </li>
            <li style={{ marginBottom: '8px' }}>
              <a href="#ai-strategy" style={{
                fontSize: '0.85rem',
                color: hoveredLink === 'ai-strategy' ? 'var(--text-accent)' : 'var(--text-secondary)',
                textDecoration: 'none',
                display: 'block',
                padding: '4px 0',
                borderLeft: `2px solid ${hoveredLink === 'ai-strategy' ? 'var(--text-accent)' : 'transparent'}`,
                paddingLeft: '8px',
                transition: 'all 0.2s ease'
              }}
              onMouseEnter={() => setHoveredLink('ai-strategy')}
              onMouseLeave={() => setHoveredLink(null)}>
                AI Strategy: What to Build
              </a>
            </li>
            <li style={{ marginBottom: '8px' }}>
              <a href="#how-we-ship" style={{
                fontSize: '0.85rem',
                color: hoveredLink === 'how-we-ship' ? 'var(--text-accent)' : 'var(--text-secondary)',
                textDecoration: 'none',
                display: 'block',
                padding: '4px 0',
                borderLeft: `2px solid ${hoveredLink === 'how-we-ship' ? 'var(--text-accent)' : 'transparent'}`,
                paddingLeft: '8px',
                transition: 'all 0.2s ease'
              }}
              onMouseEnter={() => setHoveredLink('how-we-ship')}
              onMouseLeave={() => setHoveredLink(null)}>
                How We Ship
              </a>
            </li>
            <li style={{ marginBottom: '8px' }}>
              <a href="#how-it-works" style={{
                fontSize: '0.85rem',
                color: hoveredLink === 'how-it-works' ? 'var(--text-accent)' : 'var(--text-secondary)',
                textDecoration: 'none',
                display: 'block',
                padding: '4px 0',
                borderLeft: `2px solid ${hoveredLink === 'how-it-works' ? 'var(--text-accent)' : 'transparent'}`,
                paddingLeft: '8px',
                transition: 'all 0.2s ease'
              }}
              onMouseEnter={() => setHoveredLink('how-it-works')}
              onMouseLeave={() => setHoveredLink(null)}>
                How It Works
              </a>
            </li>
            <li style={{ marginBottom: '8px' }}>
              <a href="#lessons-learned" style={{
                fontSize: '0.85rem',
                color: hoveredLink === 'lessons-learned' ? 'var(--text-accent)' : 'var(--text-secondary)',
                textDecoration: 'none',
                display: 'block',
                padding: '4px 0',
                borderLeft: `2px solid ${hoveredLink === 'lessons-learned' ? 'var(--text-accent)' : 'transparent'}`,
                paddingLeft: '8px',
                transition: 'all 0.2s ease'
              }}
              onMouseEnter={() => setHoveredLink('lessons-learned')}
              onMouseLeave={() => setHoveredLink(null)}>
                Key Lessons Learned
              </a>
            </li>
            <li style={{ marginBottom: '8px' }}>
              <a href="#tldr" style={{
                fontSize: '0.85rem',
                color: hoveredLink === 'tldr' ? 'var(--text-accent)' : 'var(--text-secondary)',
                textDecoration: 'none',
                display: 'block',
                padding: '4px 0',
                borderLeft: `2px solid ${hoveredLink === 'tldr' ? 'var(--text-accent)' : 'transparent'}`,
                paddingLeft: '8px',
                transition: 'all 0.2s ease'
              }}
              onMouseEnter={() => setHoveredLink('tldr')}
              onMouseLeave={() => setHoveredLink(null)}>
                TL;DR
              </a>
            </li>
          </ul>
        </nav>
      </div>
      )}
      
      {/* Article Content */}
      <article style={{ maxWidth: '800px', margin: '0 auto', padding: '60px 20px' }}>
        
        {/* Introduction */}
        <section id="introduction" style={{ marginBottom: '60px' }}>
          <h2 style={{ 
            fontSize: '2.2rem', 
            fontWeight: 700, 
            marginBottom: '30px',
            color: 'var(--text-primary)',
            lineHeight: 1.3
          }}>
            Introduction
          </h2>
          
          <div style={{ 
            background: 'var(--background-accent)', 
            padding: '30px', 
            borderRadius: '12px',
            marginBottom: '40px',
            borderLeft: '4px solid var(--text-accent)'
          }}>
            <h3 style={{ 
              fontSize: '1.3rem', 
              fontWeight: 600, 
              marginBottom: '20px',
              color: 'var(--text-primary)'
            }}>
              Who we are
            </h3>
            <p style={{ 
              fontSize: '1.1rem', 
              lineHeight: 1.7, 
              color: 'var(--text-secondary)',
              marginBottom: '20px'
            }}>
              <strong>CloudDiagram.AI</strong> is an AI-powered cloud architecture diagramming tool for engineering teams. Our conviction: most developers and architects want to create clear, professional cloud infrastructure diagrams, but don't because:
            </p>
            <ul style={{ 
              fontSize: '1.1rem', 
              lineHeight: 1.7, 
              color: 'var(--text-secondary)',
              paddingLeft: '20px'
            }}>
              <li style={{ marginBottom: '10px' }}>Switching from coding to diagramming feels like going from flow and productivity to anxiously staring at a blank canvas with unfamiliar tools.</li>
              <li style={{ marginBottom: '10px' }}>Traditional diagramming tools require extensive manual work and design skills that many engineers don't have or want to develop.</li>
              <li style={{ marginBottom: '10px' }}>Even when we do create diagrams, they often become outdated quickly and don't reflect the actual infrastructure.</li>
              <li style={{ marginBottom: '10px' }}>The disconnect between infrastructure-as-code and visual documentation creates a maintenance burden that teams avoid.</li>
            </ul>
            <p style={{ 
              fontSize: '1.1rem', 
              lineHeight: 1.7, 
              color: 'var(--text-secondary)',
              marginTop: '20px'
            }}>
              We've made significant progress solving these problems by bringing AI to the diagramming process, and in due time, we aim to solve them all.
            </p>
          </div>

          <p style={{ 
            fontSize: '1.2rem', 
            lineHeight: 1.8, 
            color: 'var(--text-secondary)',
            marginBottom: '30px'
          }}>
            In just a few short years, AI has revolutionized the world of software development. Every new model features improved intelligence, better performance, and seemingly magical capabilities. For app builders, it has evoked a mix of "kid in a candy shop" excitement and "keeping up with the Joneses" anxiety.
          </p>

          <p style={{ 
            fontSize: '1.2rem', 
            lineHeight: 1.8, 
            color: 'var(--text-secondary)',
            marginBottom: '30px'
          }}>
            At CloudDiagram.AI, we started our AI journey by addressing a fundamental problem: the tedious, time-consuming process of creating cloud architecture diagrams. Today, we'll explore the decisions we made along the way, addressing some in a strategic manner, and others more tactically:
          </p>

          <ul style={{ 
            fontSize: '1.2rem', 
            lineHeight: 1.8, 
            color: 'var(--text-secondary)',
            paddingLeft: '30px',
            marginBottom: '30px'
          }}>
            <li style={{ marginBottom: '15px' }}>How we decided what to build (and, equally, what not to)</li>
            <li style={{ marginBottom: '15px' }}>The technical architecture behind AI-powered diagram generation</li>
            <li style={{ marginBottom: '15px' }}>How we approach quality and handle AI unpredictability</li>
            <li style={{ marginBottom: '15px' }}>Lessons learned from shipping an AI-first product</li>
          </ul>
        </section>

        {/* AI Strategy Section */}
        <section id="ai-strategy" style={{ marginBottom: '60px' }}>
          <h2 style={{ 
            fontSize: '2.2rem', 
            fontWeight: 700, 
            marginBottom: '30px',
            color: 'var(--text-primary)',
            lineHeight: 1.3
          }}>
            AI Strategy: What to Build
          </h2>

          <div style={{ 
            textAlign: 'center', 
            margin: '40px 0',
            padding: '40px',
            background: 'var(--background-accent)',
            borderRadius: '12px'
          }}>
            <div style={{ 
              fontSize: '4rem', 
              marginBottom: '20px' 
            }}>
              💭→🤖→📊
            </div>
            <p style={{ 
              fontSize: '1rem', 
              color: 'var(--text-secondary)',
              fontStyle: 'italic'
            }}>
              Natural Language Input → AI Processing → Professional Diagram Output
            </p>
          </div>

          <p style={{ 
            fontSize: '1.2rem', 
            lineHeight: 1.8, 
            color: 'var(--text-secondary)',
            marginBottom: '30px'
          }}>
            To answer the question of what to build, let&rsquo;s start with a simple model of AI features. We can focus on three key areas:
          </p>

          <div style={{ marginBottom: '40px' }}>
            <h3 style={{ 
              fontSize: '1.5rem', 
              fontWeight: 600, 
              marginBottom: '20px',
              color: 'var(--text-primary)'
            }}>
              Three Pillars of AI Features
            </h3>
            
            <div style={{ 
              display: 'grid', 
              gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', 
              gap: '20px',
              marginBottom: '30px'
            }}>
              <div style={{ 
                padding: '25px', 
                background: 'var(--card-bg)', 
                borderRadius: '12px',
                border: '1px solid var(--border-color)'
              }}>
                <h4 style={{ 
                  fontSize: '1.2rem', 
                  fontWeight: 600, 
                  marginBottom: '15px',
                  color: 'var(--text-accent)'
                }}>
                  📥 Inputs
                </h4>
                <p style={{ 
                  fontSize: '1rem', 
                  lineHeight: 1.6, 
                  color: 'var(--text-secondary)'
                }}>
                  Using natural language, infrastructure code, or existing configurations to create inputs that would be impractical to wrangle manually.
                </p>
              </div>
              
              <div style={{ 
                padding: '25px', 
                background: 'var(--card-bg)', 
                borderRadius: '12px',
                border: '1px solid var(--border-color)'
              }}>
                <h4 style={{ 
                  fontSize: '1.2rem', 
                  fontWeight: 600, 
                  marginBottom: '15px',
                  color: 'var(--text-accent)'
                }}>
                  🧠 Model Interaction
                </h4>
                <p style={{ 
                  fontSize: '1rem', 
                  lineHeight: 1.6, 
                  color: 'var(--text-secondary)'
                }}>
                  Leveraging domain expertise and prompt engineering to optimize AI understanding of cloud architecture concepts.
                </p>
              </div>
              
              <div style={{ 
                padding: '25px', 
                background: 'var(--card-bg)', 
                borderRadius: '12px',
                border: '1px solid var(--border-color)'
              }}>
                <h4 style={{ 
                  fontSize: '1.2rem', 
                  fontWeight: 600, 
                  marginBottom: '15px',
                  color: 'var(--text-accent)'
                }}>
                  📤 Outputs
                </h4>
                <p style={{ 
                  fontSize: '1rem', 
                  lineHeight: 1.6, 
                  color: 'var(--text-secondary)'
                }}>
                  Producing professional, standardized diagrams that follow cloud architecture best practices and visual design principles.
                </p>
              </div>
            </div>
          </div>

          <p style={{ 
            fontSize: '1.2rem', 
            lineHeight: 1.8, 
            color: 'var(--text-secondary)',
            marginBottom: '30px'
          }}>
            Because AI models are so powerful, it&rsquo;s easy to feel drawn in many directions. As a focused team, we found value in articulating what we <em>didn&rsquo;t</em> want to build (for now, at least):
          </p>

          <ul style={{ 
            fontSize: '1.2rem', 
            lineHeight: 1.8, 
            color: 'var(--text-secondary)',
            paddingLeft: '30px',
            marginBottom: '40px'
          }}>
            <li style={{ marginBottom: '15px' }}>Features that would be very impressive when they worked, but would rarely do so consistently</li>
            <li style={{ marginBottom: '15px' }}>Features that would overreach and try to do too much, requiring more time to sort through than would be saved</li>
            <li style={{ marginBottom: '15px' }}>Generic AI features that provided widely available functionality (e.g., &ldquo;make it prettier&rdquo;, &ldquo;change colors&rdquo;)</li>
          </ul>

          <div style={{ 
            background: 'var(--background-accent)', 
            padding: '30px', 
            borderRadius: '12px',
            marginBottom: '30px'
          }}>
            <h3 style={{ 
              fontSize: '1.5rem', 
              fontWeight: 600, 
              marginBottom: '20px',
              color: 'var(--text-primary)'
            }}>
              Our Choice: AI-Powered Cloud Diagramming
            </h3>
            
            <p style={{ 
              fontSize: '1.1rem', 
              lineHeight: 1.7, 
              color: 'var(--text-secondary)',
              marginBottom: '20px'
            }}>
              Through our analysis, focusing on novel outputs was the clear choice for us. We wanted something that would work well out of the box, even for teams new to cloud architecture documentation. Our approach checked many boxes:
            </p>

            <ul style={{ 
              fontSize: '1.1rem', 
              lineHeight: 1.7, 
              color: 'var(--text-secondary)',
              paddingLeft: '20px'
            }}>
              <li style={{ marginBottom: '15px' }}><strong>Proven value:</strong> Cloud documentation was already a pain point for most engineering teams. We had conviction that solving this problem was worthwhile, even if the AI features needed refinement.</li>
              <li style={{ marginBottom: '15px' }}><strong>AI-friendly domain:</strong> Cloud architectures can be described effectively in natural language. Infrastructure patterns, service relationships, and data flows are concepts that modern LLMs understand well.</li>
              <li style={{ marginBottom: '15px' }}><strong>Clear value proposition:</strong> When you&rsquo;re architecting in the cloud, you shouldn&rsquo;t have to think about how to draw perfect rectangles and arrows. We want CloudDiagram.AI to embody that - to let you focus on the architecture being communicated, not the mechanics of diagramming.</li>
              <li style={{ marginBottom: '15px' }}><strong>A touch of magic:</strong> Describing your AWS infrastructure in a few sentences and seeing a professional diagram appear still feels wondrous.</li>
            </ul>
          </div>
        </section>

        {/* How We Ship Section */}
        <section id="how-we-ship" style={{ marginBottom: '60px' }}>
          <h2 style={{ 
            fontSize: '2.2rem', 
            fontWeight: 700, 
            marginBottom: '30px',
            color: 'var(--text-primary)',
            lineHeight: 1.3
          }}>
            How We Ship
          </h2>

          <div style={{ 
            textAlign: 'center', 
            margin: '40px 0',
            padding: '40px',
            background: 'var(--background-accent)',
            borderRadius: '12px'
          }}>
            <div style={{ 
              fontSize: '4rem', 
              marginBottom: '20px' 
            }}>
              🔬→⚡→🚀
            </div>
            <p style={{ 
              fontSize: '1rem', 
              color: 'var(--text-secondary)',
              fontStyle: 'italic'
            }}>
              Research & Validation → Rapid Prototyping → Production Deployment
            </p>
          </div>

          <p style={{ 
            fontSize: '1.2rem', 
            lineHeight: 1.8, 
            color: 'var(--text-secondary)',
            marginBottom: '30px'
          }}>
            Our goal in the first phase was to spend 1-2 weeks proving out the AI diagramming use case. We started simple:
          </p>

          <ul style={{ 
            fontSize: '1.2rem', 
            lineHeight: 1.8, 
            color: 'var(--text-secondary)',
            paddingLeft: '30px',
            marginBottom: '30px'
          }}>
            <li style={{ marginBottom: '15px' }}>Used OpenAI&rsquo;s API directly to test the concept</li>
            <li style={{ marginBottom: '15px' }}>Tried 20-30 examples designed to be realistic but straightforward</li>
            <li style={{ marginBottom: '15px' }}>Did minimal prompt engineering to start</li>
            <li style={{ marginBottom: '15px' }}>Focused on AWS, Azure, and GCP common patterns</li>
          </ul>

          <p style={{ 
            fontSize: '1.2rem', 
            lineHeight: 1.8, 
            color: 'var(--text-secondary)',
            marginBottom: '30px'
          }}>
            The results exceeded our expectations. Excited to build, we faced our next decision: architecture approach.
          </p>

          <div style={{ 
            background: 'var(--card-bg)', 
            padding: '30px', 
            borderRadius: '12px',
            border: '1px solid var(--border-color)',
            marginBottom: '30px'
          }}>
            <h3 style={{ 
              fontSize: '1.5rem', 
              fontWeight: 600, 
              marginBottom: '20px',
              color: 'var(--text-primary)'
            }}>
              Technical Architecture Decisions
            </h3>
            
            <p style={{ 
              fontSize: '1.1rem', 
              lineHeight: 1.7, 
              color: 'var(--text-secondary)',
              marginBottom: '20px'
            }}>
              We chose a web-first approach that balances accessibility with technical flexibility:
            </p>

            <div style={{ marginBottom: '20px' }}>
              <h4 style={{ 
                fontSize: '1.2rem', 
                fontWeight: 600, 
                marginBottom: '15px',
                color: 'var(--text-accent)'
              }}>
                Frontend: Next.js + TypeScript
              </h4>
              <ul style={{ 
                fontSize: '1rem', 
                lineHeight: 1.6, 
                color: 'var(--text-secondary)',
                paddingLeft: '20px'
              }}>
                <li>Real-time editor with Monaco (VS Code editor)</li>
                <li>Instant preview with live diagram rendering</li>
                <li>Responsive design for desktop and mobile</li>
              </ul>
            </div>

            <div style={{ marginBottom: '20px' }}>
              <h4 style={{ 
                fontSize: '1.2rem', 
                fontWeight: 600, 
                marginBottom: '15px',
                color: 'var(--text-accent)'
              }}>
                Backend: Node.js API Routes
              </h4>
              <ul style={{ 
                fontSize: '1rem', 
                lineHeight: 1.6, 
                color: 'var(--text-secondary)',
                paddingLeft: '20px'
              }}>
                <li>OpenAI GPT-4 integration for diagram generation</li>
                <li>Rate limiting and usage analytics</li>
                <li>Export functionality (PNG, SVG, PDF)</li>
              </ul>
            </div>

            <div>
              <h4 style={{ 
                fontSize: '1.2rem', 
                fontWeight: 600, 
                marginBottom: '15px',
                color: 'var(--text-accent)'
              }}>
                Diagram Engine: Python + Diagrams Library
              </h4>
              <ul style={{ 
                fontSize: '1rem', 
                lineHeight: 1.6, 
                color: 'var(--text-secondary)',
                paddingLeft: '20px'
              }}>
                <li>Leverages the popular &lsquo;diagrams&rsquo; Python library</li>
                <li>Supports AWS, Azure, GCP, and Kubernetes icons</li>
                <li>Generates clean, professional output</li>
              </ul>
            </div>
          </div>
        </section>

        {/* How It Works Section */}
        <section id="how-it-works" style={{ marginBottom: '60px' }}>
          <h2 style={{ 
            fontSize: '2.2rem', 
            fontWeight: 700, 
            marginBottom: '30px',
            color: 'var(--text-primary)',
            lineHeight: 1.3
          }}>
            How It Works
          </h2>

          <div style={{ 
            background: 'var(--background-accent)', 
            padding: '30px', 
            borderRadius: '12px',
            marginBottom: '40px'
          }}>
            <h3 style={{ 
              fontSize: '1.5rem', 
              fontWeight: 600, 
              marginBottom: '20px',
              color: 'var(--text-primary)'
            }}>
              Three-Phase Process
            </h3>
            
            <div style={{ 
              display: 'grid', 
              gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', 
              gap: '30px',
              marginTop: '30px'
            }}>
              <div style={{ textAlign: 'center' }}>
                <div style={{ 
                  fontSize: '3rem', 
                  marginBottom: '15px',
                  color: 'var(--text-accent)'
                }}>
                  1️⃣
                </div>
                <h4 style={{ 
                  fontSize: '1.2rem', 
                  fontWeight: 600, 
                  marginBottom: '10px',
                  color: 'var(--text-primary)'
                }}>
                  Analysis
                </h4>
                <p style={{ 
                  fontSize: '1rem', 
                  lineHeight: 1.6, 
                  color: 'var(--text-secondary)'
                }}>
                  AI analyzes the input to understand the architecture, identifies cloud services, and determines relationships.
                </p>
              </div>
              
              <div style={{ textAlign: 'center' }}>
                <div style={{ 
                  fontSize: '3rem', 
                  marginBottom: '15px',
                  color: 'var(--text-accent)'
                }}>
                  2️⃣
                </div>
                <h4 style={{ 
                  fontSize: '1.2rem', 
                  fontWeight: 600, 
                  marginBottom: '10px',
                  color: 'var(--text-primary)'
                }}>
                  Generation
                </h4>
                <p style={{ 
                  fontSize: '1rem', 
                  lineHeight: 1.6, 
                  color: 'var(--text-secondary)'
                }}>
                  Structured Python code is generated using the &lsquo;diagrams&rsquo; library syntax, following best practices.
                </p>
              </div>
              
              <div style={{ textAlign: 'center' }}>
                <div style={{ 
                  fontSize: '3rem', 
                  marginBottom: '15px',
                  color: 'var(--text-accent)'
                }}>
                  3️⃣
                </div>
                <h4 style={{ 
                  fontSize: '1.2rem', 
                  fontWeight: 600, 
                  marginBottom: '10px',
                  color: 'var(--text-primary)'
                }}>
                  Rendering
                </h4>
                <p style={{ 
                  fontSize: '1rem', 
                  lineHeight: 1.6, 
                  color: 'var(--text-secondary)'
                }}>
                  The Python code is executed to produce a professional diagram with proper icons and layout.
                </p>
              </div>
            </div>
          </div>

          <div style={{ marginBottom: '40px' }}>
            <h3 style={{ 
              fontSize: '1.5rem', 
              fontWeight: 600, 
              marginBottom: '20px',
              color: 'var(--text-primary)'
            }}>
              Ensuring Quality
            </h3>
            
            <p style={{ 
              fontSize: '1.2rem', 
              lineHeight: 1.8, 
              color: 'var(--text-secondary)',
              marginBottom: '30px'
            }}>
              AI-based features built around open-ended user inputs can produce unpredictable results. Our approach to quality focuses on several key areas:
            </p>

            <div style={{ 
              display: 'grid', 
              gridTemplateColumns: '1fr', 
              gap: '20px',
              marginBottom: '30px'
            }}>
              <div style={{ 
                padding: '25px', 
                background: 'var(--card-bg)', 
                borderRadius: '12px',
                border: '1px solid var(--border-color)'
              }}>
                <h4 style={{ 
                  fontSize: '1.2rem', 
                  fontWeight: 600, 
                  marginBottom: '15px',
                  color: 'var(--text-accent)'
                }}>
                  🎯 Optimized Prompting
                </h4>
                <p style={{ 
                  fontSize: '1.1rem', 
                  lineHeight: 1.6, 
                  color: 'var(--text-secondary)'
                }}>
                  We&rsquo;ve crafted specialized prompts that understand cloud architecture patterns, enforce diagram best practices, and guide the AI away from common mistakes. Our prompts include examples of excellent diagrams and clear constraints.
                </p>
              </div>
              
              <div style={{ 
                padding: '25px', 
                background: 'var(--card-bg)', 
                borderRadius: '12px',
                border: '1px solid var(--border-color)'
              }}>
                <h4 style={{ 
                  fontSize: '1.2rem', 
                  fontWeight: 600, 
                  marginBottom: '15px',
                  color: 'var(--text-accent)'
                }}>
                  🔄 Iterative Refinement
                </h4>
                <p style={{ 
                  fontSize: '1.1rem', 
                  lineHeight: 1.6, 
                  color: 'var(--text-secondary)'
                }}>
                  Users can refine their diagrams by providing additional context or corrections. The AI learns from these iterations to improve subsequent generations, creating a collaborative diagramming experience.
                </p>
              </div>
              
              <div style={{ 
                padding: '25px', 
                background: 'var(--card-bg)', 
                borderRadius: '12px',
                border: '1px solid var(--border-color)'
              }}>
                <h4 style={{ 
                  fontSize: '1.2rem', 
                  fontWeight: 600, 
                  marginBottom: '15px',
                  color: 'var(--text-accent)'
                }}>
                  ⚠️ Graceful Failure Handling
                </h4>
                <p style={{ 
                  fontSize: '1.1rem', 
                  lineHeight: 1.6, 
                  color: 'var(--text-secondary)'
                }}>
                  We define various failure modes and provide clear feedback when they occur. From &ldquo;I need more details about your database setup&rdquo; to &ldquo;This seems outside the scope of cloud architecture,&rdquo; we help users understand and recover from issues.
                </p>
              </div>
            </div>
          </div>

          <div style={{ 
            background: 'var(--background-accent)', 
            padding: '30px', 
            borderRadius: '12px',
            marginBottom: '30px'
          }}>
            <h3 style={{ 
              fontSize: '1.5rem', 
              fontWeight: 600, 
              marginBottom: '20px',
              color: 'var(--text-primary)'
            }}>
              Model Selection Strategy
            </h3>
            
            <p style={{ 
              fontSize: '1.1rem', 
              lineHeight: 1.7, 
              color: 'var(--text-secondary)',
              marginBottom: '20px'
            }}>
              We use GPT-4 Turbo as our primary model because diagram generation has several characteristics that justify the cost:
            </p>

            <ul style={{ 
              fontSize: '1.1rem', 
              lineHeight: 1.7, 
              color: 'var(--text-secondary)',
              paddingLeft: '20px',
              marginBottom: '20px'
            }}>
              <li style={{ marginBottom: '10px' }}><strong>Low frequency:</strong> A few successful generations per session provide significant value</li>
              <li style={{ marginBottom: '10px' }}><strong>High value:</strong> When it works well, it replaces hours of manual diagramming work</li>
              <li style={{ marginBottom: '10px' }}><strong>Quality sensitive:</strong> Diagram accuracy and professionalism directly impact user trust</li>
              <li style={{ marginBottom: '10px' }}><strong>Low latency tolerance:</strong> Users expect to wait a few seconds for a complex diagram</li>
            </ul>

            <p style={{ 
              fontSize: '1.1rem', 
              lineHeight: 1.7, 
              color: 'var(--text-secondary)'
            }}>
              For future features like real-time suggestions or small edits, we may explore more cost-effective models, but for core diagram generation, quality trumps cost efficiency.
            </p>
          </div>
        </section>

        {/* Lessons Learned Section */}
        <section id="lessons-learned" style={{ marginBottom: '60px' }}>
          <h2 style={{ 
            fontSize: '2.2rem', 
            fontWeight: 700, 
            marginBottom: '30px',
            color: 'var(--text-primary)',
            lineHeight: 1.3
          }}>
            Key Lessons Learned
          </h2>

          <div style={{ 
            display: 'grid', 
            gridTemplateColumns: '1fr', 
            gap: '30px',
            marginBottom: '40px'
          }}>
            <div style={{ 
              padding: '30px', 
              background: 'var(--card-bg)', 
              borderRadius: '12px',
              border: '1px solid var(--border-color)'
            }}>
              <h3 style={{ 
                fontSize: '1.4rem', 
                fontWeight: 600, 
                marginBottom: '20px',
                color: 'var(--text-accent)'
              }}>
                🎯 Start with a Clear Problem
              </h3>
              <p style={{ 
                fontSize: '1.1rem', 
                lineHeight: 1.7, 
                color: 'var(--text-secondary)'
              }}>
                AI features work best when they solve a specific, well-defined problem. &ldquo;Make diagramming easier with AI&rdquo; was too vague. &ldquo;Generate professional cloud architecture diagrams from natural language descriptions&rdquo; gave us a clear target and success criteria.
              </p>
            </div>

            <div style={{ 
              padding: '30px', 
              background: 'var(--card-bg)', 
              borderRadius: '12px',
              border: '1px solid var(--border-color)'
            }}>
              <h3 style={{ 
                fontSize: '1.4rem', 
                fontWeight: 600, 
                marginBottom: '20px',
                color: 'var(--text-accent)'
              }}>
                🔄 Embrace the Iterative Nature
              </h3>
              <p style={{ 
                fontSize: '1.1rem', 
                lineHeight: 1.7, 
                color: 'var(--text-secondary)'
              }}>
                Unlike traditional software where you define exact specifications, AI features require constant refinement. We learned to build feedback loops into the product itself, allowing users to guide the AI toward better results through natural interaction.
              </p>
            </div>

            <div style={{ 
              padding: '30px', 
              background: 'var(--card-bg)', 
              borderRadius: '12px',
              border: '1px solid var(--border-color)'
            }}>
              <h3 style={{ 
                fontSize: '1.4rem', 
                fontWeight: 600, 
                marginBottom: '20px',
                color: 'var(--text-accent)'
              }}>
                🎨 Domain Expertise Matters More Than Ever
              </h3>
              <p style={{ 
                fontSize: '1.1rem', 
                lineHeight: 1.7, 
                color: 'var(--text-secondary)'
              }}>
                AI amplifies domain knowledge rather than replacing it. Our understanding of cloud architecture patterns, diagram design principles, and user workflows was crucial for crafting effective prompts and building useful features around the AI core.
              </p>
            </div>

            <div style={{ 
              padding: '30px', 
              background: 'var(--card-bg)', 
              borderRadius: '12px',
              border: '1px solid var(--border-color)'
            }}>
              <h3 style={{ 
                fontSize: '1.4rem', 
                fontWeight: 600, 
                marginBottom: '20px',
                color: 'var(--text-accent)'
              }}>
                ⚡ Ship Fast, Learn Faster
              </h3>
              <p style={{ 
                fontSize: '1.1rem', 
                lineHeight: 1.7, 
                color: 'var(--text-secondary)'
              }}>
                The pace of AI improvement means that waiting for perfection is a losing strategy. We launched with a simple but functional version and have continuously improved based on real user feedback. Early adopters have been surprisingly forgiving of limitations when the core value is clear.
              </p>
            </div>
          </div>
        </section>

        {/* TL;DR Section */}
        <section id="tldr" style={{ marginBottom: '60px' }}>
          <h2 style={{ 
            fontSize: '2.2rem', 
            fontWeight: 700, 
            marginBottom: '30px',
            color: 'var(--text-primary)',
            lineHeight: 1.3
          }}>
            TL;DR
          </h2>

          <div style={{ 
            background: 'var(--background-accent)', 
            padding: '40px', 
            borderRadius: '12px',
            marginBottom: '30px'
          }}>
            <div style={{ 
              display: 'grid', 
              gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', 
              gap: '30px'
            }}>
              <div>
                <h3 style={{ 
                  fontSize: '1.3rem', 
                  fontWeight: 600, 
                  marginBottom: '15px',
                  color: 'var(--text-primary)'
                }}>
                  🎯 Where to Start
                </h3>
                <p style={{ 
                  fontSize: '1rem', 
                  lineHeight: 1.6, 
                  color: 'var(--text-secondary)'
                }}>
                  Focus on a specific problem where AI can provide unique value. For us, that was transforming the tedious process of cloud architecture diagramming into something fast and accessible.
                </p>
              </div>
              
              <div>
                <h3 style={{ 
                  fontSize: '1.3rem', 
                  fontWeight: 600, 
                  marginBottom: '15px',
                  color: 'var(--text-primary)'
                }}>
                  🚀 How to Ship
                </h3>
                <p style={{ 
                  fontSize: '1rem', 
                  lineHeight: 1.6, 
                  color: 'var(--text-secondary)'
                }}>
                  Start simple and iterate based on real usage. We chose web-first for accessibility and focused on core functionality before adding advanced features.
                </p>
              </div>
              
              <div>
                <h3 style={{ 
                  fontSize: '1.3rem', 
                  fontWeight: 600, 
                  marginBottom: '15px',
                  color: 'var(--text-primary)'
                }}>
                  🎨 Quality First
                </h3>
                <p style={{ 
                  fontSize: '1rem', 
                  lineHeight: 1.6, 
                  color: 'var(--text-secondary)'
                }}>
                  Use the best available models for high-value, low-frequency features. Invest heavily in prompt engineering and domain expertise to guide AI behavior.
                </p>
              </div>
            </div>
          </div>

          <p style={{ 
            fontSize: '1.2rem', 
            lineHeight: 1.8, 
            color: 'var(--text-secondary)',
            textAlign: 'center',
            fontStyle: 'italic'
          }}>
            Building with AI requires embracing uncertainty while maintaining focus on user value. The technology is powerful, but success comes from applying it thoughtfully to real problems.
          </p>
        </section>

        {/* Call to Action */}
        <section style={{ 
          textAlign: 'center',
          padding: '50px 30px',
          background: 'var(--background-accent)',
          borderRadius: '16px',
          marginBottom: '40px'
        }}>
          <h2 style={{ 
            fontSize: '2rem', 
            fontWeight: 700, 
            marginBottom: '20px',
            color: 'var(--text-primary)'
          }}>
            Try CloudDiagram.AI Today
          </h2>
          <p style={{ 
            fontSize: '1.2rem', 
            lineHeight: 1.6, 
            color: 'var(--text-secondary)',
            marginBottom: '30px',
            maxWidth: '600px',
            margin: '0 auto 30px'
          }}>
            Experience the future of cloud architecture diagramming. Generate professional diagrams from simple descriptions in seconds.
          </p>
          <Link href="/" style={{ 
            display: 'inline-block',
            padding: '16px 32px', 
            background: 'linear-gradient(132deg, #ffb347, #ff5858 54%, #a259ff 86%)', 
            color: 'white', 
            textDecoration: 'none',
            borderRadius: '12px', 
            fontWeight: 600,
            fontSize: '1.1rem',
            transition: 'all 0.2s ease'
          }}>
            Get Started Free →
          </Link>
        </section>
      </article>
      
      {/* Newsletter */}
      <div style={{ 
        background: 'var(--background-accent)', 
        padding: '80px 20px', 
        textAlign: 'center',
        borderTop: '1px solid var(--border-color)',
      }}>
        <div style={{ maxWidth: '600px', margin: '0 auto' }}>
          <h2 style={{ 
            fontSize: '2rem', 
            fontWeight: 800, 
            marginBottom: '20px',
            color: 'var(--text-primary)'
          }}>
            Stay Updated
          </h2>
          <p style={{ 
            fontSize: '1.1rem', 
            marginBottom: '30px', 
            lineHeight: 1.6,
            color: 'var(--text-secondary)'
          }}>
            Get expert insights on building with AI and cloud architecture best practices delivered to your inbox.
          </p>
          <div style={{ display: 'flex', gap: '10px', maxWidth: '500px', margin: '0 auto' }}>
            <input 
              type="email" 
              placeholder="Your email address" 
              style={{ 
                padding: '16px', 
                borderRadius: '8px', 
                border: '1px solid var(--border-color)', 
                flexGrow: 1,
                background: 'var(--input-bg)',
                color: 'var(--text-primary)',
                fontSize: '1rem'
              }}
            />
            <button style={{ 
              padding: '16px 24px', 
              background: 'linear-gradient(132deg, #ffb347, #ff5858 54%, #a259ff 86%)', 
              color: 'white', 
              border: 'none', 
              borderRadius: '8px', 
              fontWeight: 600,
              cursor: 'pointer',
              transition: 'all 0.2s ease',
              fontSize: '1rem'
            }}>
              Subscribe
            </button>
          </div>
          <p style={{ 
            fontSize: '0.9rem', 
            marginTop: '15px',
            color: 'var(--text-secondary)',
            opacity: 0.8
          }}>
            We respect your privacy. Unsubscribe at any time.
          </p>
        </div>
      </div>
      
      {/* Footer */}
      <footer style={{ 
        background: 'var(--background)', 
        padding: '40px 20px', 
        borderTop: '1px solid var(--border-color)',
        color: 'var(--text-secondary)'
      }}>
        <div style={{ 
          maxWidth: '1100px', 
          margin: '0 auto', 
          display: 'flex', 
          justifyContent: 'space-between',
          flexWrap: 'wrap',
          gap: '40px'
        }}>
          <div>
            <Link href="/" style={{ display: 'flex', alignItems: 'center', gap: '10px', textDecoration: 'none', marginBottom: '15px' }}>
                <Image src="/clouddiagram-logo.svg" alt="CloudDiagram.AI Logo" width={30} height={30} style={{ borderRadius: 8 }} />
                <span style={{ 
                  fontSize: '1.2rem', 
                  fontWeight: 700, 
                  color: 'var(--text-primary)' 
                }}>
                  CloudDiagram.AI
                </span>
            </Link>
            <p style={{ maxWidth: '300px', fontSize: '0.95rem', lineHeight: 1.6 }}>
              AI-powered cloud architecture diagrams for AWS, Azure, and GCP. Generate professional diagrams in seconds.
            </p>
          </div>
          
          <div>
            <h3 style={{ fontSize: '1.1rem', fontWeight: 600, marginBottom: '15px', color: 'var(--text-primary)' }}>
              Resources
            </h3>
            <ul style={{ padding: 0, listStyle: 'none' }}>
              <li style={{ marginBottom: '10px' }}>
                <Link href="/blog" style={{ textDecoration: 'none', color: 'var(--text-secondary)', fontSize: '0.95rem' }}>
                  Blog
                </Link>
              </li>
              <li style={{ marginBottom: '10px' }}>
                <Link href="/faq" style={{ textDecoration: 'none', color: 'var(--text-secondary)', fontSize: '0.95rem' }}>
                  FAQ
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 style={{ fontSize: '1.1rem', fontWeight: 600, marginBottom: '15px', color: 'var(--text-primary)' }}>
              Legal
            </h3>
            <ul style={{ padding: 0, listStyle: 'none' }}>
              <li style={{ marginBottom: '10px' }}>
                <Link href="/privacy" style={{ textDecoration: 'none', color: 'var(--text-secondary)', fontSize: '0.95rem' }}>
                  Privacy Policy
                </Link>
              </li>
              <li style={{ marginBottom: '10px' }}>
                <Link href="/terms" style={{ textDecoration: 'none', color: 'var(--text-secondary)', fontSize: '0.95rem' }}>
                  Terms of Service
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 style={{ fontSize: '1.1rem', fontWeight: 600, marginBottom: '15px', color: 'var(--text-primary)' }}>
              Connect
            </h3>
            <ul style={{ padding: 0, listStyle: 'none' }}>
              <li style={{ marginBottom: '10px' }}>
                <a href="https://github.com/hamad-khawaja/diagram-web-ai" style={{ textDecoration: 'none', color: 'var(--text-secondary)', fontSize: '0.95rem' }}>
                  GitHub
                </a>
              </li>
            </ul>
          </div>
        </div>
        
        <div style={{ 
          maxWidth: '1100px', 
          margin: '40px auto 0', 
          paddingTop: '20px', 
          borderTop: '1px solid var(--border-color)', 
          display: 'flex', 
          justifyContent: 'space-between',
          alignItems: 'center',
          flexWrap: 'wrap',
          gap: '20px',
          fontSize: '0.9rem'
        }}>
          <p style={{ margin: 0 }}>
            © 2025 CloudDiagram.AI. All rights reserved.
          </p>
          <div style={{ display: 'flex', gap: '20px' }}>
            <a href="#" style={{ color: 'var(--text-secondary)', textDecoration: 'none' }}>
              Contact Us
            </a>
            <a href="#" style={{ color: 'var(--text-secondary)', textDecoration: 'none' }}>
              Sitemap
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
