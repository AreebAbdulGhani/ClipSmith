import React, { useEffect } from 'react';
import { 
  Mic, Scissors, LayoutTemplate, Layers, Wand2, MonitorPlay, 
  Settings, Users, DollarSign, Calendar, Mail, CheckCircle2, ChevronRight
} from 'lucide-react';
import { FaLinkedin, FaGithub } from 'react-icons/fa';

function App() {
  // Simple intersection observer for animations
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.1 });

    document.querySelectorAll('.scroll-animate').forEach(el => {
      observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <>
      {/* Navigation */}
      <nav className="container">
        <div className="nav">
          <div className="logo">
            ClipSmith<span className="logo-dot"></span>
          </div>
          <div style={{display: 'flex', gap: '20px', alignItems: 'center'}}>
            <a href="#product" style={{color: 'var(--text-main)', fontSize: '0.9rem', fontWeight: 500}}>Product</a>
            <a href="#pricing" style={{color: 'var(--text-main)', fontSize: '0.9rem', fontWeight: 500}}>Pricing</a>
            <a href="#about" className="btn btn-primary" style={{padding: '8px 16px', fontSize: '0.9rem'}}>Contact Builder</a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <header className="section" style={{paddingTop: '120px', paddingBottom: '80px', minHeight: '80vh', display: 'flex', alignItems: 'center'}}>
        <div className="bg-glow"></div>
        <div className="container scroll-animate">
          <div className="badge">Adobe Express Add-On / White Paper</div>
          <h1 style={{fontSize: '4.5rem', marginBottom: '24px', maxWidth: '800px', letterSpacing: '-0.04em'}}>
            Turn any podcast into <span className="text-gradient">five branded Express shorts</span> in under a minute.
          </h1>
          <p style={{fontSize: '1.25rem', color: 'var(--text-muted)', maxWidth: '600px', marginBottom: '40px'}}>
            The audio-to-shorts workflow that lives inside Adobe Express. Built for podcasters, creators, and audio-first marketers.
          </p>
          <div style={{display: 'flex', gap: '16px'}}>
            <a href="#how-it-works" className="btn btn-primary">See How It Works <ChevronRight size={18} style={{marginLeft: '8px'}} /></a>
            <a href="#about" className="btn btn-secondary">Read the White Paper</a>
          </div>

          <div className="hero-stats scroll-animate delay-2">
            <div className="stat">
              <span className="stat-value text-gradient">60s</span>
              <span className="stat-label">Average time from upload<br/>to five editable clips</span>
            </div>
            <div className="stat">
              <span className="stat-value">5</span>
              <span className="stat-label">Fully editable Express<br/>compositions per upload</span>
            </div>
            <div className="stat">
              <span className="stat-value">0</span>
              <span className="stat-label">Similar audio-to-shorts<br/>add-ons in the marketplace</span>
            </div>
          </div>
        </div>
      </header>

      {/* The Problem & One Line Pitch */}
      <section id="problem" className="section section-border-top">
        <div className="container">
          <div className="grid-2">
            <div className="scroll-animate">
              <h2 style={{fontSize: '2.5rem', marginBottom: '24px'}}>The broken handoff in content repurposing.</h2>
              <p style={{marginBottom: '16px', color: 'var(--text-muted)'}}>
                Podcasters publish a 45-minute episode on Monday. By Tuesday afternoon they need five short clips to post on TikTok, Reels, YouTube Shorts, and LinkedIn. That repurposing work is brutal.
              </p>
              <p style={{marginBottom: '16px', color: 'var(--text-muted)'}}>
                Tools like OpusClip, Descript, and Kapwing have automated the picking and cutting. But they live completely outside Adobe Express. A creator finishes a clip, exports it as a flat MP4 with no editable layers, and if they want to tweak a caption or match their brand style, they have to start over inside Express with a static video file.
              </p>
              <div style={{background: 'var(--bg-card)', padding: '24px', borderRadius: '12px', borderLeft: '4px solid var(--accent)', marginTop: '32px'}}>
                <h4 style={{marginBottom: '8px', color: 'var(--text-main)'}}>What creators actually want:</h4>
                <ul style={{listStyle: 'none', color: 'var(--text-muted)', display: 'flex', flexDirection: 'column', gap: '12px'}}>
                  <li style={{display: 'flex', gap: '12px'}}><CheckCircle2 size={20} color="var(--accent)" style={{flexShrink: 0}}/> Automation quality to stop scrubbing through hours of audio.</li>
                  <li style={{display: 'flex', gap: '12px'}}><CheckCircle2 size={20} color="var(--accent)" style={{flexShrink: 0}}/> Design freedom of Express so every clip matches their brand exactly.</li>
                  <li style={{display: 'flex', gap: '12px'}}><CheckCircle2 size={20} color="var(--accent)" style={{flexShrink: 0}}/> One tool, one tab, one canvas, instead of a five-step platform dance.</li>
                </ul>
              </div>
            </div>
            <div className="scroll-animate delay-2" style={{display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
              <div style={{background: 'var(--bg-elevated)', border: '1px solid var(--border-color)', borderRadius: '24px', padding: '40px', width: '100%', position: 'relative', overflow: 'hidden'}}>
                <div style={{position: 'absolute', top: 0, right: 0, width: '150px', height: '150px', background: 'var(--accent)', filter: 'blur(100px)', opacity: 0.15}}></div>
                <div style={{fontSize: '1.5rem', fontWeight: 600, color: 'var(--text-main)', lineHeight: 1.5, fontFamily: 'Outfit', textAlign: 'center'}}>
                  "ClipSmith turns a 30-minute podcast into five fully editable, branded Adobe Express shorts in under 60 seconds."
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* The Product Features */}
      <section id="product" className="section section-border-top" style={{background: 'var(--bg-elevated)'}}>
        <div className="container">
          <div style={{textAlign: 'center', maxWidth: '800px', margin: '0 auto 64px'}} className="scroll-animate">
            <h2 style={{fontSize: '2.5rem', marginBottom: '16px'}}>A focused, single-purpose add-on.</h2>
            <p style={{color: 'var(--text-muted)', fontSize: '1.1rem'}}>
              ClipSmith does one thing: audio goes in, five branded editable Express shorts come out. That focus is the point. I am building one magical button that pulls a creator workflow currently happening outside Adobe into Adobe Express where it belongs.
            </p>
          </div>

          <div className="grid-3">
            <div className="card scroll-animate">
              <div className="card-icon"><Layers size={24} /></div>
              <h3 style={{fontSize: '1.25rem', marginBottom: '12px'}}>Native Editability</h3>
              <p style={{color: 'var(--text-muted)', fontSize: '0.95rem'}}>
                Every clip lands on the Express canvas as real, layered, editable content. Not a flat MP4. Change a caption font, swap a color, add B-roll. It is a true Express document.
              </p>
            </div>
            <div className="card scroll-animate delay-1">
              <div className="card-icon"><Wand2 size={24} /></div>
              <h3 style={{fontSize: '1.25rem', marginBottom: '12px'}}>Audio Intelligence</h3>
              <p style={{color: 'var(--text-muted)', fontSize: '0.95rem'}}>
                A transcription model handles speech-to-text. A ranking pass picks the five best moments based on quotability, hook strength, and self-contained meaning.
              </p>
            </div>
            <div className="card scroll-animate delay-2">
              <div className="card-icon"><LayoutTemplate size={24} /></div>
              <h3 style={{fontSize: '1.25rem', marginBottom: '12px'}}>Brand Automation</h3>
              <p style={{color: 'var(--text-muted)', fontSize: '0.95rem'}}>
                Upload your logo once. ClipSmith pulls your brand palette and applies it to every clip automatically. Captions, title cards, waveforms all match. Zero context switching.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section id="how-it-works" className="section section-border-top">
         <div className="bg-glow-2"></div>
        <div className="container">
          <h2 style={{fontSize: '2.5rem', marginBottom: '64px', textAlign: 'center'}} className="scroll-animate">One screen. Five steps. Under a minute.</h2>
          
          <div style={{maxWidth: '800px', margin: '0 auto'}}>
            <div className="timeline">
              <div className="timeline-item scroll-animate">
                <div className="timeline-dot"></div>
                <div className="timeline-content">
                  <h4 style={{display: 'flex', alignItems: 'center', gap: '8px'}}><span style={{color: 'var(--accent)', fontSize: '0.9rem', fontWeight: 800}}>01</span> Upload</h4>
                  <p>User opens ClipSmith from the Express add-on panel and drops in a podcast episode (MP3, WAV, M4A). YouTube URLs auto-download and transcode in background.</p>
                </div>
              </div>
              <div className="timeline-item scroll-animate">
                <div className="timeline-dot"></div>
                <div className="timeline-content">
                  <h4 style={{display: 'flex', alignItems: 'center', gap: '8px'}}><span style={{color: 'var(--accent)', fontSize: '0.9rem', fontWeight: 800}}>02</span> Transcribe & Rank</h4>
                  <p>Whisper handles transcription. A frontier LLM scores every 20-45s segment on quotability, emotional punch, and hook strength. Top five segments win.</p>
                </div>
              </div>
              <div className="timeline-item scroll-animate">
                <div className="timeline-dot"></div>
                <div className="timeline-content">
                  <h4 style={{display: 'flex', alignItems: 'center', gap: '8px'}}><span style={{color: 'var(--accent)', fontSize: '0.9rem', fontWeight: 800}}>03</span> Generate</h4>
                  <p>ClipSmith builds fully styled Express compositions: 9:16 frame, animated waveform synced to audio, word-level caption styling, title cards, and extracted brand palettes.</p>
                </div>
              </div>
              <div className="timeline-item scroll-animate">
                <div className="timeline-dot"></div>
                <div className="timeline-content">
                  <h4 style={{display: 'flex', alignItems: 'center', gap: '8px'}}><span style={{color: 'var(--accent)', fontSize: '0.9rem', fontWeight: 800}}>04</span> Edit</h4>
                  <p>Click any clip thumbnail to open it on the Express canvas. Edit every element natively: text nodes, shape layers, audio tracks. Tighten the cut using Express tools.</p>
                </div>
              </div>
              <div className="timeline-item scroll-animate">
                <div className="timeline-dot"></div>
                <div className="timeline-content">
                  <h4 style={{display: 'flex', alignItems: 'center', gap: '8px'}}><span style={{color: 'var(--accent)', fontSize: '0.9rem', fontWeight: 800}}>05</span> Export</h4>
                  <p>Standard Express MP4 export at the target platform's dimensions. Post. Done. The whole loop from raw audio to posted clip, completely inside one tool.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Tech Architecture & Adobe Fit */}
      <section className="section section-border-top" style={{background: 'var(--bg-elevated)'}}>
        <div className="container">
          <div className="grid-2">
            <div className="scroll-animate">
              <div className="badge">Strategy</div>
              <h2 style={{fontSize: '2rem', marginBottom: '24px'}}>Why this belongs in<br/>Adobe Express</h2>
              <p style={{color: 'var(--text-muted)', marginBottom: '16px'}}>
                Adobe made a clear bet on short-form video at MAX 2025. ClipSmith is the audio on-ramp that suite does not have yet. It pulls an audio-first creator into Express. Once they are in, they use Firefly for imagery, standard stock for B-roll, and the brand kit.
              </p>
              <ul style={{listStyle: 'none', color: 'var(--text-main)', marginTop: '24px', display: 'flex', flexDirection: 'column', gap: '16px'}}>
                <li style={{padding: '16px', background: 'var(--bg-card)', borderRadius: '8px', border: '1px solid var(--border-color)'}}>
                  <strong>YouTube Shorts Partnership:</strong> ClipSmith output is optimized for the short-form vertical Adobe just invested in.
                </li>
                <li style={{padding: '16px', background: 'var(--bg-card)', borderRadius: '8px', border: '1px solid var(--border-color)'}}>
                  <strong>Creator Economy Focus:</strong> Built exactly for the segment Adobe named as a priority growth audience.
                </li>
              </ul>
            </div>
            <div className="scroll-animate delay-1">
              <div className="badge">Engineering</div>
              <h2 style={{fontSize: '2rem', marginBottom: '24px'}}>Technical Architecture</h2>
              <p style={{color: 'var(--text-muted)', marginBottom: '16px'}}>
                Built entirely on the documented Adobe Express add-on SDK. No undocumented APIs.
              </p>
              
              <div style={{marginTop: '32px', display: 'flex', flexDirection: 'column', gap: '24px'}}>
                <div>
                  <h4 style={{color: 'var(--accent)', marginBottom: '8px'}}>Iframe Runtime</h4>
                  <p style={{color: 'var(--text-muted)', fontSize: '0.9rem'}}>React UI, file upload edge logic, YouTube URL parsing, and state management. Integrates with Whisper API and Frontier LLMs for ranking.</p>
                </div>
                <div>
                  <h4 style={{color: 'var(--accent)', marginBottom: '8px'}}>Document Sandbox</h4>
                  <p style={{color: 'var(--text-muted)', fontSize: '0.9rem'}}>Receives structured specifications via Communication API. Uses addPage, TextNode, RectangleNode, and PathNode to construct full editable sequences.</p>
                </div>
                <div>
                  <h4 style={{color: 'var(--accent)', marginBottom: '8px'}}>Native Export Pipeline</h4>
                  <p style={{color: 'var(--text-muted)', fontSize: '0.9rem'}}>Uses standard Express createRenditions API. No custom video engine needed — Express handles rendering the created document natively.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Target Audience */}
      <section className="section section-border-top">
        <div className="container scroll-animate">
          <h2 style={{fontSize: '2.5rem', marginBottom: '48px', textAlign: 'center'}}>Who It's For</h2>
          <div className="grid-2">
            <div className="card">
              <div style={{display: 'flex', alignItems: 'center', gap: '16px', marginBottom: '16px'}}>
                <div className="card-icon" style={{marginBottom: 0}}><Mic size={20} /></div>
                <h3 style={{fontSize: '1.25rem'}}>Podcasters</h3>
              </div>
              <p style={{color: 'var(--text-muted)', fontSize: '0.95rem'}}>Solo podcasters who publish weekly. Paying $30/mo for OpusClip but unhappy with visual customization limits.</p>
            </div>
            
            <div className="card">
              <div style={{display: 'flex', alignItems: 'center', gap: '16px', marginBottom: '16px'}}>
                <div className="card-icon" style={{marginBottom: 0}}><MonitorPlay size={20} /></div>
                <h3 style={{fontSize: '1.25rem'}}>Interview Hosts</h3>
              </div>
              <p style={{color: 'var(--text-muted)', fontSize: '0.95rem'}}>YouTubers cutting long-forms. A one-click editable output inside Express collapses their afternoon workflow down to 10 minutes.</p>
            </div>
            
            <div className="card">
              <div style={{display: 'flex', alignItems: 'center', gap: '16px', marginBottom: '16px'}}>
                <div className="card-icon" style={{marginBottom: 0}}><Users size={20} /></div>
                <h3 style={{fontSize: '1.25rem'}}>Audio-First Marketers</h3>
              </div>
              <p style={{color: 'var(--text-muted)', fontSize: '0.95rem'}}>Brand teams running webinars who need strict brand consistency and automation in one tool.</p>
            </div>
            
            <div className="card">
              <div style={{display: 'flex', alignItems: 'center', gap: '16px', marginBottom: '16px'}}>
                <div className="card-icon" style={{marginBottom: 0}}><Settings size={20} /></div>
                <h3 style={{fontSize: '1.25rem'}}>Educators & Trainers</h3>
              </div>
              <p style={{color: 'var(--text-muted)', fontSize: '0.95rem'}}>Turning lectures into shareable social clips. Non-designers who just need one button to press for professional results.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Business Model */}
      <section id="pricing" className="section section-border-top" style={{background: 'var(--bg-elevated)'}}>
        <div className="container scroll-animate">
          <div style={{textAlign: 'center', maxWidth: '600px', margin: '0 auto 48px'}}>
            <h2 style={{fontSize: '2.5rem', marginBottom: '16px'}}>Freemium Business Model</h2>
            <p style={{color: 'var(--text-muted)'}}>The free tier is genuinely useful. The paid tier is genuinely necessary for working creators. Upgrade pays for itself immediately in time saved.</p>
          </div>
          
          <div className="pricing-table">
            <div className="pricing-header">
              <div style={{color: 'var(--text-muted)'}}>Tier</div>
              <div style={{color: 'var(--text-muted)'}}>Price</div>
              <div style={{color: 'var(--text-muted)'}}>What's included</div>
            </div>
            <div className="pricing-row" style={{background: 'rgba(255, 255, 255, 0.01)'}}>
              <div><strong style={{color: 'var(--text-main)', fontSize: '1.1rem'}}>Free</strong></div>
              <div style={{fontFamily: 'Outfit', fontSize: '1.2rem', fontWeight: 600}}>$0<span style={{color: 'var(--text-muted)', fontSize: '0.9rem', fontWeight: 400}}>/mo</span></div>
              <div style={{color: 'var(--text-muted)', fontSize: '0.9rem'}}>3 clips per month. 10-minute audio limit. Standard styles. Watermark on export. Enough to feel the magic.</div>
            </div>
            <div className="pricing-row" style={{background: 'rgba(255, 51, 102, 0.05)'}}>
              <div><strong style={{color: 'var(--accent)', fontSize: '1.1rem'}}>Pro</strong></div>
              <div style={{fontFamily: 'Outfit', fontSize: '1.2rem', fontWeight: 600, color: 'var(--accent)'}}>$12<span style={{opacity: 0.8, fontSize: '0.9rem', fontWeight: 400}}>/mo</span></div>
              <div style={{color: 'var(--text-muted)', fontSize: '0.9rem'}}><strong style={{color: 'var(--text-main)'}}>Unlimited clips.</strong> 2-hour audio limit. Full style library, brand kit integration, saved fonts. No watermark. Priority processing.</div>
            </div>
            <div className="pricing-row" style={{background: 'rgba(255, 255, 255, 0.01)'}}>
              <div><strong style={{color: 'var(--text-main)', fontSize: '1.1rem'}}>Studio</strong></div>
              <div style={{fontFamily: 'Outfit', fontSize: '1.2rem', fontWeight: 600}}>$29<span style={{color: 'var(--text-muted)', fontSize: '0.9rem', fontWeight: 400}}>/mo</span></div>
              <div style={{color: 'var(--text-muted)', fontSize: '0.9rem'}}>Everything in Pro + Team brand kit sharing, batch processing, and custom animation templates.</div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Build Plan */}
      <section className="section section-border-top">
        <div className="container scroll-animate">
          <div className="grid-2">
            <div>
              <h2 style={{fontSize: '2.5rem', marginBottom: '24px'}}>Build Plan</h2>
              <p style={{color: 'var(--text-muted)', marginBottom: '32px'}}>Eight weeks from grant approval to marketplace release. Solo developer, full-time commit.</p>
              
              <div style={{display: 'flex', flexDirection: 'column', gap: '24px'}}>
                <div style={{display: 'flex', gap: '16px'}}>
                  <div style={{width: '60px', color: 'var(--accent)', fontWeight: 700, fontFamily: 'Outfit'}}>Wk 1-2</div>
                  <div>
                    <h4 style={{marginBottom: '4px'}}>Foundation</h4>
                    <p style={{fontSize: '0.9rem', color: 'var(--text-muted)'}}>Add-on scaffold. Iframe and Sandbox wired. Whisper transcription pipeline live end to end.</p>
                  </div>
                </div>
                <div style={{display: 'flex', gap: '16px'}}>
                  <div style={{width: '60px', color: 'var(--accent)', fontWeight: 700, fontFamily: 'Outfit'}}>Wk 3-4</div>
                  <div>
                    <h4 style={{marginBottom: '4px'}}>Ranking Engine</h4>
                    <p style={{fontSize: '0.9rem', color: 'var(--text-muted)'}}>LLM prompt tuning against test corpus. Top-5 selection logic. Word-level timestamp alignment.</p>
                  </div>
                </div>
                <div style={{display: 'flex', gap: '16px'}}>
                  <div style={{width: '60px', color: 'var(--accent)', fontWeight: 700, fontFamily: 'Outfit'}}>Wk 5-6</div>
                  <div>
                    <h4 style={{marginBottom: '4px'}}>Composition Engine</h4>
                    <p style={{fontSize: '0.9rem', color: 'var(--text-muted)'}}>Document Sandbox builder. Caption layers, waveform sync, title cards, and brand palette extraction.</p>
                  </div>
                </div>
                <div style={{display: 'flex', gap: '16px'}}>
                  <div style={{width: '60px', color: 'var(--accent)', fontWeight: 700, fontFamily: 'Outfit'}}>Wk 7-8</div>
                  <div>
                    <h4 style={{marginBottom: '4px'}}>Polish and Launch</h4>
                    <p style={{fontSize: '0.9rem', color: 'var(--text-muted)'}}>Brand kit UI, billing integration, marketplace submission, and first creator case study launch target: August 2026.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About The Builder */}
      <section id="about" className="section section-border-top" style={{background: 'var(--brand-gradient)', color: '#fff'}}>
        <div className="container scroll-animate">
          <div style={{maxWidth: '800px', margin: '0 auto', textAlign: 'center'}}>
            <h2 style={{fontSize: '2.5rem', marginBottom: '24px', color: '#fff'}}>About the Builder</h2>
            <p style={{fontSize: '1.1rem', marginBottom: '24px', opacity: 0.9}}>
              <strong>Zareen Fatima</strong> | Full stack developer based in Bengaluru, India.
            </p>
            <p style={{fontSize: '1rem', marginBottom: '32px', opacity: 0.85, textAlign: 'left'}}>
              I specialize in React, React Native, and AI-integrated frontend systems. I built an AI image generation platform handling full text-to-asset pipelines, and an AI healthcare chatbot with complex language logic mapping closely to ClipSmith's core. The design philosophy behind ClipSmith is what I care most about: tools that feel magical because they do one thing perfectly. I am pre-seed, solo, and committing full-time.
            </p>
            
            <div style={{display: 'flex', justifyContent: 'center', gap: '16px', flexWrap: 'wrap'}}>
              <a href="mailto:zareenarshh17@gmail.com" className="btn" style={{background: 'rgba(255, 255, 255, 0.2)', backdropFilter: 'blur(10px)', color: '#fff', border: '1px solid rgba(255,255,255,0.3)'}}>
                <Mail size={18} style={{marginRight: '8px'}} /> zareenarshh17@gmail.com
              </a>
              <a href="https://www.linkedin.com/in/zareen-fatima-476110244/" target="_blank" rel="noreferrer" className="btn" style={{background: 'rgba(255, 255, 255, 0.2)', backdropFilter: 'blur(10px)', color: '#fff', border: '1px solid rgba(255,255,255,0.3)'}}>
                <FaLinkedin size={18} style={{marginRight: '8px'}} /> LinkedIn
              </a>
              <a href="https://github.com/AreebAbdulGhani/ClipSmith.git" target="_blank" rel="noreferrer" className="btn" style={{background: 'rgba(255, 255, 255, 0.2)', backdropFilter: 'blur(10px)', color: '#fff', border: '1px solid rgba(255,255,255,0.3)'}}>
                <FaGithub size={18} style={{marginRight: '8px'}} /> GitHub Repository
              </a>
            </div>
            
            <div style={{marginTop: '32px', fontSize: '0.85rem', opacity: 0.7, textTransform: 'uppercase', letterSpacing: '0.05em'}}>
              Confidential | Adobe Fund for Design | April 2026
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="container">
          <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '24px'}}>
            <div className="logo" style={{fontSize: '1.25rem'}}>
              ClipSmith<span className="logo-dot"></span>
            </div>
            <p>&copy; 2026 Zareen Fatima. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </>
  );
}

export default App;
