import { useState, useEffect, useRef } from "react";
import MinhaFoto from "./assets/Eu.png";

const TEXTOS = {
  PT: {
    nav: ["Início", "Sobre", "Experiência", "Projetos", "Skills", "Contato"],
    hero: {
      ola: "OLÁ, EU SOU",
      cargo: "Dev Fullstack",
      sub: "Desenvolvedor de Software",
      desc: "Desenvolvedor Fullstack com experiência em criar soluções eficientes, escaláveis e com foco em performance e experiência do usuário.",
      btnProjetos: "Ver Projetos →",
      btnSocial: "CONTATO / REDES",
      localizacao: "LOCALIZAÇÃO"
    },
    sobre: {
      titulo: "SOBRE MIM",
      sub: "Um pouco sobre mim",
      p1: "Minha jornada na tecnologia começou com a curiosidade e hoje segue com propósito. Tenho experiência sólida em desenvolvimento Fullstack com frameworks modernos e foco em Clean Code e integração de APIs.",
      p2: "Atualmente, curso Intercâmbio Acadêmico na Universidade de Coimbra (FCTUC), onde aprofundo meus conhecimentos em engenharia de software sob uma perspectiva global.",
      jornada: "MINHA JORNADA",
      impacto: "Explorando ideias. Construindo soluções. Gerando impacto."
    },
    projetos: {
      titulo: "PROJETOS EM DESTAQUE",
      sub: "Projetos Recentes"
    },
    skills: {
      titulo: "HABILIDADES"
    },
    contato: {
      titulo: "Vamos trabalhar juntos?",
      sub: "Estou sempre aberto a novas oportunidades e projetos interessantes.",
      footer: "Todos os direitos reservados.",
      feito: "Feito com"
    }
  },
  EN: {
    nav: ["Home", "About", "Experience", "Projects", "Skills", "Contact"],
    hero: {
      ola: "HELLO, I AM",
      cargo: "Fullstack Dev",
      sub: "Software Developer",
      desc: "Fullstack Developer experienced in creating efficient, scalable solutions focused on performance and user experience.",
      btnProjetos: "See Projects →",
      btnSocial: "CONTACT / SOCIAL",
      localizacao: "LOCATION"
    },
    sobre: {
      titulo: "ABOUT ME",
      sub: "A bit about me",
      p1: "My journey in technology started with curiosity and today follows with purpose. I have solid experience in Fullstack development with modern frameworks and a focus on Clean Code and API integration.",
      p2: "Currently, I am on an Academic Exchange at the University of Coimbra (FCTUC), where I deepen my knowledge in software engineering from a global perspective.",
      jornada: "MY JOURNEY",
      impacto: "Exploring ideas. Building solutions. Generating impact."
    },
    projetos: {
      titulo: "FEATURED PROJECTS",
      sub: "Recent Projects"
    },
    skills: {
      titulo: "SKILLS"
    },
    contato: {
      titulo: "Let's work together?",
      sub: "I'm always open to new opportunities and interesting projects.",
      footer: "All rights reserved.",
      feito: "Made with"
    }
  }
};

const TECNOLOGIAS = [
  { nome: "React", icone: "⚛️" },
  { nome: "Angular", icone: "🅰️" },
  { nome: "Laravel", icone: "🐘" },
  { nome: "C#", icone: "💠" },
  { nome: ".NET", icone: "🔷" },
  { nome: "Node.js", icone: "🟢" },
  { nome: "MySQL", icone: "🐬" },
  { nome: "Docker", icone: "🐳" },
  { nome: "REST APIs", icone: "🔗" },
  { nome: "TypeScript", icone: "🔵" },
  { nome: "SQLLite", icone: "🌊" },
  { nome: "IA", icone: "🤖" },
  { nome: "Git", icone: "G" },
  { nome: "E muitas outras...", icone: "+" }
];

const PROJETOS = [
  {
    nome: "Sistema de Gestão de Frotas",
    tags: ["C#", "VB.NET", "MySQL", "ERP"],
    desc: "Atuação no desenvolvimento e manutenção de sistemas voltados ao gerenciamento de frotas, controle de veículos, abastecimento e ERPs corporativos.",
    icone: "🚛",
  },
  {
    nome: "Integrações e APIs REST",
    tags: [".NET", "REST API", "MySQL"],
    desc: "Desenvolvimento de integrações entre sistemas de abastecimento e plataformas ERP utilizando APIs REST e automação de processos.",
    icone: "🔗",
  },
  {
    nome: "Banco de Dados e Performance",
    tags: ["MySQL", "Procedures", "Triggers"],
    desc: "Criação e otimização de procedures, triggers e consultas SQL focadas em desempenho, integridade de dados e automação.",
    icone: "🗄️",
  },
];

