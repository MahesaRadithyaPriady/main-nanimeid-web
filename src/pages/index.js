import Head from "next/head";
import { useEffect, useRef, useState } from "react";

/* ---------------- Icons ---------------- */
const Svg = ({ children, className = "w-5 h-5", strokeWidth = 2, fill = "none", ...props }) => (
  <svg className={className} fill={fill} stroke="currentColor" viewBox="0 0 24 24" strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" {...props}>
    {children}
  </svg>
);

const Play = (p) => <Svg {...p}><polygon points="6,3 20,12 6,21" fill="currentColor" stroke="none" /></Svg>;
const Download = (p) => <Svg {...p}><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" /><polyline points="7,10 12,15 17,10" /><line x1="12" y1="15" x2="12" y2="3" /></Svg>;
const Smartphone = (p) => <Svg {...p}><rect x="5" y="2" width="14" height="20" rx="2" ry="2" /><line x1="12" y1="18" x2="12.01" y2="18" /></Svg>;

const Zap = (p) => <Svg {...p}><polygon points="13,2 3,14 12,14 11,22 21,10 12,10" /></Svg>;
const Shield = (p) => <Svg {...p}><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" /></Svg>;
const Check = (p) => <Svg {...p}><polyline points="20,6 9,17 4,12" /></Svg>;
const ArrowRight = (p) => <Svg {...p}><line x1="5" y1="12" x2="19" y2="12" /><polyline points="12,5 19,12 12,19" /></Svg>;
const Tv = (p) => <Svg {...p}><rect x="2" y="7" width="20" height="15" rx="2" /><polyline points="17,2 12,7 7,2" /></Svg>;
const Bookmark = (p) => <Svg {...p}><path d="M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z" /></Svg>;
const Bell = (p) => <Svg {...p}><path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9" /><path d="M13.73 21a2 2 0 0 1-3.46 0" /></Svg>;
const Sparkles = (p) => <Svg {...p}><path d="M12 3l1.9 5.1L19 10l-5.1 1.9L12 17l-1.9-5.1L5 10l5.1-1.9L12 3z" /><path d="M19 15l.9 2.1L22 18l-2.1.9L19 21l-.9-2.1L16 18l2.1-.9L19 15z" /></Svg>;
const Menu = (p) => <Svg {...p}><line x1="3" y1="6" x2="21" y2="6" /><line x1="3" y1="12" x2="21" y2="12" /><line x1="3" y1="18" x2="21" y2="18" /></Svg>;
const XIcon = (p) => <Svg {...p}><line x1="18" y1="6" x2="6" y2="18" /><line x1="6" y1="6" x2="18" y2="18" /></Svg>;
const AlertTriangle = (p) => <Svg {...p}><path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z" /><line x1="12" y1="9" x2="12" y2="13" /><line x1="12" y1="17" x2="12.01" y2="17" /></Svg>;

const GooglePlay = ({ className = "w-6 h-6" }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor">
    <path d="M3.6 2.3c-.34.36-.55.9-.55 1.55v16.3c0 .65.21 1.19.55 1.55l.07.06 9.14-9.2v-.22L3.67 2.24l-.07.06z" />
    <path d="M16.36 16.29l-3.55-3.56L3.6 21.94c.6.64 1.6.72 2.72.07l10.04-5.72z" />
    <path d="M20.5 10.5l-2.88-1.64-3.95 3.98 3.98 3.99 2.9-1.65c1.67-.95 1.67-2.5-.05-3.68z" />
    <path d="M16.36 7.4L6.32 1.68c-1.12-.65-2.12-.57-2.72.07l9.21 9.21 3.55-3.56z" />
  </svg>
);

const WindowsIcon = ({ className = "w-6 h-6" }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor">
    <path d="M3 5.5l7.5-1v7.5H3V5.5zm0 13l7.5 1v-7.5H3v6.5zm8.5 1.1l9.5 1.4v-8.9h-9.5v7.5zm0-16.1v7.6H21V3l-9.5 1.4z" />
  </svg>
);

