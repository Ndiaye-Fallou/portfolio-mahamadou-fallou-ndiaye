import React, { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import {
  Download,
  Mail,
  ArrowUpRight,
  Code2,
  Terminal,
  Cpu,
  Layers,
  Globe,
  Github,
  Linkedin,
  MapPin,
  Calendar,
  Send,
  CheckCircle2,
  Copy,
  Check,
  Activity,
  Award,
  Sparkles,
  ChevronDown,
  Menu,
  X
} from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

export default function App() {
  const containerRef = useRef(null);
  const heroRef = useRef(null);
  const [navScrolled, setNavScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [contactSent, setContactSent] = useState(false);
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });

  // 1. Download Resume function (generates an authentic, beautifully formatted PDF on the fly)
  const handleDownloadCV = (e) => {
    e.preventDefault();

    // We generate a clean printable HTML document and print/save as PDF or download structured CV
    const printWindow = window.open('', '_blank');
    if (!printWindow) {
      alert("Veuillez autoriser les fenêtres contextuelles pour télécharger le CV.");
      return;
    }

    const cvHtml = `
      <!DOCTYPE html>
      <html lang="fr">
      <head>
        <meta charset="utf-8">
        <title>CV — Mahamadou Fallou Ndiaye</title>
        <style>
          @page { size: A4; margin: 20mm; }
          body { font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif; color: #111; line-height: 1.5; margin: 0; padding: 20px; }
          .header { border-bottom: 3px solid #2563EB; padding-bottom: 15px; margin-bottom: 25px; }
          h1 { margin: 0 0 5px 0; font-size: 26px; color: #111; letter-spacing: -0.5px; }
          .subtitle { font-size: 15px; color: #2563EB; font-weight: bold; text-transform: uppercase; letter-spacing: 1px; }
          .meta { font-size: 13px; color: #555; margin-top: 8px; }
          .section { margin-bottom: 22px; }
          .section-title { font-size: 15px; text-transform: uppercase; letter-spacing: 1.5px; color: #111; border-bottom: 1px solid #ddd; padding-bottom: 4px; margin-bottom: 12px; font-weight: bold; }
          .item { margin-bottom: 14px; }
          .item-header { display: flex; justify-content: space-between; font-weight: bold; font-size: 14px; }
          .item-role { color: #2563EB; }
          .item-company { color: #444; font-weight: normal; font-size: 13px; }
          .item-period { font-size: 12px; color: #666; font-family: monospace; }
          .desc { font-size: 13px; color: #333; margin-top: 4px; }
          .skills-grid { display: grid; grid-template-columns: repeat(2, 1fr); gap: 8px; font-size: 13px; }
          .skill-pill { background: #f0f0f0; padding: 4px 8px; border-radius: 4px; border-left: 3px solid #2563EB; }
        </style>
      </head>
      <body>
        <div class="header">
          <h1>Mahamadou Fallou Ndiaye</h1>
          <div class="subtitle">Développeur Web & Référent Digital Junior</div>
          <div class="meta">Dakar / Remote &bull; mahamadoufalloundiaye@gmail.com &bull; +221 77 884 73 97 &bull; linkedin.com/in/mahamadoufalloundiaye</div>
        </div>
        
        <div class="section">
          <div class="section-title">Profil & Synthèse</div>
          <p class="desc">
            Développeur web full-stack et référent digital junior, passionné par la création d'applications web performantes, modernes et intuitives. J'allie maîtrise technique du code et vision stratégique de la transformation digitale pour concevoir des solutions fiables et valoriser les projets.
          </p>
        </div>

        <div class="section">
          <div class="section-title">Expériences Professionnelles</div>
          <div class="item">
            <div class="item-header">
              <span><span class="item-role">Référent Digital & Webmaster</span> &mdash; <span class="item-company">Projets Digitaux & Solutions Web</span></span>
              <span class="item-period">2023 — Présent</span>
            </div>
            <div class="desc">Optimisation, maintenance et pilotage technique de solutions web interactives. Accompagnement stratégique, support utilisateurs et mise en conformité des bonnes pratiques numériques.</div>
          </div>
          <div class="item">
            <div class="item-header">
              <span><span class="item-role">Développeur Junior</span> &mdash; <span class="item-company">Agence Web & Clients Directs</span></span>
              <span class="item-period">2022 — 2023</span>
            </div>
            <div class="desc">Intégration d'interfaces web adaptatives (UI/UX réactif), création de modules réutilisables, intégration d'API et optimisation des temps de chargement.</div>
          </div>
          <div class="item">
            <div class="item-header">
              <span><span class="item-role">Développeur en Formation & Projets</span> &mdash; <span class="item-company">Projets MERN & JAMstack</span></span>
              <span class="item-period">2021 — 2022</span>
            </div>
            <div class="desc">Conception d'applications web dynamiques complètes, modélisation de bases de données relationnelles et non relationnelles, et déploiements continus.</div>
          </div>
        </div>

        <div class="section">
          <div class="section-title">Compétences Techniques & Stratégiques</div>
          <div class="skills-grid">
            <div class="skill-pill"><strong>React</strong> — Composants réactifs, Hooks, Next.js, SPA (92%)</div>
            <div class="skill-pill"><strong>Node.js</strong> — Architectures API REST, Express, Microservices (88%)</div>
            <div class="skill-pill"><strong>HTML5 / CSS3 / Tailwind CSS</strong> — Intégration pixel-perfect, design systems (95%)</div>
            <div class="skill-pill"><strong>Git & GitHub</strong> — Versioning, CI/CD, collaboration Agile (90%)</div>
            <div class="skill-pill"><strong>Accompagnement Digital</strong> — Stratégie numérique, formation, webmastering (86%)</div>
            <div class="skill-pill"><strong>Outils & BDD</strong> — VS Code, MongoDB, PostgreSQL, Postman, Vite</div>
          </div>
        </div>

        <div class="section">
          <div class="section-title">Formation & Diplômes</div>
          <div class="item">
            <div class="item-header">
              <span>Formation Développement Web & Mobile &mdash; IIBS</span>
              <span class="item-period">2025</span>
            </div>
            <div class="desc">Institut Informatique Business School &bull; Algorithmique, développement frontend & backend, bases de données et travail collaboratif.</div>
          </div>
          <div class="item">
            <div class="item-header">
              <span>Sciences Économiques et de Gestion &mdash; UN-CHK</span>
              <span class="item-period">2023 — 2025</span>
            </div>
            <div class="desc">Université Numérique Cheikh Hamidou Kane &bull; Comptabilité financière, gestion d'entreprise et analyse organisationnelle.</div>
          </div>
          <div class="item">
            <div class="item-header">
              <span>Baccalauréat Scientifique S2</span>
              <span class="item-period">2020 — 2023</span>
            </div>
            <div class="desc">Lycée Mixte Maurice Delafosse &bull; Rigueur scientifique, logique mathématique et modélisation.</div>
          </div>
        </div>
      </body>
      </html>
    `;
    printWindow.document.open();
    printWindow.document.write(cvHtml);
    printWindow.document.close();
    setTimeout(() => {
      printWindow.focus();
      printWindow.print();
    }, 400);
  };

  // 2. Email Copy Helper
  const handleCopyEmail = () => {
    navigator.clipboard.writeText('mahamadoufalloundiaye@gmail.com');
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2500);
  };

  // 3. Contact Form Submission
  const handleFormSubmit = (e) => {
    e.preventDefault();
    setContactSent(true);
    setTimeout(() => {
      setContactSent(false);
      setFormData({ name: '', email: '', message: '' });
    }, 4500);
  };

  // 4. GSAP Animations & Lifecycle as strictly mandated in GEMINI.md
  useEffect(() => {
    // Handle Navbar Morphing using IntersectionObserver / Scroll event
    const handleScroll = () => {
      if (window.scrollY > 80) {
        setNavScrolled(true);
      } else {
        setNavScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });

    // GSAP Context with ctx.revert()
    const ctx = gsap.context(() => {
      // Hero stagger entrance
      const heroTimeline = gsap.timeline({ defaults: { ease: 'power3.out' } });
      heroTimeline
        .from('.hero-badge', { y: -20, opacity: 0, duration: 0.8, delay: 0.1 })
        .from('.hero-avatar', { scale: 0.8, opacity: 0, duration: 0.9 }, '-=0.5')
        .from('.hero-name', { y: 35, opacity: 0, duration: 1 }, '-=0.6')
        .from('.hero-title', { y: 25, opacity: 0, duration: 0.8 }, '-=0.6')
        .from('.hero-stats', { y: 20, opacity: 0, duration: 0.8, stagger: 0.1 }, '-=0.5')
        .from('.hero-cta', { y: 20, opacity: 0, duration: 0.8, stagger: 0.12 }, '-=0.5')
        .from('.hero-scroll-indicator', { opacity: 0, y: 10, duration: 0.8 }, '-=0.3');

      // About Section ScrollTrigger
      gsap.from('.about-title', {
        scrollTrigger: {
          trigger: '.about-section',
          start: 'top 80%',
        },
        x: -40,
        opacity: 0,
        duration: 1,
        ease: 'power3.out',
      });

      gsap.from('.about-content', {
        scrollTrigger: {
          trigger: '.about-section',
          start: 'top 80%',
        },
        x: 40,
        opacity: 0,
        duration: 1,
        ease: 'power3.out',
      });

      // Experience Timeline Cards (alternating left / right slide-in + dot pulse)
      const experienceCards = gsap.utils.toArray('.timeline-card');
      experienceCards.forEach((card, index) => {
        const isEven = index % 2 === 0;
        gsap.from(card, {
          scrollTrigger: {
            trigger: card,
            start: 'top 85%',
          },
          x: isEven ? -60 : 60,
          opacity: 0,
          duration: 0.9,
          ease: 'power3.out',
        });
      });

      const timelineDots = gsap.utils.toArray('.timeline-dot');
      timelineDots.forEach((dot) => {
        gsap.fromTo(
          dot,
          { scale: 0.4, opacity: 0.3 },
          {
            scrollTrigger: {
              trigger: dot,
              start: 'top 80%',
            },
            scale: 1,
            opacity: 1,
            duration: 0.6,
            ease: 'back.out(2)',
          }
        );
      });

      // Skills Section: Dashboard Counters & Circles SVG animation
      const skillProgresses = [92, 88, 95, 90, 86];
      skillProgresses.forEach((value, idx) => {
        const circle = document.querySelector(`.skill-circle-${idx}`);
        const counter = document.querySelector(`.skill-count-${idx}`);

        if (circle) {
          const circumference = 2 * Math.PI * 40; // r=40
          const offset = circumference - (value / 100) * circumference;

          gsap.fromTo(
            circle,
            { strokeDashoffset: circumference },
            {
              scrollTrigger: {
                trigger: '.skills-dashboard',
                start: 'top 80%',
              },
              strokeDashoffset: offset,
              duration: 1.6,
              ease: 'power2.inOut',
            }
          );
        }

        if (counter) {
          const obj = { val: 0 };
          gsap.to(obj, {
            scrollTrigger: {
              trigger: '.skills-dashboard',
              start: 'top 80%',
            },
            val: value,
            duration: 1.6,
            ease: 'power2.out',
            onUpdate: () => {
              counter.textContent = `${Math.round(obj.val)}%`;
            },
          });
        }
      });

      // Education Section: Fade up with stagger 0.15
      gsap.from('.education-card', {
        scrollTrigger: {
          trigger: '.education-section',
          start: 'top 80%',
        },
        y: 40,
        opacity: 0,
        duration: 0.8,
        stagger: 0.15,
        ease: 'power3.out',
      });

      // Contact Section Stagger
      gsap.from('.contact-item', {
        scrollTrigger: {
          trigger: '.contact-section',
          start: 'top 80%',
        },
        y: 30,
        opacity: 0,
        duration: 0.7,
        stagger: 0.1,
        ease: 'power3.out',
      });
    }, containerRef);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      ctx.revert();
    };
  }, []);

  const experiences = [
    {
      period: "2023 — PRÉSENT",
      role: "Référent Digital & Webmaster",
      company: "Projets Digitaux & Solutions Web",
      description:
        "Optimisation, gestion et maintenance de plateformes web complètes. Accompagnement technique des parties prenantes, mise en place des bonnes pratiques numériques et pilotage de la présence digitale.",
      tags: ["Gestion Web", "Accompagnement", "SEO & UX", "Maintenance", "Performances"],
      side: "left",
    },
    {
      period: "2022 — 2023",
      role: "Développeur Junior",
      company: "Agence & Intégration Client",
      description:
        "Développement d'interfaces web réactives et modulaires. Intégration de maquettes haute fidélité, écriture de composants réutilisables et contribution active à la maintenance applicative.",
      tags: ["React", "JavaScript", "Tailwind CSS", "Git / GitHub", "UI Testing"],
      side: "right",
    },
    {
      period: "2021 — 2022",
      role: "Développeur en Formation & Projets",
      company: "Écosystème Web & Autonomie",
      description:
        "Création et déploiement d'applications web dynamiques de bout en bout. Architecture d'API REST, modélisation de bases de données et exploration approfondie des technologies JavaScript modernes.",
      tags: ["Node.js", "Express", "API REST", "Bases de données", "Full-Stack"],
      side: "left",
    },
  ];

  const skills = [
    { name: "React", score: 92, level: "Avancé", subtitle: "Hooks, Router, State Management & Next.js" },
    { name: "Node.js", score: 88, level: "Confirmé", subtitle: "Express, API REST, Middlewares & Auth" },
    { name: "HTML / CSS / Tailwind", score: 95, level: "Expert", subtitle: "Pixel Perfect, Responsive & Design Systems" },
    { name: "Git & GitHub", score: 90, level: "Avancé", subtitle: "Workflow Git, Versioning, CI/CD, Branches" },
    { name: "Accompagnement Digital", score: 86, level: "Confirmé", subtitle: "Audit digital, Formation, Webmastering & Stratégie" },
  ];

  const education = [
    {
      year: "2025",
      degree: "Formation Développement Web & Mobile",
      school: "Institut Informatique Business School (IIBS)",
      detail: "Bases solides en algorithmique, développement frontend & backend, bases de données relationnelles et travail collaboratif.",
    },
    {
      year: "2023 — 2025",
      degree: "Formation en Sciences Économiques et de Gestion",
      school: "Université Numérique Cheikh Hamidou Kane",
      detail: "Etude sur la comptabilté financière et la gestion",
    },
    {
      year: "2020 — 2023",
      degree: "Baccalauréat Scientifique S2",
      school: "Lycée Mixte Maurice Delafosse",
      detail: "Rigueur scientifique, logique mathématique, résolution méthodique de problèmes et passion précoce pour l'informatique.",
    },
  ];

  return (
    <div ref={containerRef} className="relative min-h-screen bg-offwhite text-noir font-sans">

      {/* =========================================================================
          A. NAVBAR — "La Signature Flottante"
          Pill shape fixed at top, transitions to frosted blur background on scroll.
          Mobile responsive with hamburger toggle and collapsible navigation drawer.
          ========================================================================= */}
      <header
        className={`fixed top-3 sm:top-5 left-1/2 -translate-x-1/2 z-50 transition-all duration-300 w-[94%] max-w-5xl ${
          mobileMenuOpen ? 'rounded-[2rem]' : 'rounded-full'
        } px-3.5 sm:px-6 py-2.5 sm:py-3 shadow-xl ${
          navScrolled || mobileMenuOpen
            ? 'bg-offwhite/95 backdrop-blur-xl border border-noir/15 text-noir'
            : 'bg-noir/70 backdrop-blur-md border border-white/10 text-white'
        }`}
      >
        <div className="flex items-center justify-between w-full">
          {/* Brand / Monogram */}
          <a
            href="#hero"
            onClick={() => setMobileMenuOpen(false)}
            className="flex items-center gap-2 group flex-shrink-0"
          >
            <span className="w-8 h-8 rounded-full bg-signal text-white font-mono font-bold flex items-center justify-center text-xs tracking-tighter group-hover:scale-105 transition-transform shadow-sm">
              MN
            </span>
            <span className="font-mono text-xs tracking-wider uppercase font-semibold">
              MFN
            </span>
          </a>

          {/* Desktop Anchors */}
          <nav className="hidden md:flex items-center gap-7 text-xs font-mono tracking-wider uppercase font-medium">
            <a href="#about" className="interactive-lift hover:text-signal transition-colors">
              À propos
            </a>
            <a href="#experience" className="interactive-lift hover:text-signal transition-colors">
              Expérience
            </a>
            <a href="#skills" className="interactive-lift hover:text-signal transition-colors">
              Compétences
            </a>
            <a href="#education" className="interactive-lift hover:text-signal transition-colors">
              Formation
            </a>
            <a href="#contact" className="interactive-lift hover:text-signal transition-colors">
              Contact
            </a>
          </nav>

          {/* Action CTAs: CV Button + Mobile Menu Burger Button */}
          <div className="flex items-center gap-2 sm:gap-3 flex-shrink-0">
            <button
              onClick={handleDownloadCV}
              className="btn-magnetic bg-signal hover:bg-blue-700 text-white px-3 sm:px-4 py-1.5 sm:py-2 rounded-full font-mono text-[11px] sm:text-xs font-bold tracking-wider flex items-center gap-1.5 sm:gap-2 shadow-md hover:shadow-signal/40 flex-shrink-0"
              title="Télécharger le CV au format PDF"
            >
              <Download className="w-3.5 h-3.5" />
              <span>CV.PDF</span>
            </button>

            {/* Mobile Burger Toggle Button */}
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className={`md:hidden p-1.5 sm:p-2 rounded-full border transition-colors flex items-center justify-center flex-shrink-0 ${
                navScrolled || mobileMenuOpen
                  ? 'border-noir/20 bg-noir/5 text-noir hover:bg-noir/10'
                  : 'border-white/20 bg-white/10 text-white hover:bg-white/20'
              }`}
              aria-label={mobileMenuOpen ? "Fermer le menu de navigation" : "Ouvrir le menu de navigation"}
            >
              {mobileMenuOpen ? (
                <X className="w-4 h-4 text-signal" />
              ) : (
                <Menu className="w-4 h-4" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Dropdown Navigation Drawer */}
        {mobileMenuOpen && (
          <nav className="md:hidden pt-3.5 pb-2 mt-3 border-t border-noir/10 flex flex-col gap-1 font-mono text-xs tracking-wider uppercase">
            <a
              href="#about"
              onClick={() => setMobileMenuOpen(false)}
              className="px-3 py-2 rounded-xl hover:bg-signal/10 hover:text-signal transition-colors flex items-center justify-between"
            >
              <span>01 // À propos</span>
              <span className="text-signal">&rarr;</span>
            </a>
            <a
              href="#experience"
              onClick={() => setMobileMenuOpen(false)}
              className="px-3 py-2 rounded-xl hover:bg-signal/10 hover:text-signal transition-colors flex items-center justify-between"
            >
              <span>02 // Expérience</span>
              <span className="text-signal">&rarr;</span>
            </a>
            <a
              href="#skills"
              onClick={() => setMobileMenuOpen(false)}
              className="px-3 py-2 rounded-xl hover:bg-signal/10 hover:text-signal transition-colors flex items-center justify-between"
            >
              <span>03 // Compétences</span>
              <span className="text-signal">&rarr;</span>
            </a>
            <a
              href="#education"
              onClick={() => setMobileMenuOpen(false)}
              className="px-3 py-2 rounded-xl hover:bg-signal/10 hover:text-signal transition-colors flex items-center justify-between"
            >
              <span>04 // Formation</span>
              <span className="text-signal">&rarr;</span>
            </a>
            <a
              href="#contact"
              onClick={() => setMobileMenuOpen(false)}
              className="px-3 py-2 rounded-xl hover:bg-signal/10 hover:text-signal transition-colors flex items-center justify-between"
            >
              <span>05 // Contact</span>
              <span className="text-signal">&rarr;</span>
            </a>
          </nav>
        )}
      </header>

      {/* =========================================================================
          B. SECTION HERO — "La Première Impression"
          Preset C Signal Brut: Massif Sans + Monospace Subtitle + Industrial Grid
          ========================================================================= */}
      <section
        id="hero"
        ref={heroRef}
        className="relative min-h-[100dvh] flex flex-col items-center justify-center bg-noir text-white overflow-hidden px-4 sm:px-6 pt-24 pb-16"
      >
        {/* Cinematic Backdrop with high-tech texture and dark overlay */}
        <div
          className="absolute inset-0 bg-cover bg-center opacity-25 mix-blend-luminosity scale-105"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&w=2000&q=80')`,
          }}
          aria-hidden="true"
        />

        {/* Control Interface Grid Lines & Gradient Overlays */}
        <div className="absolute inset-0 bg-gradient-to-b from-noir/90 via-noir/70 to-noir pointer-events-none" />
        <div
          className="absolute inset-0 pointer-events-none opacity-[0.07]"
          style={{
            backgroundImage:
              'linear-gradient(to right, #ffffff 1px, transparent 1px), linear-gradient(to bottom, #ffffff 1px, transparent 1px)',
            backgroundSize: '60px 60px',
          }}
        />

        {/* Status indicator top */}
        <div className="hero-badge z-10 mb-6 flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-white/5 border border-white/10 backdrop-blur-md">
          <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
          <span className="w-2 h-2 rounded-full bg-emerald-400 -ml-4" />
          <span className="font-mono text-[11px] tracking-widest uppercase text-white/80 font-medium">
            DISPONIBLE POUR DES PROJETS
          </span>
        </div>

        {/* Profile Avatar / Monogram */}
        <div className="hero-avatar z-10 mb-6 relative">
          <div className="w-28 h-28 sm:w-36 sm:h-36 rounded-full border-2 border-signal p-1.5 bg-noir/80 shadow-[0_0_35px_rgba(37,99,235,0.4)]">
            <div className="w-full h-full rounded-full bg-cardDarkSecondary flex flex-col items-center justify-center relative overflow-hidden border border-white/10 group">
              <span className="font-sans font-black text-3xl sm:text-4xl text-paper tracking-tighter">
                MFN
              </span>
              <span className="text-[10px] font-mono text-signal tracking-widest font-semibold mt-0.5">
                FULL-STACK
              </span>
            </div>
          </div>
          <span className="absolute bottom-1 right-1 bg-signal text-white p-1.5 rounded-full border-2 border-noir shadow">
            <Activity className="w-3.5 h-3.5" />
          </span>
        </div>

        {/* Main Name — Massif Sans Grotesk */}
        <h1 className="hero-name z-10 font-sans font-bold text-4xl sm:text-6xl md:text-7xl lg:text-8xl tracking-tighter text-center max-w-5xl text-paper leading-[1.05]">
          Mahamadou Fallou Ndiaye
        </h1>

        {/* Subtitle — Monospace under the name (Pattern Hero Preset C) */}
        <p className="hero-title z-10 font-mono text-signal text-sm sm:text-lg md:text-xl uppercase tracking-[0.25em] text-center mt-4 font-semibold max-w-3xl">
          DÉVELOPPEUR WEB & RÉFÉRENT DIGITAL JUNIOR
        </p>

        {/* Indicators / Stats — 3 stats in monospace */}
        <div className="hero-stats z-10 mt-8 flex flex-wrap items-center justify-center gap-3 sm:gap-6 text-xs sm:text-sm font-mono text-white/75 bg-white/5 border border-white/10 px-6 py-3 rounded-full backdrop-blur-sm">
          <span className="flex items-center gap-1.5">
            <span className="text-signal font-bold">&gt;</span> 1+ ans de pratique web
          </span>
          <span className="text-white/30 hidden sm:inline">|</span>
          <span className="flex items-center gap-1.5">
            <span className="text-signal font-bold">&gt;</span> 5+ projets déployés
          </span>
          <span className="text-white/30 hidden sm:inline">|</span>
          <span className="flex items-center gap-1.5">
            <MapPin className="w-3.5 h-3.5 text-signal" /> Dakar
          </span>
        </div>

        {/* CTA Buttons */}
        <div className="hero-cta z-10 mt-8 flex flex-wrap items-center justify-center gap-4">
          <button
            onClick={handleDownloadCV}
            className="btn-magnetic bg-signal hover:bg-blue-600 text-white font-mono font-bold text-xs sm:text-sm px-6 py-3.5 rounded-full flex items-center gap-2.5 shadow-lg shadow-signal/30"
          >
            <Download className="w-4 h-4" />
            <span>TÉLÉCHARGER LE CV</span>
          </button>
          <a
            href="#contact"
            className="btn-magnetic bg-transparent hover:bg-white/10 text-white border border-white/25 font-mono text-xs sm:text-sm px-6 py-3.5 rounded-full flex items-center gap-2.5 backdrop-blur-sm"
          >
            <Mail className="w-4 h-4 text-signal" />
            <span>ME CONTACTER</span>
          </a>
        </div>

        {/* Bottom Scroll Indicator */}
        <a
          href="#about"
          className="hero-scroll-indicator z-10 absolute bottom-6 flex flex-col items-center gap-1.5 text-white/40 hover:text-signal transition-colors font-mono text-[10px] tracking-widest uppercase"
        >
          <span>DÉCOUVRIR</span>
          <ChevronDown className="w-4 h-4 animate-bounce text-signal" />
        </a>
      </section>

      {/* =========================================================================
          C. SECTION À PROPOS — "Le Manifeste Personnel"
          Two columns on desktop separated by a 2px signal vertical line
          ========================================================================= */}
      <section id="about" className="about-section py-24 px-4 sm:px-6 lg:px-12 max-w-6xl mx-auto">
        <div className="bg-paper/70 border border-noir/10 rounded-[2.5rem] p-8 sm:p-12 md:p-16 shadow-xl backdrop-blur-sm">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12 items-center">

            {/* Left Column: Title in dramatic DM Serif Display */}
            <div className="about-title md:col-span-5 flex flex-col justify-center">
              <span className="font-mono text-signal text-xs font-bold uppercase tracking-widest mb-3 flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-signal" />
                SECTION 01 // MANIFESTE
              </span>
              <h2 className="font-serif italic text-4xl sm:text-5xl md:text-6xl text-noir leading-[1.1]">
                À propos
              </h2>
              <p className="font-mono text-xs text-noir/50 mt-4 uppercase tracking-wider">
                Vision &bull; Architecture &bull; Impact Digital
              </p>
            </div>

            {/* Vertical Accent Line (Desktop) */}
            <div className="hidden md:block md:col-span-1 self-stretch">
              <div className="w-[2px] h-full bg-signal mx-auto opacity-70" />
            </div>

            {/* Horizontal line for mobile */}
            <div className="block md:hidden w-full h-[2px] bg-signal/50 my-2" />

            {/* Right Column: User Bio in Space Grotesk 18-20px */}
            <div className="about-content md:col-span-6 space-y-6">
              <p className="font-sans text-lg sm:text-xl text-noir/90 leading-relaxed font-normal">
                Développeur web full-stack et référent digital junior, passionné par la création d'applications web performantes, modernes et intuitives. J'allie maîtrise technique du code et vision stratégique de la transformation digitale pour concevoir des solutions fiables et valoriser les projets.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-4 border-t border-noir/10 font-mono text-xs">
                <div className="bg-surface/80 p-3.5 rounded-xl border border-noir/10">
                  <div className="text-signal font-bold mb-1">01. FULL-STACK</div>
                  <div className="text-noir/70 text-[11px]">De la logique backend aux interfaces fluides.</div>
                </div>
                <div className="bg-surface/80 p-3.5 rounded-xl border border-noir/10">
                  <div className="text-signal font-bold mb-1">02. RÉFÉRENT DIGITAL</div>
                  <div className="text-noir/70 text-[11px]">Pédagogie, rigueur et bonnes pratiques web.</div>
                </div>
                <div className="bg-surface/80 p-3.5 rounded-xl border border-noir/10">
                  <div className="text-signal font-bold mb-1">03. PERFORMANCE</div>
                  <div className="text-noir/70 text-[11px]">Code structuré, maintenable et rapide.</div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* =========================================================================
          D. EXPÉRIENCE — "La Timeline Vivante"
          Vertical timeline with central accent line and alternating cards
          ========================================================================= */}
      <section id="experience" className="experience-section py-24 px-4 sm:px-6 lg:px-12 max-w-6xl mx-auto">

        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="font-mono text-signal text-xs font-bold uppercase tracking-widest inline-flex items-center gap-2 px-3 py-1 bg-signal/10 rounded-full">
            <Calendar className="w-3.5 h-3.5" />
            SECTION 02 // PARCOURS
          </span>
          <h2 className="font-sans font-bold text-3xl sm:text-5xl text-noir tracking-tight mt-3">
            Expériences Principales
          </h2>
          <p className="font-mono text-xs text-noir/60 mt-2 max-w-md mx-auto uppercase">
            Trajectoire professionnelle & responsabilités clés
          </p>
        </div>

        {/* Timeline Container */}
        <div className="relative">
          {/* Central Line for Desktop, Left Line for Mobile */}
          <div className="absolute left-6 md:left-1/2 top-4 bottom-4 w-[2px] bg-signal/30 -translate-x-1/2" />

          <div className="space-y-12 md:space-y-16">
            {experiences.map((exp, idx) => {
              const isEven = idx % 2 === 0;
              return (
                <div
                  key={idx}
                  className={`relative flex flex-col md:flex-row items-center ${isEven ? 'md:flex-row-reverse' : ''
                    }`}
                >
                  {/* Timeline Dot with Pulse Effect */}
                  <div className="timeline-dot absolute left-6 md:left-1/2 -translate-x-1/2 w-4 h-4 rounded-full bg-signal ring-4 ring-signal/25 z-20 shadow-md" />

                  {/* Empty spacer for desktop symmetry */}
                  <div className="hidden md:block md:w-1/2" />

                  {/* Experience Card */}
                  <div
                    className={`timeline-card w-full pl-14 md:pl-0 md:w-1/2 ${isEven ? 'md:pr-12' : 'md:pl-12'
                      }`}
                  >
                    <div className="bg-surface rounded-[2rem] p-6 sm:p-8 border border-noir/10 shadow-lg card-hover-lift">
                      <div className="flex flex-wrap items-center justify-between gap-2 mb-3">
                        <span className="font-mono font-bold text-xs text-signal tracking-widest px-2.5 py-1 bg-signal/10 rounded-full">
                          {exp.period}
                        </span>
                        <span className="font-mono text-[11px] text-noir/40 uppercase">
                          // EXP.0{idx + 1}
                        </span>
                      </div>

                      <h3 className="font-sans font-bold text-xl sm:text-2xl text-noir">
                        {exp.role}
                      </h3>
                      <div className="text-noir/60 font-sans font-medium text-sm mt-0.5 mb-4">
                        {exp.company}
                      </div>

                      <p className="font-sans text-noir/80 text-sm leading-relaxed mb-5">
                        {exp.description}
                      </p>

                      {/* Tech Pills */}
                      <div className="flex flex-wrap gap-2 pt-3 border-t border-noir/5 font-mono text-[11px]">
                        {exp.tags.map((tag, tIdx) => (
                          <span
                            key={tIdx}
                            className="bg-paper text-noir/80 px-2.5 py-1 rounded-full border border-noir/10"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* =========================================================================
          E. COMPÉTENCES — "Le Tableau de Bord"
          High-Tech Control Center: Circular SVG gauges, live GSAP counters
          ========================================================================= */}
      <section id="skills" className="skills-section py-24 px-4 sm:px-6 lg:px-12 max-w-6xl mx-auto">
        <div className="skills-dashboard bg-cardDark text-white rounded-[3rem] p-8 sm:p-12 md:p-16 border border-white/10 shadow-2xl relative overflow-hidden">

          {/* Subtle Grid overlay inside dashboard */}
          <div
            className="absolute inset-0 pointer-events-none opacity-5"
            style={{
              backgroundImage:
                'linear-gradient(to right, #ffffff 1px, transparent 1px), linear-gradient(to bottom, #ffffff 1px, transparent 1px)',
              backgroundSize: '40px 40px',
            }}
          />

          <div className="relative z-10">
            {/* Header */}
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12 pb-8 border-b border-white/10">
              <div>
                <span className="font-mono text-signal text-xs font-bold uppercase tracking-widest inline-flex items-center gap-2 px-3 py-1 bg-signal/20 rounded-full border border-signal/30">
                  <Cpu className="w-3.5 h-3.5" />
                  SECTION 03 // MATRICE TECHNIQUE
                </span>
                <h2 className="font-sans font-bold text-3xl sm:text-5xl text-white tracking-tight mt-3">
                  Tableau de Bord des Compétences
                </h2>
              </div>
              <div className="font-mono text-xs text-white/50 space-y-1">
                <div>MODE: SIGNAL_BRUT</div>
                <div>5 MATRICES PRINCIPALES ANALYSÉES</div>
              </div>
            </div>

            {/* Mastery Grid: Circular SVG Progress Indicators */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {skills.map((skill, idx) => (
                <div
                  key={idx}
                  className="bg-cardDarkSecondary rounded-[2rem] p-6 border border-white/10 card-hover-lift flex flex-col justify-between"
                >
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <span className="font-mono text-[10px] text-signal font-bold uppercase tracking-widest">
                        METRIC_0{idx + 1}
                      </span>
                      <h3 className="font-sans font-bold text-xl text-white mt-1">
                        {skill.name}
                      </h3>
                      <p className="font-sans text-xs text-white/60 mt-1 leading-snug">
                        {skill.subtitle}
                      </p>
                    </div>

                    {/* Circular SVG Gauge */}
                    <div className="relative w-20 h-20 flex-shrink-0 flex items-center justify-center">
                      <svg className="w-20 h-20 -rotate-90" viewBox="0 0 100 100">
                        {/* Background track */}
                        <circle
                          cx="50"
                          cy="50"
                          r="40"
                          className="stroke-white/10"
                          strokeWidth="8"
                          fill="transparent"
                        />
                        {/* Animated Signal Progress Bar */}
                        <circle
                          cx="50"
                          cy="50"
                          r="40"
                          className={`stroke-signal skill-circle-${idx}`}
                          strokeWidth="8"
                          strokeDasharray={2 * Math.PI * 40}
                          strokeDashoffset={2 * Math.PI * 40}
                          strokeLinecap="round"
                          fill="transparent"
                        />
                      </svg>
                      {/* Counter Text */}
                      <span
                        className={`skill-count-${idx} absolute font-mono font-bold text-sm text-white`}
                      >
                        0%
                      </span>
                    </div>
                  </div>

                  <div className="mt-5 pt-4 border-t border-white/10 flex items-center justify-between text-xs font-mono">
                    <span className="text-white/40">Statut:</span>
                    <span className="text-signal font-semibold uppercase">{skill.level}</span>
                  </div>
                </div>
              ))}

              {/* Extra telemetry panel (Full-Stack Toolkit) */}
              <div className="bg-gradient-to-br from-signal/20 to-cardDarkSecondary rounded-[2rem] p-6 border border-signal/40 card-hover-lift flex flex-col justify-between">
                <div>
                  <div className="flex items-center gap-2 text-signal font-mono text-[10px] font-bold uppercase tracking-widest">
                    <Terminal className="w-3.5 h-3.5" /> ENVIRONNEMENT & OUTILS
                  </div>
                  <h3 className="font-sans font-bold text-xl text-white mt-1">
                    Écosystème & Workflow
                  </h3>
                  <div className="flex flex-wrap gap-1.5 mt-4 font-mono text-[11px]">
                    <span className="bg-white/10 px-2.5 py-1 rounded-md">Vite.js</span>
                    <span className="bg-white/10 px-2.5 py-1 rounded-md">TypeScript</span>
                    <span className="bg-white/10 px-2.5 py-1 rounded-md">REST API</span>
                    <span className="bg-white/10 px-2.5 py-1 rounded-md">PostgreSQL</span>
                    <span className="bg-white/10 px-2.5 py-1 rounded-md">Linux CLI</span>
                    <span className="bg-white/10 px-2.5 py-1 rounded-md">Figma</span>
                    <span className="bg-white/10 px-2.5 py-1 rounded-md">SEO Technique</span>
                  </div>
                </div>

                <div className="mt-4 pt-3 border-t border-white/10 flex items-center justify-between text-xs font-mono text-emerald-400">
                  <span>Stack Status</span>
                  <span>100% OPÉRATIONNEL</span>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* =========================================================================
          F. FORMATION — "Les Fondations"
          Stacked vertical cards in dark tone with mono period & bold titles
          ========================================================================= */}
      <section id="education" className="education-section py-24 px-4 sm:px-6 lg:px-12 max-w-5xl mx-auto">
        <div className="text-center mb-16">
          <span className="font-mono text-signal text-xs font-bold uppercase tracking-widest inline-flex items-center gap-2 px-3 py-1 bg-signal/10 rounded-full">
            <Award className="w-3.5 h-3.5" />
            SECTION 04 // DIPLÔMES & CERTIFICATIONS
          </span>
          <h2 className="font-sans font-bold text-3xl sm:text-5xl text-noir tracking-tight mt-3">
            Formation
          </h2>
          <p className="font-mono text-xs text-noir/60 mt-2 max-w-md mx-auto uppercase">
            Socle académique et apprentissage continu
          </p>
        </div>

        <div className="space-y-6">
          {education.map((item, idx) => (
            <div
              key={idx}
              className="education-card bg-paper rounded-[2rem] p-6 sm:p-8 border border-noir/10 shadow-md card-hover-lift flex flex-col md:flex-row md:items-center justify-between gap-6"
            >
              <div className="space-y-2">
                <span className="font-mono font-bold text-xs text-signal tracking-widest px-3 py-1 bg-signal/10 rounded-full inline-block">
                  {item.year}
                </span>
                <h3 className="font-sans font-bold text-xl sm:text-2xl text-noir">
                  {item.degree}
                </h3>
                <div className="text-noir/60 font-sans font-medium text-sm">
                  {item.school}
                </div>
                <p className="text-noir/80 text-sm font-sans pt-1">
                  {item.detail}
                </p>
              </div>

              <div className="flex-shrink-0 self-start md:self-center">
                <div className="w-12 h-12 rounded-full bg-white border border-noir/10 flex items-center justify-center text-signal shadow-sm">
                  <CheckCircle2 className="w-6 h-6" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* =========================================================================
          G. CONTACT — "Le Pont"
          Full-width interactive contact hub, direct links, and functional messaging
          ========================================================================= */}
      <section id="contact" className="contact-section py-24 px-4 sm:px-6 lg:px-12 max-w-6xl mx-auto">
        <div className="bg-paper rounded-[3rem] border border-noir/10 p-8 sm:p-14 md:p-16 shadow-2xl relative">

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">

            {/* Left Column: Dramatic invite */}
            <div className="lg:col-span-5 space-y-6">
              <span className="font-mono text-signal text-xs font-bold uppercase tracking-widest inline-flex items-center gap-2 px-3 py-1 bg-signal/10 rounded-full">
                <Mail className="w-3.5 h-3.5" />
                SECTION 05 // CONNEXION DIRECTE
              </span>
              <h2 className="font-serif italic text-4xl sm:text-6xl text-noir leading-[1.08]">
                Travaillons ensemble
              </h2>
              <p className="font-sans text-noir/80 text-base leading-relaxed">
                Un projet d'application web, un besoin en référencement digital ou une opportunité de collaboration ? Échangeons dès aujourd'hui.
              </p>

              {/* Direct Channels */}
              <div className="space-y-3 pt-4">
                {/* Email with copy button */}
                <div className="contact-item bg-surface rounded-[1.5rem] p-4 border border-noir/10 flex items-center justify-between gap-3 shadow-sm card-hover-lift">
                  <div className="flex items-center gap-3 overflow-hidden">
                    <div className="w-10 h-10 rounded-full bg-signal/10 text-signal flex items-center justify-center flex-shrink-0">
                      <Mail className="w-5 h-5" />
                    </div>
                    <div className="overflow-hidden">
                      <div className="text-[10px] font-mono text-noir/50 uppercase">Email</div>
                      <div className="font-mono text-xs sm:text-sm font-semibold text-noir truncate">
                        mahamadoufalloundiaye@gmail.com
                      </div>
                    </div>
                  </div>
                  <button
                    onClick={handleCopyEmail}
                    className="p-2 rounded-xl bg-paper hover:bg-signal hover:text-white transition-colors flex-shrink-0"
                    title="Copier l'adresse email"
                  >
                    {copiedEmail ? <Check className="w-4 h-4 text-emerald-600" /> : <Copy className="w-4 h-4" />}
                  </button>
                </div>

                {/* LinkedIn */}
                <a
                  href="https://www.linkedin.com/in/mahamadoufalloundiaye"
                  target="_blank"
                  rel="noreferrer"
                  className="contact-item bg-surface rounded-[1.5rem] p-4 border border-noir/10 flex items-center justify-between gap-3 shadow-sm card-hover-lift group"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-signal/10 text-signal flex items-center justify-center flex-shrink-0 group-hover:bg-signal group-hover:text-white transition-colors">
                      <Linkedin className="w-5 h-5" />
                    </div>
                    <div>
                      <div className="text-[10px] font-mono text-noir/50 uppercase">Réseau Professionnel</div>
                      <div className="font-sans text-sm font-bold text-noir group-hover:text-signal transition-colors">
                        Mahamadou Fallou Ndiaye
                      </div>
                    </div>
                  </div>
                  <ArrowUpRight className="w-4 h-4 text-noir/40 group-hover:text-signal transition-colors" />
                </a>

                {/* GitHub */}
                <a
                  href="https://github.com/Ndiaye-Fallou"
                  target="_blank"
                  rel="noreferrer"
                  className="contact-item bg-surface rounded-[1.5rem] p-4 border border-noir/10 flex items-center justify-between gap-3 shadow-sm card-hover-lift group"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-signal/10 text-signal flex items-center justify-center flex-shrink-0 group-hover:bg-signal group-hover:text-white transition-colors">
                      <Github className="w-5 h-5" />
                    </div>
                    <div>
                      <div className="text-[10px] font-mono text-noir/50 uppercase">Code & Dépôts</div>
                      <div className="font-sans text-sm font-bold text-noir group-hover:text-signal transition-colors">
                        github.com/Ndiaye-fallou
                      </div>
                    </div>
                  </div>
                  <ArrowUpRight className="w-4 h-4 text-noir/40 group-hover:text-signal transition-colors" />
                </a>
              </div>
            </div>

            {/* Right Column: Interactive Contact Form */}
            <div className="lg:col-span-7 bg-surface rounded-[2.5rem] p-8 sm:p-10 border border-noir/10 shadow-lg">
              <h3 className="font-sans font-bold text-2xl text-noir mb-2">
                Envoyer un message direct
              </h3>
              <p className="font-mono text-xs text-noir/50 uppercase tracking-wider mb-6">
                Temps de réponse moyen: &lt; 24h
              </p>

              {contactSent ? (
                <div className="bg-emerald-50 border border-emerald-300 rounded-[2rem] p-8 text-center space-y-3 animate-fade-in">
                  <div className="w-12 h-12 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto">
                    <CheckCircle2 className="w-6 h-6" />
                  </div>
                  <h4 className="font-sans font-bold text-lg text-emerald-900">
                    Message transmis avec succès !
                  </h4>
                  <p className="font-sans text-xs text-emerald-800">
                    Merci pour votre prise de contact. Je vous répondrai dans les plus brefs délais.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleFormSubmit} className="space-y-4">
                  <div>
                    <label className="block font-mono text-xs text-noir/70 uppercase mb-1.5 font-semibold">
                      Votre nom & prénom *
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="Ex: Amadou Ba"
                      className="w-full bg-offwhite border border-noir/15 rounded-xl px-4 py-3 text-sm font-sans focus:outline-none focus:border-signal transition-colors"
                    />
                  </div>

                  <div>
                    <label className="block font-mono text-xs text-noir/70 uppercase mb-1.5 font-semibold">
                      Votre email professionnel *
                    </label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="nom@entreprise.com"
                      className="w-full bg-offwhite border border-noir/15 rounded-xl px-4 py-3 text-sm font-sans focus:outline-none focus:border-signal transition-colors"
                    />
                  </div>

                  <div>
                    <label className="block font-mono text-xs text-noir/70 uppercase mb-1.5 font-semibold">
                      Message / Projet *
                    </label>
                    <textarea
                      required
                      rows={4}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Décrivez brièvement votre besoin ou le cadre de votre proposition..."
                      className="w-full bg-offwhite border border-noir/15 rounded-xl px-4 py-3 text-sm font-sans focus:outline-none focus:border-signal transition-colors resize-none"
                    />
                  </div>

                  <div className="pt-2 flex flex-col sm:flex-row items-center gap-4 justify-between">
                    <button
                      type="submit"
                      className="btn-magnetic w-full sm:w-auto bg-signal hover:bg-blue-600 text-white font-mono font-bold text-xs uppercase px-8 py-4 rounded-full flex items-center justify-center gap-2 shadow-lg shadow-signal/30"
                    >
                      <Send className="w-4 h-4" />
                      <span>TRANSMETTRE LE MESSAGE</span>
                    </button>

                    <button
                      type="button"
                      onClick={handleDownloadCV}
                      className="interactive-lift text-xs font-mono text-noir/70 hover:text-signal flex items-center gap-1.5"
                    >
                      <Download className="w-3.5 h-3.5 text-signal" />
                      <span>Ou télécharger mon CV</span>
                    </button>
                  </div>
                </form>
              )}
            </div>

          </div>

        </div>
      </section>

      {/* =========================================================================
          H. PIED DE PAGE
          Deep dark background #111111, rounded-t-[4rem], online indicator
          ========================================================================= */}
      <footer className="bg-noir text-white rounded-t-[4rem] px-6 sm:px-12 pt-16 pb-12 mt-12 border-t border-white/10">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8 pb-10 border-b border-white/10">

          {/* Identity */}
          <div className="text-center md:text-left">
            <div className="font-sans font-bold text-2xl text-paper tracking-tight">
              Mahamadou Fallou Ndiaye
            </div>
            <div className="font-mono text-xs text-signal tracking-widest uppercase mt-1">
              // Développeur Web Full-Stack & Référent Digital Junior
            </div>
            <div className="font-mono text-[11px] text-white/50 mt-2">
              Fait avec le vibe coding &bull; 2026
            </div>
          </div>

          {/* Online Pulsing Indicator in Monospace as mandated in GEMINI.md */}
          <div className="flex items-center gap-3 px-5 py-2.5 rounded-full bg-white/5 border border-white/10">
            <span className="relative flex h-3 w-3">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
              <span className="relative inline-flex rounded-full h-3 w-3 bg-emerald-500" />
            </span>
            <span className="font-mono text-xs uppercase tracking-wider text-white/90 font-medium">
              STATUS: EN LIGNE // PRÊT POUR NOUVEAU DÉFI
            </span>
          </div>

          {/* Quick return top */}
          <a
            href="#hero"
            className="interactive-lift font-mono text-xs text-white/60 hover:text-signal uppercase tracking-wider flex items-center gap-1"
          >
            Haut de page &uarr;
          </a>
        </div>

        <div className="max-w-6xl mx-auto mt-6 text-center text-xs font-mono text-white/40">
          Système Haute Fidélité &bull; React 19 &bull; GSAP Animation Suite &bull; Preset C Signal Brut
        </div>
      </footer>

    </div>
  );
}