const LINHA_DO_TEMPO = [
  { ano: "Jan 2019 – Dez 2021", titulo: "Técnico em Informática Integrado", sub: "IFFAR – Júlio de Castilhos" },
  { ano: "Nov 2021 – Dez 2022", titulo: "Analista de Suporte", sub: "Appelsoft" },
  { ano: "Dez 2022 – Fev 2023", titulo: "Testador de Software", sub: "Appelsoft" },
  { ano: "Mar 2023 – Ago 2023", titulo: "Programador Web", sub: "Appelsoft" },
  { ano: "Ago 2023 – Dez 2024", titulo: "Testador de Software", sub: "Appelsoft" },
  { ano: "Fev 2024 – Nov 2028", titulo: "Bacharelado em Ciência da Computação", sub: "Unicruz (Prouni)" },
  { ano: "Dez 2024 – Jan 2026", titulo: "Programador Desktop", sub: "Appelsoft" },
  { ano: "Fev 2026 – Jul 2026", titulo: "Intercâmbio Acadêmico", sub: "Universidade de Coimbra, Portugal" },
];

const DADOS_HABILIDADES = [
  { rotulo: "Backend (.NET / APIs)", valor: 96 },
  { rotulo: "Databases (MySQL / SQL)", valor: 95 },
  { rotulo: "ERP & Business Systems", valor: 93 },
  { rotulo: "System Integrations", valor: 92 },
  { rotulo: "Frontend Web", valor: 87 },
  { rotulo: "Desktop Development", valor: 90 },
  { rotulo: "DevOps & Infrastructure", valor: 78 },
  { rotulo: "Data Science & AI", valor: 82 },
];

function useNoCampoDeVisao(threshold = 0.15) {
  const ref = useRef(null);
  const [visivel, setVisivel] = useState(false);
  useEffect(() => {
    const obs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) setVisivel(true); },
      { threshold }
    );
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, [threshold]);
  return [ref, visivel];
}

function EfeitoSurgir({ children, delay = 0, className = "" }) {
  const [ref, visivel] = useNoCampoDeVisao();
  return (
    <div
      ref={ref}
      className={className}
      style={{
        opacity: visivel ? 1 : 0,
        transform: visivel ? "translateY(0)" : "translateY(32px)",
        transition: `opacity 0.7s ease ${delay}s, transform 0.7s ease ${delay}s`,
      }}
    >
      {children}
    </div>
  );
}

function Particulas() {
  const particulas = Array.from({ length: 30 }, (_, i) => ({
    id: i,
    left: Math.random() * 100,
    top: Math.random() * 100,
    size: Math.random() * 3 + 1,
    delay: Math.random() * 4,
    duration: Math.random() * 4 + 3,
  }));
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none" style={{ position: "absolute", width: "100%", height: "100%" }}>
      {particulas.map((p) => (
        <div
          key={p.id}
          style={{
            position: "absolute",
            left: `${p.left}%`,
            top: `${p.top}%`,
            width: p.size,
            height: p.size,
            borderRadius: "50%",
            background: "#10b981",
            opacity: 0.25,
            animation: `float ${p.duration}s ease-in-out ${p.delay}s infinite alternate`,
          }}
        />
      ))}
    </div>
  );
}