/* ---------------- Helpers ---------------- */
const Reveal = ({ children, className = "", delay = 0 }) => {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) { setVisible(true); obs.disconnect(); } },
      { threshold: 0.12 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);
  return (
    <div
      ref={ref}
      style={{ transitionDelay: `${delay}ms` }}
      className={`transition-all duration-700 ease-out ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"} ${className}`}
    >
      {children}
    </div>
  );
};

const SectionHeading = ({ eyebrow, title, sub }) => (
  <div className="text-center max-w-2xl mx-auto mb-14">
    <span className="inline-flex items-center gap-2 text-xs font-bold tracking-[0.2em] uppercase text-brand-300 bg-brand-500/10 border border-brand-500/25 rounded-full px-4 py-1.5 mb-5">
      <Sparkles className="w-3.5 h-3.5" /> {eyebrow}
    </span>
    <h2 className="font-display text-4xl md:text-5xl tracking-tight text-white mb-4">{title}</h2>
    {sub && <p className="text-[#a7a2a7] text-lg">{sub}</p>}
  </div>
);

/* ---------------- Page ---------------- */
export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);

  const navLinks = [
    { label: "Fitur", href: "#features" },
    { label: "Download", href: "#download" },
    { label: "Komunitas", href: "#community" },
  ];

  const features = [
    { icon: Shield, title: "Bebas Iklan", desc: "Nonton anime tanpa gangguan iklan yang menyebalkan. Fokus penuh ke cerita." },
    { icon: Zap, title: "Update Harian", desc: "Episode terbaru tayang hampir bersamaan dengan rilis di Jepang." },
    { icon: Bookmark, title: "Favorit & History", desc: "Simpan anime favorit dan lanjutkan tontonan dari episode terakhir." },
    { icon: Tv, title: "Kualitas HD", desc: "Streaming lancar hingga resolusi tinggi, hemat kuota dengan multi-server." },
    { icon: Bell, title: "Notifikasi Episode", desc: "Dapatkan kabar begitu episode anime favoritmu rilis." },
    { icon: Smartphone, title: "UI Modern", desc: "Antarmuka bersih dan cepat yang nyaman dipakai siapa saja." },
  ];

  const marqueeItems = ["BEBAS IKLAN", "UPDATE HARIAN", "KUALITAS HD", "100% GRATIS", "FAVORIT & HISTORY", "UI MODERN", "MULTI SERVER"];

  return (
    <>
      <Head>
        <title>NANIMEID — Streaming Anime Terbaik</title>
        <meta name="description" content="Nonton dan download anime favoritmu dengan UI modern, bebas iklan, dan update harian." />
        <link rel="icon" href="/icon.png" />
      </Head>

      <main className="min-h-screen bg-night-950 text-[#f5f2f3] font-sans overflow-x-hidden">
        {/* ---------- Navbar ---------- */}
        <header className="fixed top-0 inset-x-0 z-50">
          <nav className="max-w-6xl mx-auto mt-4 px-4">
            <div className="glass rounded-2xl px-5 py-3 flex items-center justify-between">
              <a href="#" className="flex items-center gap-3">
                <img src="/icon.png" alt="NanimeID" className="w-9 h-9 drop-shadow-[0_4px_12px_rgba(113,139,255,0.35)]" />
                <span className="font-display text-lg tracking-tight">NANIMEID</span>
              </a>

              <div className="hidden md:flex items-center gap-1">
                {navLinks.map((l) => (
                  <a key={l.href} href={l.href} className="px-4 py-2 text-sm text-[#a7a2a7] hover:text-white rounded-lg hover:bg-white/5 transition-colors">
                    {l.label}
                  </a>
                ))}
                <a href="#download" className="ml-2 inline-flex items-center gap-2 text-sm font-bold bg-brand-500 rounded-xl px-4 py-2 hover:bg-brand-600 transition-colors shadow-lg shadow-brand-500/25">
                  <Download className="w-4 h-4" /> Download
                </a>
              </div>

              <button className="md:hidden p-2 rounded-lg hover:bg-white/5" onClick={() => setMenuOpen(!menuOpen)} aria-label="Menu">
                {menuOpen ? <XIcon /> : <Menu />}
              </button>
            </div>

            {menuOpen && (
              <div className="glass rounded-2xl mt-2 p-3 md:hidden flex flex-col">
                {navLinks.map((l) => (
                  <a key={l.href} href={l.href} onClick={() => setMenuOpen(false)} className="px-4 py-3 text-sm text-[#a7a2a7] hover:text-white rounded-lg hover:bg-white/5">
                    {l.label}
                  </a>
                ))}
              </div>
            )}
          </nav>
        </header>

        {/* ---------- Hero ---------- */}
        <section className="relative pt-36 pb-20 px-6">
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <div className="absolute -top-40 -left-40 w-[500px] h-[500px] bg-brand-500/20 rounded-full blur-[140px] animate-blob" />
            <div className="absolute top-20 right-0 w-[420px] h-[420px] bg-brand-700/15 rounded-full blur-[140px] animate-blob" style={{ animationDelay: "-4s" }} />
            <div className="absolute bottom-0 left-1/3 w-[400px] h-[400px] bg-accent-500/8 rounded-full blur-[140px] animate-blob" style={{ animationDelay: "-8s" }} />
            <div className="absolute inset-0 bg-grid [mask-image:radial-gradient(ellipse_at_center,black_30%,transparent_75%)]" />
          </div>

          <div className="relative max-w-6xl mx-auto grid lg:grid-cols-2 gap-14 items-center">
            {/* Left copy */}
            <div>
              <Reveal>
                <span className="inline-flex items-center gap-2 text-xs font-bold text-brand-300 bg-brand-500/10 border border-brand-500/25 rounded-full px-4 py-1.5 mb-6">
                  <span className="w-2 h-2 rounded-full bg-brand-400 animate-pulse" />
                  v3.0.5 — Tersedia di Play Store
                </span>
              </Reveal>
              <Reveal delay={80}>
                <h1 className="font-display text-5xl md:text-6xl xl:text-7xl leading-[1.05] tracking-tight mb-6">
                  Nonton Anime<br />
                  <span className="text-gradient">Tanpa Ribet.</span>
                </h1>
              </Reveal>
              <Reveal delay={160}>
                <p className="text-[#a7a2a7] text-lg md:text-xl leading-relaxed mb-8 max-w-lg">
                  Streaming anime favoritmu dengan UI modern, bebas iklan mengganggu, dan update episode setiap hari. Semua gratis.
                </p>
              </Reveal>
              <Reveal delay={240}>
                <div className="flex flex-wrap gap-4 mb-10">
                  <a href="#download" className="group inline-flex items-center gap-2 bg-brand-500 rounded-2xl px-7 py-3.5 font-bold shadow-xl shadow-brand-500/25 hover:bg-brand-600 hover:scale-[1.03] active:scale-95 transition-all">
                    <Download className="w-5 h-5" /> Download Sekarang
                    <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                  </a>
                  <a href="#features" className="inline-flex items-center gap-2 glass rounded-2xl px-7 py-3.5 font-bold text-[#f5f2f3] hover:bg-white/10 transition-colors">
                    Lihat Fitur
                  </a>
                </div>
              </Reveal>
              <Reveal delay={320}>
                <div className="flex items-center gap-8 text-sm text-[#a7a2a7]">
                  <div><span className="block text-2xl font-display text-white">1000+</span>Judul Anime</div>
                  <div className="w-px h-10 bg-night-700" />
                  <div><span className="block text-2xl font-display text-white">Harian</span>Update Episode</div>
                  <div className="w-px h-10 bg-night-700" />
                  <div><span className="block text-2xl font-display text-white">0</span>Iklan Ganggu</div>
                </div>
              </Reveal>
            </div>

            {/* Right: phone mockup */}
            <Reveal delay={200} className="hidden lg:block">
              <div className="relative mx-auto w-[300px] animate-float">
                <div className="absolute -inset-6 bg-brand-500/25 rounded-[3rem] blur-2xl" />
                <div className="relative rounded-[2.6rem] border-[10px] border-night-800 bg-night-950 shadow-2xl overflow-hidden">
                  <div className="absolute top-2 left-1/2 -translate-x-1/2 w-24 h-5 bg-night-800 rounded-full z-10" />
                  <div className="pt-10 pb-6 px-4 space-y-4">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-1.5">
                        <img src="/icon.png" alt="" className="w-5 h-5" />
                        <span className="font-display text-sm">NANIMEID</span>
                      </div>
                      <div className="w-7 h-7 rounded-full bg-brand-500" />
                    </div>
                    <div className="h-8 rounded-full bg-night-900 border border-night-700 flex items-center px-3 text-[10px] text-[#a7a2a7]">Cari anime...</div>
                    <div className="relative h-36 rounded-2xl bg-gradient-to-br from-brand-600 to-brand-900 overflow-hidden">
                      <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
                      <div className="absolute bottom-3 left-3 right-3">
                        <div className="text-xs font-bold mb-1">Anime Trending #1</div>
                        <div className="flex gap-1.5">
                          <span className="text-[8px] bg-white/20 rounded-full px-2 py-0.5">Action</span>
                          <span className="text-[8px] bg-white/20 rounded-full px-2 py-0.5">2025</span>
                        </div>
                      </div>
                      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-11 h-11 rounded-full bg-white/20 backdrop-blur flex items-center justify-center">
                        <Play className="w-4 h-4" />
                      </div>
                    </div>
                    <div className="text-[10px] font-bold text-[#a7a2a7]">Lanjutkan Nonton</div>
                    <div className="grid grid-cols-3 gap-2">
                      {["from-brand-700 to-brand-900", "from-night-700 to-night-800", "from-brand-800 to-night-800"].map((g, i) => (
                        <div key={i} className={`h-20 rounded-xl bg-gradient-to-br ${g} relative overflow-hidden`}>
                          <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-black/60 to-transparent" />
                          <div className="absolute bottom-1 left-1.5 right-1.5 h-1 rounded-full bg-white/30"><div className="h-full w-2/3 rounded-full bg-brand-400" /></div>
                        </div>
                      ))}
                    </div>
                    <div className="flex justify-around pt-1">
                      {[1, 0, 0, 0].map((active, i) => (
                        <div key={i} className={`w-8 h-1.5 rounded-full ${active ? "bg-brand-400" : "bg-night-700"}`} />
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </Reveal>
          </div>
        </section>

        {/* ---------- Marquee ---------- */}
        <div className="relative border-y border-night-700 bg-night-900/40 py-4 overflow-hidden">
          <div className="flex whitespace-nowrap animate-marquee w-max">
            {[...marqueeItems, ...marqueeItems].map((item, i) => (
              <span key={i} className="mx-8 font-sans text-sm font-bold tracking-[0.25em] text-[#a7a2a7] flex items-center gap-8">
                {item} <span className="w-1.5 h-1.5 rounded-full bg-brand-500" />
              </span>
            ))}
          </div>
        </div>

        {/* ---------- Features ---------- */}
        <section id="features" className="relative py-24 px-6 scroll-mt-24">
          <div className="max-w-6xl mx-auto">
            <Reveal>
              <SectionHeading eyebrow="Kenapa NanimeID" title={<>Fitur yang bikin <span className="text-gradient">betah nonton</span></>} sub="Semua yang kamu butuhkan untuk marathon anime, dalam satu aplikasi ringan." />
            </Reveal>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {features.map((f, i) => (
                <Reveal key={f.title} delay={i * 70}>
                  <div className="group glass rounded-3xl p-7 h-full hover:bg-night-800 hover:border-night-600 hover:-translate-y-1 transition-all duration-300">
                    <div className="w-12 h-12 rounded-2xl bg-brand-500 flex items-center justify-center mb-5 shadow-lg shadow-brand-500/25 group-hover:scale-110 transition-transform">
                      <f.icon className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="text-xl font-extrabold mb-2">{f.title}</h3>
                    <p className="text-[#a7a2a7] leading-relaxed">{f.desc}</p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* ---------- Download ---------- */}
        <section id="download" className="relative py-24 px-6 scroll-mt-24">
          <div className="absolute inset-0 pointer-events-none overflow-hidden">
            <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[600px] h-[400px] bg-brand-500/12 rounded-full blur-[140px]" />
          </div>
          <div className="relative max-w-4xl mx-auto">
            <Reveal>
              <SectionHeading eyebrow="Download" title={<>Pilih platform <span className="text-gradient">favoritmu</span></>} sub="Tersedia untuk Android via Google Play dan Windows (Beta)." />
            </Reveal>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Play Store */}
              <Reveal>
                <div className="group relative glass rounded-3xl p-8 h-full flex flex-col hover:border-brand-500/50 hover:-translate-y-1.5 transition-all duration-300 overflow-hidden">
                  <div className="absolute -top-16 -right-16 w-40 h-40 bg-brand-500/20 rounded-full blur-3xl group-hover:bg-brand-500/30 transition-colors" />
                  <div className="relative flex flex-col h-full">
                    <div className="flex items-center justify-between mb-6">
                      <div className="w-14 h-14 rounded-2xl bg-brand-500 flex items-center justify-center shadow-lg shadow-brand-500/25">
                        <GooglePlay className="w-7 h-7 text-white" />
                      </div>
                      <span className="text-[10px] font-bold tracking-widest uppercase text-brand-300 bg-brand-500/10 border border-brand-500/25 rounded-full px-3 py-1">v3.0.5</span>
                    </div>
                    <h3 className="text-2xl font-extrabold mb-1">Google Play</h3>
                    <p className="text-sm text-[#a7a2a7] mb-4">Android — rilis resmi</p>
                    <ul className="space-y-2 text-sm text-[#a7a2a7] mb-8">
                      <li className="flex gap-2"><Check className="w-4 h-4 text-brand-400 shrink-0 mt-0.5" /> Instal resmi dari Play Store</li>
                      <li className="flex gap-2"><Check className="w-4 h-4 text-brand-400 shrink-0 mt-0.5" /> Update otomatis tiap rilis</li>
                      <li className="flex gap-2"><Check className="w-4 h-4 text-brand-400 shrink-0 mt-0.5" /> Aman & terverifikasi</li>
                    </ul>
                    <a href="https://play.google.com/store/apps/details?id=com.nanime.id" target="_blank" rel="noopener noreferrer" className="mt-auto w-full inline-flex items-center justify-center gap-2 bg-brand-500 rounded-xl px-5 py-3 font-bold text-sm hover:bg-brand-600 hover:scale-[1.02] active:scale-95 transition-all shadow-lg shadow-brand-500/25">
                      <GooglePlay className="w-5 h-5" /> Download di Play Store
                    </a>
                  </div>
                </div>
              </Reveal>

              {/* Windows */}
              <Reveal delay={120}>
                <div className="group relative glass rounded-3xl p-8 h-full flex flex-col hover:border-night-600 hover:-translate-y-1.5 transition-all duration-300 overflow-hidden">
                  <div className="absolute -top-16 -right-16 w-40 h-40 bg-brand-500/10 rounded-full blur-3xl group-hover:bg-brand-500/20 transition-colors" />
                  <div className="relative flex flex-col h-full">
                    <div className="flex items-center justify-between mb-6">
                      <div className="w-14 h-14 rounded-2xl bg-brand-500 flex items-center justify-center shadow-lg shadow-brand-500/25">
                        <WindowsIcon className="w-7 h-7 text-white" />
                      </div>
                      <span className="text-[10px] font-bold tracking-widest uppercase text-brand-300 bg-brand-500/10 border border-brand-500/25 rounded-full px-3 py-1">v1.0.0 Beta</span>
                    </div>
                    <h3 className="text-2xl font-extrabold mb-1">Windows</h3>
                    <p className="text-sm text-[#a7a2a7] mb-4">Desktop — v1.0.0 Beta</p>
                    <ul className="space-y-2 text-sm text-[#a7a2a7] mb-8">
                      <li className="flex gap-2"><Check className="w-4 h-4 text-brand-400 shrink-0 mt-0.5" /> Nonton di layar besar</li>
                      <li className="flex gap-2"><Check className="w-4 h-4 text-brand-400 shrink-0 mt-0.5" /> Windows 10 / 11</li>
                      <li className="flex gap-2"><Check className="w-4 h-4 text-brand-400 shrink-0 mt-0.5" /> Sinkron dengan versi mobile</li>
                    </ul>
                    <a href="https://cdn-stable.nanimeid.xyz/file/NanimeID-V2/NanimeID/1.0.0_Windows/NanimeID%20Desktop%20Setup%201.0.0.exe" target="_blank" rel="noopener noreferrer" className="mt-auto w-full inline-flex items-center justify-center gap-2 bg-brand-500 rounded-xl px-5 py-3 font-bold text-sm hover:bg-brand-600 hover:scale-[1.02] active:scale-95 transition-all shadow-lg shadow-brand-500/25">
                      <Download className="w-5 h-5" /> Download untuk Windows
                    </a>
                  </div>
                </div>
              </Reveal>
            </div>

            {/* Warning */}
            <Reveal delay={200}>
              <div className="mt-8 glass rounded-2xl px-6 py-4 flex items-center justify-center gap-3 text-center border-amber-500/20 bg-amber-500/[0.04]">
                <AlertTriangle className="w-5 h-5 text-amber-400 shrink-0" />
                <p className="text-sm text-amber-200/90">
                  Hanya download dari link resmi di halaman ini. Waspadai aplikasi palsu & malware!
                </p>
              </div>
            </Reveal>
          </div>
        </section>

        {/* ---------- Community ---------- */}
        <section id="community" className="relative py-24 px-6 scroll-mt-24">
          <div className="max-w-4xl mx-auto">
            <Reveal>
              <div className="relative glass rounded-[2.5rem] p-10 md:p-14 text-center overflow-hidden">
                <div className="absolute -top-24 left-1/4 w-64 h-64 bg-brand-500/20 rounded-full blur-[100px]" />
                <div className="absolute -bottom-24 right-1/4 w-64 h-64 bg-accent-500/10 rounded-full blur-[100px]" />
                <div className="relative">
                  <span className="inline-flex items-center gap-2 text-xs font-bold tracking-[0.2em] uppercase text-brand-300 bg-brand-500/10 border border-brand-500/25 rounded-full px-4 py-1.5 mb-6">
                    Komunitas
                  </span>
                  <h2 className="font-display text-4xl md:text-5xl tracking-tight mb-4">
                    Gabung <span className="text-gradient">komunitas</span> kami
                  </h2>
                  <p className="text-[#a7a2a7] text-lg max-w-xl mx-auto mb-9">
                    Update rilis terbaru, diskusi anime, dan info fitur — langsung dari grup WhatsApp resmi NANIMEID.
                  </p>
                  <a
                    href="https://chat.whatsapp.com/DbwAK4QpGYu5h3dBUp3btc?mode=ems_copy_c"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 bg-brand-500 rounded-2xl px-8 py-4 font-bold text-lg shadow-xl shadow-brand-500/25 hover:bg-brand-600 hover:scale-[1.03] active:scale-95 transition-all"
                  >
                    Gabung di WhatsApp <ArrowRight className="w-5 h-5" />
                  </a>
                </div>
              </div>
            </Reveal>
          </div>
        </section>

        {/* ---------- Footer ---------- */}
        <footer className="border-t border-night-700 py-10 px-6">
          <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <img src="/icon.png" alt="NanimeID" className="w-8 h-8" />
              <span className="font-display">NANIMEID</span>
            </div>
            <div className="flex items-center gap-5 text-sm text-[#a7a2a7]">
              <span>© 2025 NANIMEID</span>
              <a href="/privacy" className="hover:text-white transition-colors">Kebijakan Privasi</a>
            </div>
            <div className="flex gap-2">
              {["bg-brand-500", "bg-brand-300", "bg-accent-500"].map((c, i) => (
                <span key={i} className={`w-2 h-2 rounded-full ${c} animate-pulse`} style={{ animationDelay: `${i * 300}ms` }} />
              ))}
            </div>
          </div>
        </footer>
      </main>
    </>
  );
}