export default function AndersonPortfolio() {
  const [abaAtiva, setAbaAtiva] = useState("Início");
  const [rolou, setRolou] = useState(false);
  const [idioma, setIdioma] = useState("PT");
  const [habilidadesVisiveis, setHabilidadesVisiveis] = useState(false);
  const refHabilidades = useRef(null);

  const t = TEXTOS[idioma];

  useEffect(() => {
    const aoRolar = () => setRolou(window.scrollY > 40);
    window.addEventListener("scroll", aoRolar);
    return () => window.removeEventListener("scroll", aoRolar);
  }, []);

  const rolarParaSecao = (id, nomeAba) => {
    setAbaAtiva(nomeAba);
    const elemento = document.getElementById(id);
    if (elemento) {
      const topo = elemento.offsetTop - 80;
      window.scrollTo({ top: topo, behavior: "smooth" });
    }
  };

  const baixarCurriculo = () => {
    const link = document.createElement("a");
    link.href = "https://drive.google.com/uc?export=download&id=1Rg5koyG_JXTYoa7oFRikuUTeFXJVPVsV";
    link.download = "Anderson-CV.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  useEffect(() => {
    const obs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) setHabilidadesVisiveis(true); },
      { threshold: 0.2 }
    );
    if (refHabilidades.current) obs.observe(refHabilidades.current);
    return () => obs.disconnect();
  }, []);

  return (
    <div style={{
      minHeight: "100vh",
      width: "100%",
      background: "#050a10",
      color: "#fff",
      fontFamily: "'Syne', sans-serif",
      overflowX: "hidden",
      position: "relative",
    }}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Syne:wght@400;600;700;800&family=JetBrains+Mono:wght@400;600&display=swap');
        
        html, body, #root { 
          margin: 0 !important; 
          padding: 0 !important; 
          width: 100% !important; 
          max-width: none !important;
          min-height: 100vh !important;
          background: #050a10 !important;
        }

        * { box-sizing: border-box; margin: 0; padding: 0; }
        
        @keyframes float { 0% { transform: translateY(0px); } 100% { transform: translateY(-18px); } }
        @keyframes spin-slow { from { transform: rotate(0deg); } to { transform: rotate(360deg); } }
        @keyframes spin-rev { from { transform: rotate(0deg); } to { transform: rotate(-360deg); } }
        @keyframes pulse-glow { 0%, 100% { opacity: 0.3; transform: scale(1); } 50% { opacity: 0.6; transform: scale(1.05); } }
        @keyframes blink { 0%, 100% { opacity: 1; } 50% { opacity: 0; } }
        @keyframes fadeUp { from { opacity: 0; transform: translateY(20px); } to { opacity: 1; transform: translateY(0); } }

        .nav-link {
          position: relative;
          color: rgba(255,255,255,0.6);
          font-size: 0.9rem;
          font-weight: 600;
          cursor: pointer;
          transition: color 0.3s;
          background: none; border: none;
        }
        .nav-link::after {
          content: ''; position: absolute; bottom: -4px; left: 0; width: 0; height: 2px;
          background: #10b981; transition: width 0.3s;
        }
        .nav-link:hover, .nav-link.active { color: #10b981; }
        .nav-link:hover::after, .nav-link.active::after { width: 100%; }

        .btn-primary {
          display: inline-flex; align-items: center; gap: 8px; padding: 14px 28px;
          border-radius: 14px; background: #10b981; color: #000; font-weight: 700;
          cursor: pointer; border: none; transition: all 0.2s;
          text-decoration: none;
          max-width: 100%;
          overflow-wrap: break-word;
        }
        .btn-primary:hover { transform: translateY(-2px); box-shadow: 0 16px 40px rgba(16,185,129,0.35); }

        .btn-outline {
          display: inline-flex; align-items: center; gap: 8px; padding: 14px 28px;
          border-radius: 14px; background: rgba(255,255,255,0.05); color: #fff;
          font-weight: 600; cursor: pointer; border: 1px solid rgba(255,255,255,0.12);
          transition: all 0.2s;
          text-decoration: none;
        }
        .btn-outline:hover { background: rgba(255,255,255,0.1); border-color: rgba(16,185,129,0.4); }

        .project-card {
          display: flex; flex-direction: column; height: 100%;
          border-radius: 24px; border: 1px solid rgba(255,255,255,0.08);
          background: rgba(255,255,255,0.03); padding: 32px; transition: all 0.4s;
        }
        .project-card:hover { transform: translateY(-8px); border-color: rgba(16,185,129,0.3); }

        ::-webkit-scrollbar { width: 6px; }
        ::-webkit-scrollbar-thumb { background: rgba(16,185,129,0.3); border-radius: 3px; }

        .grid-hero { display: grid; grid-template-columns: 1fr 1fr; gap: 60px; }
        .grid-sobre { display: grid; grid-template-columns: 1fr 1fr 1fr; gap: 24px; }
        .grid-projetos { display: grid; grid-template-columns: repeat(3, 1fr); gap: 24px; }
        .grid-skills { display: grid; grid-template-columns: 1fr 1fr; gap: 40px; }
        .header-container { display: flex; align-items: center; justify-content: space-between; max-width: 1200px; margin: 0 auto; padding: 0 24px; height: 72px; }
        .hero-content { display: block; }
        .hero-btns { display: flex; gap: 12px; flex-wrap: wrap; margin-bottom: 36px; animation: fadeUp 0.7s 0.4s ease both; justify-content: flex-start; }
        .hero-img-box { display: flex; justify-content: center; align-items: center; position: relative; height: 520px; }
        .nav-menu { display: flex; gap: 32px; align-items: center; }
        .hero-social { display: flex; gap: 10px; justify-content: flex-start; }

        @media (max-width: 900px) {
          .grid-hero { grid-template-columns: 1fr; text-align: center; padding-top: 180px !important; }
          .grid-sobre { grid-template-columns: 1fr; }
          .grid-projetos { grid-template-columns: 1fr; }
          .grid-skills { grid-template-columns: 1fr; }
          .header-container { flex-direction: column; height: auto !important; padding: 16px 24px !important; gap: 16px; }
          .hero-content { display: flex; flex-direction: column; align-items: center; }
          .hero-btns { justify-content: center; }
          .nav-menu { flex-wrap: wrap; justify-content: center; gap: 16px !important; }
          .hero-img-box { height: 400px; margin-top: 40px; }
          .hero-social { justify-content: center; }
        }
      `}</style>

      <div style={{ position: "fixed", inset: 0, pointerEvents: "none", zIndex: 0, background: "radial-gradient(ellipse 80% 50% at 70% -10%, rgba(16,185,129,0.12), transparent)" }} />
      <Particulas />

      <header style={{
        position: "fixed", top: 0, left: 0, right: 0, zIndex: 100,
        backdropFilter: rolou ? "blur(20px)" : "none",
        background: rolou ? "rgba(5,10,16,0.85)" : "transparent",
        border: "none",
        transition: "all 0.4s",
      }}>
        <div className="header-container">
          <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
            <div style={{ width: 40, height: 40, borderRadius: 12, background: "rgba(16,185,129,0.15)", border: "1px solid rgba(16,185,129,0.3)", display: "flex", alignItems: "center", justifyContent: "center", color: "#10b981", fontWeight: 700 }}>
              {"</>"}
            </div>
            <div>
              <div style={{ fontWeight: 800, fontSize: "1rem", textAlign: "left" }}>Anderson</div>
              <div style={{ fontSize: "0.7rem", color: "rgba(255,255,255,0.4)", textAlign: "left" }}>Software Developer</div>
            </div>
          </div>

          <nav className="nav-menu">
            {t.nav.map((link, i) => {
              const ids = ["inicio", "sobre", "experiencia", "projetos", "skills", "contato"];
              return (
                <button
                  key={link}
                  className={`nav-link ${abaAtiva === link ? "active" : ""}`}
                  onClick={() => rolarParaSecao(ids[i], link)}
                >
                  {link}
                </button>
              );
            })}
          </nav>

          <div style={{ display: "flex", gap: 10 }}>
            <button
              onClick={() => setIdioma(idioma === "PT" ? "EN" : "PT")}
              style={{ display: "flex", padding: "4px", borderRadius: 12, border: "1px solid rgba(255,255,255,0.1)", background: "rgba(255,255,255,0.05)", cursor: "pointer" }}
            >
              {["PT", "EN"].map((l) => (
                <span key={l} style={{ padding: "4px 10px", borderRadius: 8, fontSize: "0.8rem", fontWeight: 700, background: idioma === l ? "#10b981" : "transparent", color: idioma === l ? "#000" : "rgba(255,255,255,0.5)" }}>
                  {l}
                </span>
              ))}
            </button>
          </div>
        </div>
      </header>

      <main style={{ position: "relative", zIndex: 1, width: "100%" }}>

        <section id="inicio" className="grid-hero" style={{ maxWidth: 1200, margin: "0 auto", padding: "140px 24px 100px", alignItems: "center", minHeight: "100vh" }}>
          <div className="hero-content">
            <div style={{ display: "inline-flex", alignItems: "center", gap: 8, padding: "8px 16px", borderRadius: 100, border: "1px solid rgba(255,255,255,0.1)", background: "rgba(255,255,255,0.04)", fontSize: "0.8rem", color: "rgba(255,255,255,0.6)", marginBottom: 28, animation: "fadeUp 0.6s ease both" }}>
              <div style={{ width: 7, height: 7, borderRadius: "50%", background: "#10b981", animation: "pulse-glow 2s infinite" }} />
              {t.hero.ola}
            </div>
            <h1 style={{ fontSize: "clamp(3rem, 7vw, 5.5rem)", fontWeight: 800, lineHeight: 1.05, marginBottom: 8, animation: "fadeUp 0.7s 0.1s ease both" }}>Anderson</h1>
            <h1 style={{ fontSize: "clamp(3rem, 7vw, 5.5rem)", fontWeight: 800, lineHeight: 1.05, marginBottom: 28, color: "#10b981", animation: "fadeUp 0.7s 0.2s ease both", display: "flex", alignItems: "center", justifyContent: "inherit", gap: 4 }}>
              {t.hero.cargo}
              <span style={{ width: 3, height: "0.9em", background: "#10b981", animation: "blink 1s infinite" }} />
            </h1>
            <p style={{ color: "rgba(255,255,255,0.55)", fontSize: "1.05rem", lineHeight: 1.8, maxWidth: 480, marginBottom: 36, animation: "fadeUp 0.7s 0.3s ease both" }}>
              {t.hero.desc}
            </p>
            <div className="hero-btns">
              <button className="btn-primary" onClick={() => rolarParaSecao("projetos", t.nav[3])}>{t.hero.btnProjetos}</button>
              <button className="btn-outline" onClick={baixarCurriculo}>Download CV ↓</button>
            </div>
            <div style={{ animation: "fadeUp 0.7s 0.5s ease both" }}>
              <div style={{ fontSize: "0.7rem", color: "rgba(255,255,255,0.35)", letterSpacing: "0.1em", marginBottom: 12 }}>{t.hero.btnSocial}</div>
              <div className="hero-social">
                <a href="https://www.linkedin.com/in/anderson-tressoldi-b48947266" target="_blank" rel="noreferrer" className="btn-outline" style={{ width: 44, height: 44, borderRadius: 12, padding: 0, justifyContent: 'center' }}>in</a>
                <a href="mailto:andersontressoldi7@gmail.com" className="btn-outline" style={{ width: 44, height: 44, borderRadius: 12, padding: 0, justifyContent: 'center' }}>✉️</a>
              </div>
            </div>
          </div>

          <div className="hero-img-box">
            <div style={{ position: "absolute", width: 320, height: 320, borderRadius: "50%", background: "rgba(16,185,129,0.15)", filter: "blur(60px)", animation: "pulse-glow 4s ease-in-out infinite" }} />
            
            <div style={{ 
              display: "flex", alignItems: "center", justifyContent: "center",
              position: "relative", zIndex: 2, width: 260, height: 200, 
              borderRadius: 28, border: "1px solid rgba(16,185,129,0.25)", 
              background: "#0a1410", overflow: "hidden", 
              boxShadow: "0 32px 80px rgba(16,185,129,0.2)" 
            }}>
              <img 
                src={MinhaFoto} 
                alt="Anderson" 
                style={{ marginBottom: 90, width: "100%", height: "100%", objectFit: "cover", objectPosition: "center" }} 
              />
              <div style={{ 
                position: "absolute", bottom: 0, left: 0, right: 0, 
                padding: "20px 12px 12px", background: "linear-gradient(to top, rgba(5,10,16,0.95), transparent)", 
                textAlign: "center", fontSize: "0.85rem", fontWeight: 700, color: "#10b981",
                letterSpacing: "0.05em"
              }}>
                Anderson
              </div>
            </div>

            <div style={{ position: "absolute", right: -20, top: "10%", background: "rgba(10,20,16,0.9)", backdropFilter: "blur(20px)", border: "1px solid rgba(16,185,129,0.2)", borderRadius: 16, padding: "16px", fontFamily: "'JetBrains Mono', monospace", fontSize: "0.75rem", animation: "float 3s infinite alternate", zIndex: 3 }}>
              <div style={{ color: "#10b981", textAlign: "left" }}>const dev = {"{"}</div>
              <div style={{ paddingLeft: 12, textAlign: "left" }}>nome: 'Anderson',</div>
              <div style={{ paddingLeft: 12, textAlign: "left" }}>foco: 'Fullstack',</div>
              <div style={{ paddingLeft: 12, textAlign: "left" }}>idade: '22'</div>
              <div style={{ color: "#10b981", textAlign: "left" }}>{"}"}</div>
            </div>

            <div style={{
              position: "absolute", left: -20, bottom: "15%",
              background: "rgba(10,20,16,0.9)", backdropFilter: "blur(20px)",
              border: "1px solid rgba(16,185,129,0.2)", borderRadius: 16, padding: "14px 20px",
              boxShadow: "0 16px 40px rgba(0,0,0,0.4)",
              animation: "float 3.5s ease-in-out 0.5s infinite alternate",
              minWidth: 160,
              zIndex: 3
            }}>
              <div style={{ fontSize: "0.7rem", color: "rgba(255,255,255,0.4)", marginBottom: 4, letterSpacing: "0.08em", textAlign: "left" }}>{t.hero.localizacao}</div>
              <div style={{ fontWeight: 700, display: "flex", alignItems: "center", gap: 6, textAlign: "left" }}>
                🇵🇹 <span>Coimbra, Portugal</span>
              </div>
            </div>
          </div>
        </section>

        <section id="sobre" style={{ maxWidth: 1200, margin: "0 auto", padding: "100px 24px" }}>
          <EfeitoSurgir>
            <div style={{ fontSize: "0.7rem", color: "#10b981", letterSpacing: "0.1em", marginBottom: 12 }}>{t.sobre.titulo}</div>
            <h2 style={{ fontSize: "clamp(2rem, 4vw, 3rem)", fontWeight: 800, marginBottom: 60 }}>{t.sobre.sub}</h2>
          </EfeitoSurgir>
          <div className="grid-sobre">
            <EfeitoSurgir delay={0.1}>
              <p style={{ color: "rgba(255,255,255,0.6)", lineHeight: 1.9, marginBottom: 20 }}>{t.sobre.p1}</p>
              <p style={{ color: "rgba(255,255,255,0.6)", lineHeight: 1.9, marginBottom: 28 }}>{t.sobre.p2}</p>
            </EfeitoSurgir>

            <EfeitoSurgir delay={0.2}>
              <div style={{ padding: "24px", borderRadius: 20, border: "1px solid rgba(255,255,255,0.07)", background: "rgba(255,255,255,0.03)" }}>
                <div style={{ fontSize: "0.7rem", color: "#10b981", marginBottom: 20 }}>{t.sobre.jornada}</div>
                <div style={{ maxHeight: "400px", overflowY: "auto", paddingRight: "10px" }}>
                  {LINHA_DO_TEMPO.map((item, i) => (
                    <div key={i} style={{ display: "flex", gap: 16, marginBottom: 20 }}>
                      <div style={{ width: 12, height: 12, borderRadius: "50%", background: "#10b981", marginTop: 4, flexShrink: 0 }} />
                      <div>
                        <div style={{ fontSize: "0.75rem", color: "#10b981", fontFamily: "'JetBrains Mono'" }}>{item.ano}</div>
                        <div style={{ fontWeight: 700, fontSize: "0.9rem" }}>{item.titulo}</div>
                        <div style={{ fontSize: "0.8rem", color: "rgba(255,255,255,0.45)" }}>{item.sub}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </EfeitoSurgir>

            <EfeitoSurgir delay={0.3}>
              <div style={{ padding: "24px", borderRadius: 20, border: "1px solid rgba(255,255,255,0.07)", background: "rgba(16,185,129,0.05)", textAlign: "center" }}>
                <div style={{ fontSize: 60, marginBottom: 16 }}>🌍</div>
                <div style={{ fontWeight: 700, marginBottom: 12 }}>Coimbra, Portugal</div>
                <p style={{ fontSize: "0.85rem", color: "rgba(255,255,255,0.5)" }}>{t.sobre.impacto}</p>
              </div>
            </EfeitoSurgir>
          </div>
        </section>

        <div id="experiencia" />

        <section id="projetos" style={{ maxWidth: 1200, margin: "0 auto", padding: "100px 24px" }}>
          <EfeitoSurgir>
            <div style={{ display: "flex", alignItems: "flex-end", justifyContent: "space-between", marginBottom: 48 }}>
              <div>
                <div style={{ fontSize: "0.7rem", color: "#10b981", marginBottom: 12 }}>{t.projetos.titulo}</div>
                <h2 style={{ fontSize: "clamp(2rem, 4vw, 3rem)", fontWeight: 800 }}>{t.projetos.sub}</h2>
              </div>
            </div>
          </EfeitoSurgir>

          <div className="grid-projetos">
            {PROJETOS.map((p, i) => (
              <EfeitoSurgir key={i} delay={i * 0.1}>
                <div className="project-card">
                  <div style={{ width: 56, height: 56, borderRadius: 16, background: "rgba(16,185,129,0.1)", border: "1px solid rgba(16,185,129,0.2)", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "1.6rem", marginBottom: 24 }}>
                    {p.icone}
                  </div>
                  <h3 style={{ fontSize: "1.2rem", fontWeight: 800, marginBottom: 10 }}>{p.nome}</h3>
                  <p style={{ color: "rgba(255,255,255,0.5)", fontSize: "0.9rem", lineHeight: 1.6, marginBottom: 20, flexGrow: 1 }}>{p.desc}</p>
                  <div style={{ display: "flex", flexWrap: "wrap", gap: 6, marginBottom: 24 }}>
                    {p.tags.map(tag => (
                      <span key={tag} style={{ padding: "4px 10px", borderRadius: 100, fontSize: "0.7rem", background: "rgba(255,255,255,0.05)", border: "1px solid rgba(255,255,255,0.1)" }}>{tag}</span>
                    ))}
                  </div>
                </div>
              </EfeitoSurgir>
            ))}
          </div>
        </section>

        <section id="skills" ref={refHabilidades} style={{ maxWidth: 1200, margin: "0 auto", padding: "100px 24px" }}>
          <EfeitoSurgir>
            <div style={{ fontSize: "0.7rem", color: "#10b981", marginBottom: 12 }}>{t.skills.titulo}</div>
            <h2 style={{ fontSize: "clamp(2rem, 4vw, 3rem)", fontWeight: 800, marginBottom: 48 }}>Skills</h2>
          </EfeitoSurgir>
          <div className="grid-skills">
            {DADOS_HABILIDADES.map((s, i) => (
              <div key={i}>
                <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 8, fontSize: "0.9rem" }}>
                  <span>{s.rotulo}</span>
                  <span style={{ color: "#10b981" }}>{s.valor}%</span>
                </div>
                <div style={{ height: 6, background: "rgba(255,255,255,0.1)", borderRadius: 10 }}>
                  <div style={{ 
                    height: "100%", background: "#10b981", borderRadius: 10,
                    width: habilidadesVisiveis ? `${s.valor}%` : "0%",
                    transition: "width 1.5s ease-out" 
                  }} />
                </div>
              </div>
            ))}
          </div>
          <div style={{ display: "flex", flexWrap: "wrap", gap: 10, marginTop: 60 }}>
            {TECNOLOGIAS.map((tech, i) => (
              <span key={i} style={{ padding: "8px 16px", borderRadius: 100, border: "1px solid rgba(255,255,255,0.1)", background: "rgba(255,255,255,0.03)", fontSize: "0.85rem" }}>
                {tech.icone} {tech.nome}
              </span>
            ))}
          </div>
        </section>

        <section id="contato" style={{ maxWidth: 900, margin: "0 auto", padding: "100px 24px" }}>
          <EfeitoSurgir>
            <div style={{ borderRadius: 32, background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.08)", padding: "60px", textAlign: "center" }}>
              <h2 style={{ fontSize: "2.5rem", fontWeight: 800, marginBottom: 16 }}>{t.contato.titulo}</h2>
              <p style={{ color: "rgba(255,255,255,0.5)", marginBottom: 32 }}>{t.contato.sub}</p>
              <a href="mailto:andersontressoldi7@gmail.com" className="btn-primary" style={{textDecoration: 'none'}}>
                andersontressoldi7@gmail.com
              </a>
            </div>
          </EfeitoSurgir>
        </section>
      </main>

      <footer style={{ border: "none", padding: "40px 24px" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto", display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: 24 }}>
          <div>
            <div style={{ fontWeight: 700 }}>Anderson</div>
            <div style={{ fontSize: "0.75rem", color: "rgba(255,255,255,0.4)" }}>© 2024 {t.contato.footer}</div>
          </div>
          <div style={{ fontSize: "0.8rem", color: "rgba(255,255,255,0.4)" }}>
            {t.contato.feito} <span style={{ color: "#10b981" }}>♥</span> Anderson
          </div>
          <div style={{ display: "flex", gap: 12 }}>
            <a href="https://www.linkedin.com/in/anderson-tressoldi-b48947266" target="_blank" rel="noreferrer" style={{ cursor: "pointer", opacity: 0.6, color: "#fff", textDecoration: "none" }}>in</a>
          </div>
        </div>
      </footer>
    </div>
  );
}