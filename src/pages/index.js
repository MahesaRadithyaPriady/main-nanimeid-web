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
const ChevronDown = (p) => <Svg {...p}><polyline points="6,9 12,15 18,9" /></Svg>;
const Star = (p) => <Svg {...p} fill="currentColor" stroke="none"><polygon points="12,2 15.09,8.26 22,9.27 17,14.14 18.18,21.02 12,17.77 5.82,21.02 7,14.14 2,9.27 8.91,8.26" /></Svg>;
const Tv = (p) => <Svg {...p}><rect x="2" y="7" width="20" height="15" rx="2" /><polyline points="17,2 12,7 7,2" /></Svg>;
const Bookmark = (p) => <Svg {...p}><path d="M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z" /></Svg>;
const Bell = (p) => <Svg {...p}><path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9" /><path d="M13.73 21a2 2 0 0 1-3.46 0" /></Svg>;
const Sparkles = (p) => <Svg {...p}><path d="M12 3l1.9 5.1L19 10l-5.1 1.9L12 17l-1.9-5.1L5 10l5.1-1.9L12 3z" /><path d="M19 15l.9 2.1L22 18l-2.1.9L19 21l-.9-2.1L16 18l2.1-.9L19 15z" /></Svg>;
const Menu = (p) => <Svg {...p}><line x1="3" y1="6" x2="21" y2="6" /><line x1="3" y1="12" x2="21" y2="12" /><line x1="3" y1="18" x2="21" y2="18" /></Svg>;
const XIcon = (p) => <Svg {...p}><line x1="18" y1="6" x2="6" y2="18" /><line x1="6" y1="6" x2="18" y2="18" /></Svg>;
const AlertTriangle = (p) => <Svg {...p}><path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z" /><line x1="12" y1="9" x2="12" y2="13" /><line x1="12" y1="17" x2="12.01" y2="17" /></Svg>;
const Users = (p) => <Svg {...p}><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" /><circle cx="9" cy="7" r="4" /><path d="M23 21v-2a4 4 0 0 0-3-3.87" /><path d="M16 3.13a4 4 0 0 1 0 7.75" /></Svg>;
const Monitor = (p) => <Svg {...p}><rect x="2" y="3" width="20" height="14" rx="2" /><line x1="8" y1="21" x2="16" y2="21" /><line x1="12" y1="17" x2="12" y2="21" /></Svg>;
const HomeIcon = (p) => <Svg {...p}><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" /><polyline points="9,22 9,12 15,12 15,22" /></Svg>;
const Search = (p) => <Svg {...p}><circle cx="11" cy="11" r="8" /><line x1="21" y1="21" x2="16.65" y2="16.65" /></Svg>;
const Settings = (p) => <Svg {...p}><circle cx="12" cy="12" r="3" /><path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-4 0v-.09a1.65 1.65 0 0 0-1-1.51 1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1 0-4h.09a1.65 1.65 0 0 0 1.51-1 1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 2.83-2.83l.06.06a1.65 1.65 0 0 0 1.82.33h.01a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 4 0v.09a1.65 1.65 0 0 0 1 1.51h.01a1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82v.01a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z" /></Svg>;

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

const LinuxIcon = ({ className = "w-6 h-6" }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 2c-2.1 0-3.6 1.2-4.1 3-.3 1-.4 2.2-.4 3.3-.6.4-1.2 1.2-1.5 2.2-.4 1.1-.9 2.6-1.6 4.2-.8 1.9-1.9 3.6-1.9 4.9 0 .5.2.9.5 1.2.9.8 2.6.9 4.3.9.9 0 1.8 0 2.6.2.7.1 1.3.1 2.1.1s1.4 0 2.1-.1c.8-.2 1.7-.2 2.6-.2 1.7 0 3.4-.1 4.3-.9.3-.3.5-.7.5-1.2 0-1.3-1.1-3-1.9-4.9-.7-1.6-1.2-3.1-1.6-4.2-.3-1-.9-1.8-1.5-2.2 0-1.1-.1-2.3-.4-3.3C15.6 3.2 14.1 2 12 2zm-1.9 4.2c.4 0 .8.4.8.9s-.4.9-.8.9-.8-.4-.8-.9.4-.9.8-.9zm3.8 0c.4 0 .8.4.8.9s-.4.9-.8.9-.8-.4-.8-.9.4-.9.8-.9zM12 9.4l1.6.7-0.4.9h-2.4l-.4-.9 1.6-.7zm-2.3 2.4c.8 0 1.5.7 1.5 1.5s-.7 1.5-1.5 1.5-1.5-.7-1.5-1.5.7-1.5 1.5-1.5zm4.6 0c.8 0 1.5.7 1.5 1.5s-.7 1.5-1.5 1.5-1.5-.7-1.5-1.5.7-1.5 1.5-1.5z" />
  </svg>
);

const WhatsApp = ({ className = "w-5 h-5" }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor">
    <path d="M17.47 14.38c-.3-.15-1.76-.87-2.03-.97-.27-.1-.47-.15-.67.15-.2.3-.77.97-.94 1.17-.17.2-.35.22-.64.07-.3-.15-1.26-.46-2.4-1.47-.88-.79-1.48-1.76-1.65-2.06-.17-.3-.02-.46.13-.61.13-.13.3-.35.45-.52.15-.17.2-.3.3-.5.1-.2.05-.37-.02-.52-.08-.15-.67-1.62-.92-2.22-.24-.58-.49-.5-.67-.51h-.57c-.2 0-.52.07-.8.37-.27.3-1.04 1.02-1.04 2.5 0 1.47 1.07 2.89 1.22 3.09.15.2 2.1 3.2 5.08 4.49.71.3 1.26.49 1.7.63.71.22 1.36.19 1.87.12.57-.09 1.76-.72 2-1.42.25-.7.25-1.29.17-1.42-.07-.13-.27-.2-.57-.35zM12.05 21.79h-.01a9.87 9.87 0 0 1-5.03-1.38l-.36-.21-3.74.98 1-3.64-.24-.37a9.86 9.86 0 0 1-1.51-5.26c0-5.45 4.44-9.88 9.9-9.88a9.83 9.83 0 0 1 9.89 9.89c0 5.45-4.44 9.87-9.9 9.87zM20.46 3.49A11.82 11.82 0 0 0 12.05 0C5.5 0 .16 5.34.16 11.9c0 2.1.55 4.14 1.59 5.95L.06 24l6.3-1.65a11.88 11.88 0 0 0 5.68 1.45h.01c6.55 0 11.89-5.34 11.89-11.9 0-3.18-1.24-6.16-3.48-8.41z" />
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

const Corners = ({ inset = 0 }) => (
  <>
    <span className="corner corner-tl" style={{ inset: `${inset}px` }} />
    <span className="corner corner-tr" style={{ inset: `${inset}px` }} />
    <span className="corner corner-bl" style={{ inset: `${inset}px` }} />
    <span className="corner corner-br" style={{ inset: `${inset}px` }} />
  </>
);

const SectionHeading = ({ eyebrow, title, sub }) => (
  <div className="text-center max-w-2xl mx-auto mb-14">
    <span className="inline-flex items-center gap-2 text-xs font-bold tracking-[0.2em] uppercase text-brand-300 bg-brand-500/10 border border-brand-500/25 rounded-full px-4 py-1.5 mb-5">
      <Sparkles className="w-3.5 h-3.5" /> {eyebrow}
    </span>
    <h2 className="font-display text-4xl md:text-5xl tracking-tight text-white mb-4">{title}</h2>
    {sub && <p className="text-[#a7a2a7] text-lg">{sub}</p>}
  </div>
);

const OrnateDivider = () => (
  <div className="ornate-divider py-2">
    <span className="ornate-diamond" />
  </div>
);

/* Badge store gaya official site — ikon + dua baris teks */
const StoreBadge = ({ href, icon: Icon, top, bottom }) => (
  <a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    className="group inline-flex items-center gap-3 rounded-2xl border border-white/15 bg-black/50 backdrop-blur px-5 py-3 hover:border-brand-400/60 hover:bg-black/70 hover:scale-[1.04] active:scale-95 transition-all shadow-xl shadow-black/40"
  >
    <Icon className="w-7 h-7 text-white group-hover:text-brand-300 transition-colors" />
    <span className="text-left leading-tight">
      <span className="block text-[10px] uppercase tracking-widest text-[#a7a2a7]">{top}</span>
      <span className="block text-sm font-extrabold text-white">{bottom}</span>
    </span>
  </a>
);

/* Kartu tilt 3D — rotasi mengikuti posisi mouse */
function TiltCard({ children, className = "", max = 8 }) {
  const ref = useRef(null);
  const raf = useRef(0);
  const onMove = (e) => {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const px = (e.clientX - rect.left) / rect.width - 0.5;
    const py = (e.clientY - rect.top) / rect.height - 0.5;
    cancelAnimationFrame(raf.current);
    raf.current = requestAnimationFrame(() => {
      el.style.transform = `perspective(900px) rotateX(${(-py * max).toFixed(2)}deg) rotateY(${(px * max).toFixed(2)}deg) translateY(-4px)`;
      el.style.setProperty("--mx", `${(px + 0.5) * 100}%`);
      el.style.setProperty("--my", `${(py + 0.5) * 100}%`);
    });
  };
  const onLeave = () => {
    const el = ref.current;
    if (!el) return;
    cancelAnimationFrame(raf.current);
    el.style.transform = "perspective(900px) rotateX(0deg) rotateY(0deg) translateY(0)";
  };
  return (
    <div
      ref={ref}
      onMouseMove={onMove}
      onMouseLeave={onLeave}
      className={`transition-transform duration-200 ease-out will-change-transform ${className}`}
    >
      {children}
    </div>
  );
}

/* Angka berjalan saat masuk viewport */
function CountUp({ to, suffix = "", className = "" }) {
  const ref = useRef(null);
  const [val, setVal] = useState(0);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    let raf = 0;
    const obs = new IntersectionObserver(
      ([e]) => {
        if (!e.isIntersecting) return;
        obs.disconnect();
        const t0 = performance.now();
        const dur = 1600;
        const tick = (t) => {
          const p = Math.min((t - t0) / dur, 1);
          const eased = 1 - Math.pow(1 - p, 3);
          setVal(Math.round(to * eased));
          if (p < 1) raf = requestAnimationFrame(tick);
        };
        raf = requestAnimationFrame(tick);
      },
      { threshold: 0.4 }
    );
    obs.observe(el);
    return () => { obs.disconnect(); cancelAnimationFrame(raf); };
  }, [to]);
  return (
    <span ref={ref} className={className}>
      {val.toLocaleString("id-ID")}{suffix}
    </span>
  );
}

/* Poster anime dari API — kartu galeri */
const AnimeCard = ({ item, rank }) => (
  <a
    href="#download"
    className="group relative w-[150px] md:w-[172px] shrink-0 snap-start overflow-hidden rounded-2xl border border-night-700 bg-night-900 hover:border-brand-400/60 transition-all duration-300 hover:-translate-y-1.5"
  >
    <div className="relative aspect-[2/3] overflow-hidden bg-night-800">
      <img
        src={item.gambar_anime}
        alt={item.nama_anime}
        loading="lazy"
        className="absolute inset-0 h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
        onError={(e) => (e.currentTarget.style.opacity = "0")}
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/10 to-transparent" />
      {item.rating_anime && (
        <span className="absolute top-2 left-2 inline-flex items-center gap-1 rounded-lg bg-black/60 backdrop-blur px-2 py-0.5 text-[10px] font-bold text-amber-300">
          <Star className="w-3 h-3" /> {String(item.rating_anime).replace(",", ".")}
        </span>
      )}
      {item.status_anime && (
        <span className={`absolute top-2 right-2 rounded-lg px-2 py-0.5 text-[9px] font-extrabold uppercase tracking-wider backdrop-blur ${
          String(item.status_anime).startsWith("ONGOING") ? "bg-emerald-500/25 text-emerald-300" : "bg-brand-500/25 text-brand-200"
        }`}>
          {String(item.status_anime).startsWith("ONGOING") ? "Ongoing" : "Tamat"}
        </span>
      )}
      {rank != null && (
        <span className="absolute -left-1 bottom-1 font-display text-5xl text-outline drop-shadow-[0_2px_8px_rgba(0,0,0,0.8)]">
          {rank}
        </span>
      )}
      <div className="absolute inset-x-0 bottom-0 p-3">
        <p className="line-clamp-2 text-[11px] md:text-xs font-bold leading-snug text-white">{item.nama_anime}</p>
        <span className="mt-1 inline-flex items-center gap-1 text-[9px] font-bold text-brand-300 opacity-0 group-hover:opacity-100 transition-opacity">
          <Play className="w-2.5 h-2.5" /> Nonton di app
        </span>
      </div>
    </div>
  </a>
);

const API = "https://mainappsv1.nanimeid.xyz/2.1.0";

function useAnimeList(endpoint, limit = 12) {
  const [items, setItems] = useState(null); // null = loading
  useEffect(() => {
    const ctrl = new AbortController();
    fetch(`${API}/anime/${endpoint}?limit=${limit}`, { signal: ctrl.signal })
      .then((r) => r.json())
      .then((j) => setItems(Array.isArray(j?.items) ? j.items : []))
      .catch(() => setItems([]));
    return () => ctrl.abort();
  }, [endpoint, limit]);
  return items;
}

/* Partikel hero — posisi deterministik agar SSR & client identik */
const PARTICLES = Array.from({ length: 30 }, (_, i) => {
  const r = (n) => {
    const x = Math.sin(i * 12.9898 + n * 78.233) * 43758.5453;
    return x - Math.floor(x);
  };
  return {
    left: r(1) * 100,
    size: 2 + r(2) * 4,
    duration: 9 + r(3) * 14,
    delay: -r(4) * 20,
    opacity: 0.25 + r(5) * 0.4,
  };
});

/* Konfigurasi poster melayang di hero (posisi, kedalaman, kemiringan) */
const FLOATERS = [
  { left: "-2%", top: "16%", w: 150, depth: 26, tilt: "-7deg", dur: "8s", delay: "0s" },
  { left: "6%", top: "58%", w: 120, depth: 16, tilt: "5deg", dur: "10s", delay: "-3s" },
  { left: "88%", top: "14%", w: 140, depth: 22, tilt: "6deg", dur: "9s", delay: "-5s" },
  { left: "80%", top: "56%", w: 120, depth: 30, tilt: "-5deg", dur: "11s", delay: "-2s" },
  { left: "16%", top: "6%", w: 100, depth: 34, tilt: "4deg", dur: "12s", delay: "-7s" },
  { left: "70%", top: "4%", w: 104, depth: 18, tilt: "-4deg", dur: "9.5s", delay: "-4s" },
];

/* ---------------- Page ---------------- */
export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrollY, setScrollY] = useState(0);
  const [mouse, setMouse] = useState({ x: 0, y: 0 }); // -1..1
  const latest = useAnimeList("latest", 14);
  const mostViewed = useAnimeList("view", 12);

  useEffect(() => {
    let raf = 0;
    const onScroll = () => {
      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(() => setScrollY(window.scrollY));
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => { window.removeEventListener("scroll", onScroll); cancelAnimationFrame(raf); };
  }, []);

  const onHeroMouse = (e) => {
    const x = (e.clientX / window.innerWidth) * 2 - 1;
    const y = (e.clientY / window.innerHeight) * 2 - 1;
    setMouse({ x, y });
  };

  const navLinks = [
    { label: "Fitur", href: "#features" },
    { label: "Sedang Tayang", href: "#tayang" },
    { label: "Download", href: "#download" },
    { label: "Komunitas", href: "#community" },
  ];

  const features = [
    { icon: Shield, title: "Bebas Iklan", desc: "Nonton anime tanpa gangguan iklan yang menyebalkan. Fokus penuh ke cerita." },
    { icon: Zap, title: "Update Harian", desc: "Episode terbaru tayang hampir bersamaan dengan rilis di Jepang." },
    { icon: Bookmark, title: "Favorit & History", desc: "Simpan anime favorit dan lanjutkan tontonan dari episode terakhir." },
    { icon: Tv, title: "Kualitas HD", desc: "Streaming lancar hingga resolusi tinggi, hemat kuota dengan multi-server." },
    { icon: Bell, title: "Notifikasi Episode", desc: "Dapatkan kabar begitu episode anime favoritmu rilis." },
    { icon: Users, title: "Komunitas & Clan", desc: "Global chat, clan, dan afinitas — nonton jadi lebih seru bareng teman." },
  ];

  const marqueeItems = ["BEBAS IKLAN", "UPDATE HARIAN", "KUALITAS HD", "100% GRATIS", "GLOBAL CHAT & CLAN", "UI MODERN", "MULTI SERVER"];

  const stripPosters = latest && latest.length > 0 ? [...latest, ...latest] : null;
  const wallPosters = latest && latest.length >= 8 ? latest.slice(0, 12) : null;
  const floaters = latest && latest.length >= 6 ? latest.slice(0, 6) : null;
  const p1 = Math.min(scrollY * 0.25, 220);
  const p2 = Math.min(scrollY * 0.12, 120);
  const hero = latest && latest.length > 0 ? latest[0] : null;

  return (
    <>
      <Head>
        <title>NANIMEID — Streaming Anime Terbaik</title>
        <meta name="description" content="Nonton dan download anime favoritmu dengan UI modern, bebas iklan, dan update harian. Tersedia di Android & Windows." />
        <link rel="icon" href="/icon.png" />
      </Head>

      <main className="min-h-screen bg-night-950 text-[#f5f2f3] font-sans overflow-x-hidden">
        {/* ---------- Navbar ---------- */}
        <header className="fixed top-0 inset-x-0 z-50">
          <div className="absolute inset-x-0 top-0 h-24 bg-gradient-to-b from-night-950/90 to-transparent pointer-events-none" />
          <nav className="relative max-w-6xl mx-auto mt-4 px-4">
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

        {/* ---------- Hero sinematik ---------- */}
        <section onMouseMove={onHeroMouse} className="relative flex min-h-[100svh] flex-col items-center justify-center overflow-hidden px-6 pt-32 pb-16">
          {/* Dinding poster asli (ken-burns) */}
          {wallPosters && (
            <div className="absolute inset-0 overflow-hidden" style={{ transform: `translateY(${p1 * 0.4}px)` }}>
              <div className="absolute inset-[-6%] grid grid-cols-4 md:grid-cols-6 gap-3 opacity-[0.16] animate-ken-burns">
                {wallPosters.map((item, i) => (
                  <div key={i} className="relative aspect-[2/3] overflow-hidden rounded-xl bg-night-800">
                    <img src={item.gambar_anime} alt="" loading="eager" className="absolute inset-0 h-full w-full object-cover" onError={(e) => (e.currentTarget.style.opacity = "0")} />
                  </div>
                ))}
              </div>
              <div className="absolute inset-0 bg-gradient-to-b from-night-950/80 via-night-950/60 to-night-950" />
              <div className="absolute inset-0 [mask-image:radial-gradient(ellipse_at_center,transparent_30%,black_78%)] bg-night-950/60" />
            </div>
          )}

          {/* Orb + sinar + grid + partikel */}
          <div className="absolute inset-0 pointer-events-none">
            <div className="absolute -top-48 left-1/2 -translate-x-1/2 w-[900px] h-[600px] bg-brand-600/20 rounded-full blur-[160px] animate-blob" style={{ transform: `translateX(-50%) translateY(${p1}px)` }} />
            <div className="absolute top-1/4 -left-40 w-[460px] h-[460px] bg-brand-500/15 rounded-full blur-[140px] animate-blob" style={{ animationDelay: "-5s", transform: `translateY(${p2}px)` }} />
            <div className="absolute bottom-0 -right-32 w-[480px] h-[480px] bg-accent-500/10 rounded-full blur-[150px] animate-blob" style={{ animationDelay: "-9s", transform: `translateY(${-p2}px)` }} />
            <div className="beam left-[12%]" style={{ animationDelay: "-2s" }} />
            <div className="beam left-[46%] opacity-60" style={{ animationDelay: "-6s" }} />
            <div className="beam right-[10%]" style={{ animationDelay: "-8s" }} />
            <div className="absolute inset-0 bg-grid [mask-image:radial-gradient(ellipse_at_center,black_25%,transparent_72%)]" />
            {/* Spotlight mengikuti mouse */}
            <div
              className="absolute inset-0 transition-opacity"
              style={{
                background: `radial-gradient(560px circle at ${50 + mouse.x * 38}% ${42 + mouse.y * 30}%, rgba(141,162,255,0.14), transparent 65%)`,
              }}
            />
            {PARTICLES.map((pt, i) => (
              <span
                key={i}
                className="particle"
                style={{
                  left: `${pt.left}%`,
                  width: pt.size,
                  height: pt.size,
                  animationDuration: `${pt.duration}s`,
                  animationDelay: `${pt.delay}s`,
                  ["--p-opacity"]: pt.opacity,
                }}
              />
            ))}
            <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-night-950 to-transparent" />
          </div>

          {/* Watermark raksasa */}
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none" style={{ transform: `translateY(${p2 * 0.5}px)` }}>
            <span className="font-display text-[22vw] leading-none text-outline whitespace-nowrap">NANIMEID</span>
          </div>

          {/* Poster melayang 3D (parallax mouse) */}
          {floaters && (
            <div className="absolute inset-0 pointer-events-none hidden lg:block">
              {floaters.map((item, i) => {
                const f = FLOATERS[i % FLOATERS.length];
                return (
                  <div
                    key={item.id}
                    className="absolute float-tilt"
                    style={{
                      left: f.left,
                      top: f.top,
                      width: f.w,
                      ["--tilt"]: f.tilt,
                      animationDuration: f.dur,
                      animationDelay: f.delay,
                      transform: `translate(${mouse.x * f.depth}px, ${mouse.y * (f.depth * 0.6)}px)`,
                    }}
                  >
                    <div className="relative aspect-[2/3] overflow-hidden rounded-2xl border border-white/10 shadow-2xl shadow-black/60 bg-night-800">
                      <img src={item.gambar_anime} alt="" loading="lazy" className="absolute inset-0 h-full w-full object-cover opacity-90" onError={(e) => (e.currentTarget.style.opacity = "0")} />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
                      <div className="absolute inset-0 rounded-2xl ring-1 ring-inset ring-white/5" />
                    </div>
                  </div>
                );
              })}
            </div>
          )}

          {/* Konten tengah */}
          <div className="relative z-10 flex flex-col items-center text-center max-w-3xl mx-auto">
            <Reveal>
              <span className="inline-flex items-center gap-2 text-xs font-bold text-brand-300 bg-brand-500/10 border border-brand-500/25 rounded-full px-4 py-1.5 mb-7 backdrop-blur">
                <span className="w-2 h-2 rounded-full bg-brand-400 animate-pulse" />
                Mobile v3.0.5 &nbsp;•&nbsp; Desktop v1.0.4 — tersedia sekarang
              </span>
            </Reveal>

            <Reveal delay={80}>
              <div className="relative mb-6">
                <div className="absolute -inset-10 bg-brand-500/30 blur-[70px] rounded-full animate-glow-pulse" />
                <img src="/icon.png" alt="NanimeID" className="relative w-24 h-24 md:w-28 md:h-28 drop-shadow-[0_10px_40px_rgba(113,139,255,0.5)]" />
              </div>
            </Reveal>

            <Reveal delay={140}>
              <h1 className="font-display text-6xl md:text-7xl tracking-[0.08em] mb-3 shine-text">NANIMEID</h1>
            </Reveal>

            <Reveal delay={200}>
              <p className="font-display italic text-xl md:text-2xl text-gradient mb-4">
                &ldquo;Streaming anime, tanpa batas.&rdquo;
              </p>
            </Reveal>

            <Reveal delay={260}>
              <p className="text-[#a7a2a7] text-base md:text-lg leading-relaxed max-w-xl mb-9">
                Ribuan judul, update setiap hari, bebas iklan. Di ponsel atau PC —
                semua gratis, semua nyaman.
              </p>
            </Reveal>

            <Reveal delay={320}>
              <div className="flex flex-wrap items-center justify-center gap-3.5 mb-8">
                <StoreBadge
                  href="https://play.google.com/store/apps/details?id=com.nanime.id"
                  icon={GooglePlay}
                  top="Dapatkan di"
                  bottom="Google Play"
                />
                <StoreBadge
                  href="https://cdn-stable.nanimeid.xyz/file/NanimeID-V2/Kira/Release/Desktop/NanimeID%20Desktop%20Setup%201.0.4.exe"
                  icon={WindowsIcon}
                  top="Download untuk"
                  bottom="Windows PC — v1.0.4"
                />
                <StoreBadge
                  href="https://cdn-stable.nanimeid.xyz/file/NanimeID-V2/Kira/Release/Desktop/NanimeID-Desktop-1.0.4-amd64.deb"
                  icon={LinuxIcon}
                  top="Download untuk"
                  bottom="Linux — v1.0.4"
                />
              </div>
            </Reveal>

            <Reveal delay={380}>
              <div className="flex items-center gap-4 text-sm text-[#a7a2a7]">
                <a href="https://chat.whatsapp.com/DbwAK4QpGYu5h3dBUp3btc?mode=ems_copy_c" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 hover:bg-white/10 hover:text-white transition-colors">
                  <WhatsApp className="w-4 h-4 text-emerald-400" /> WhatsApp
                </a>
                <a href="https://play.google.com/store/apps/details?id=com.nanime.id" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 hover:bg-white/10 hover:text-white transition-colors">
                  <GooglePlay className="w-4 h-4 text-brand-300" /> Play Store
                </a>
              </div>
            </Reveal>

            <Reveal delay={440}>
              <div className="mt-12 flex items-center gap-8 md:gap-10 text-sm text-[#a7a2a7]">
                <div><CountUp to={1000} suffix="+" className="block text-3xl font-display text-white" />Judul Anime</div>
                <div className="w-px h-12 bg-night-700" />
                <div><span className="block text-3xl font-display text-white">24/7</span>Update Episode</div>
                <div className="w-px h-12 bg-night-700" />
                <div><span className="block text-3xl font-display text-white">0</span>Iklan Ganggu</div>
              </div>
            </Reveal>
          </div>

          <a href="#features" className="absolute bottom-6 left-1/2 -translate-x-1/2 text-[#a7a2a7] hover:text-white transition-colors z-10" aria-label="Gulir ke bawah">
            <ChevronDown className="w-6 h-6 animate-bounce" />
          </a>
        </section>

        {/* ---------- Strip poster (key visual berjalan) ---------- */}
        {stripPosters && (
          <div className="relative border-y border-night-700/70 py-5 overflow-hidden bg-night-900/30">
            <div className="flex w-max animate-poster-marquee gap-4 px-4">
              {stripPosters.map((item, i) => (
                <div key={`${item.id}-${i}`} className="w-[110px] md:w-[130px] shrink-0">
                  <div className="relative aspect-[2/3] overflow-hidden rounded-xl border border-night-700/80 bg-night-800">
                    <img
                      src={item.gambar_anime}
                      alt=""
                      loading="lazy"
                      className="absolute inset-0 h-full w-full object-cover opacity-80"
                      onError={(e) => (e.currentTarget.style.opacity = "0")}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  </div>
                </div>
              ))}
            </div>
            <div className="absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-night-950 to-transparent pointer-events-none" />
            <div className="absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-night-950 to-transparent pointer-events-none" />
          </div>
        )}

        {/* ---------- Marquee teks ---------- */}
        <div className="relative border-b border-night-700 bg-night-900/40 py-4 overflow-hidden">
          <div className="flex whitespace-nowrap animate-marquee w-max">
            {[...marqueeItems, ...marqueeItems].map((item, i) => (
              <span key={i} className="mx-8 font-sans text-sm font-bold tracking-[0.25em] text-[#a7a2a7] flex items-center gap-8">
                {item} <span className="w-1.5 h-1.5 rounded-full bg-brand-500" />
              </span>
            ))}
          </div>
        </div>

        {/* ---------- Fitur (kartu tilt 3D) ---------- */}
        <section id="features" className="relative py-24 px-6 scroll-mt-24">
          <div className="max-w-6xl mx-auto">
            <Reveal>
              <SectionHeading eyebrow="Kenapa NanimeID" title={<>Fitur yang bikin <span className="text-gradient">betah nonton</span></>} sub="Semua yang kamu butuhkan untuk marathon anime, dalam satu aplikasi ringan." />
            </Reveal>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {features.map((f, i) => (
                <Reveal key={f.title} delay={i * 70}>
                  <TiltCard className="h-full">
                    <div className="group relative glass rounded-3xl p-7 h-full hover:bg-night-800 hover:border-brand-500/40 transition-colors duration-300 overflow-hidden">
                      <Corners />
                      {/* sorot mengikuti mouse */}
                      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
                        style={{ background: "radial-gradient(240px circle at var(--mx,50%) var(--my,50%), rgba(113,139,255,0.12), transparent 70%)" }}
                      />
                      <div className="relative">
                        <div className="flex items-start justify-between mb-5">
                          <div className="w-12 h-12 rounded-2xl bg-brand-500 flex items-center justify-center shadow-lg shadow-brand-500/25 group-hover:scale-110 transition-transform">
                            <f.icon className="w-6 h-6 text-white" />
                          </div>
                          <span className="font-display text-3xl text-white/10 group-hover:text-brand-500/30 transition-colors">0{i + 1}</span>
                        </div>
                        <h3 className="text-xl font-extrabold mb-2">{f.title}</h3>
                        <p className="text-[#a7a2a7] leading-relaxed">{f.desc}</p>
                      </div>
                    </div>
                  </TiltCard>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        <OrnateDivider />

        {/* ---------- Showcase: desktop + ponsel ---------- */}
        <section className="relative py-24 px-6 overflow-hidden">
          <div className="absolute inset-0 pointer-events-none">
            <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-brand-600/15 rounded-full blur-[160px]" />
          </div>
          <div className="relative max-w-6xl mx-auto">
            <Reveal>
              <SectionHeading
                eyebrow="Satu Akun, Semua Perangkat"
                title={<>Lanjutkan tontonan <span className="text-gradient">di mana saja</span></>}
                sub="Mulai di ponsel, lanjutkan di PC — progress, favorit, dan komunitasmu tersinkron."
              />
            </Reveal>

            <Reveal delay={120}>
              <div className="relative mx-auto max-w-4xl">
                <div className="absolute -inset-8 bg-brand-500/15 blur-[80px] rounded-full pointer-events-none" />

                {/* Jendela desktop */}
                <div className="relative float-tilt rounded-2xl border border-white/10 bg-night-900/90 shadow-2xl shadow-black/60 overflow-hidden" style={{ ["--tilt"]: "0.5deg" }}>
                  <Corners inset={6} />
                  <div className="flex items-center gap-2 border-b border-night-700 px-4 py-2.5 bg-night-950/80">
                    <span className="w-2.5 h-2.5 rounded-full bg-accent-500/80" />
                    <span className="w-2.5 h-2.5 rounded-full bg-amber-400/80" />
                    <span className="w-2.5 h-2.5 rounded-full bg-emerald-400/80" />
                    <span className="mx-auto flex items-center gap-2 rounded-lg bg-night-800 px-3 py-1 text-[10px] text-[#a7a2a7]">
                      <img src="/icon.png" alt="" className="w-3 h-3" /> NanimeID Desktop — v1.0.4
                    </span>
                  </div>
                  <div className="flex">
                    {/* Sidebar */}
                    <div className="hidden sm:flex w-14 flex-col items-center gap-5 border-r border-night-700 py-5 bg-night-950/60">
                      <img src="/icon.png" alt="" className="w-7 h-7" />
                      {[HomeIcon, Search, Tv, Bookmark, Bell].map((Icon, i) => (
                        <span key={i} className={`grid size-9 place-items-center rounded-xl ${i === 0 ? "bg-brand-500/20 text-brand-300" : "text-[#a7a2a7]"}`}>
                          <Icon className="w-4 h-4" />
                        </span>
                      ))}
                      <span className="mt-auto grid size-9 place-items-center rounded-xl text-[#a7a2a7]"><Settings className="w-4 h-4" /></span>
                    </div>
                    {/* Konten app */}
                    <div className="flex-1 p-4 md:p-5">
                      <div className="relative h-36 md:h-48 rounded-xl overflow-hidden bg-night-800 mb-4">
                        {hero && (
                          <img src={hero.gambar_anime} alt="" loading="lazy" className="absolute inset-0 h-full w-full object-cover" onError={(e) => (e.currentTarget.style.opacity = "0")} />
                        )}
                        <div className="absolute inset-0 bg-gradient-to-r from-night-950/95 via-night-950/40 to-transparent" />
                        <div className="absolute inset-0 bg-gradient-to-t from-night-950/80 to-transparent" />
                        <div className="absolute left-4 bottom-4 max-w-[60%]">
                          <span className="text-[9px] font-bold uppercase tracking-widest text-brand-300">Sedang tayang</span>
                          <p className="font-display text-lg md:text-2xl truncate">{hero ? hero.nama_anime : "Memuat…"}</p>
                          <span className="mt-1.5 inline-flex items-center gap-1.5 rounded-lg bg-brand-500 px-3 py-1 text-[10px] font-bold">
                            <Play className="w-3 h-3" /> Tonton Sekarang
                          </span>
                        </div>
                      </div>
                      <div className="grid grid-cols-3 sm:grid-cols-6 gap-2.5">
                        {(latest || Array.from({ length: 6 }).map(() => null)).slice(0, 6).map((item, i) => (
                          <div key={item ? item.id : i} className="relative aspect-[2/3] overflow-hidden rounded-lg bg-night-800">
                            {item ? (
                              <img src={item.gambar_anime} alt="" loading="lazy" className="absolute inset-0 h-full w-full object-cover" onError={(e) => (e.currentTarget.style.opacity = "0")} />
                            ) : (
                              <div className="absolute inset-0 animate-pulse bg-night-800" />
                            )}
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Ponsel menumpuk di kanan-bawah */}
                <div className="absolute -bottom-10 -right-4 md:right-2 w-[130px] md:w-[150px] float-tilt hidden xs:block sm:block" style={{ ["--tilt"]: "-4deg", animationDelay: "-3s" }}>
                  <div className="relative rounded-[1.6rem] border-[6px] border-night-800 bg-night-950 shadow-2xl shadow-black/70 overflow-hidden">
                    <div className="absolute top-1.5 left-1/2 -translate-x-1/2 w-14 h-3.5 bg-night-800 rounded-full z-10" />
                    <div className="pt-7 pb-4 px-2.5 space-y-2">
                      <div className="h-5 rounded-md bg-night-800 border border-night-700" />
                      {(latest || []).slice(6, 10).map((item, i) => (
                        <div key={item.id || i} className="flex gap-2">
                          <div className="relative w-9 shrink-0 aspect-[2/3] overflow-hidden rounded-md bg-night-800">
                            <img src={item.gambar_anime} alt="" loading="lazy" className="absolute inset-0 h-full w-full object-cover" onError={(e) => (e.currentTarget.style.opacity = "0")} />
                          </div>
                          <div className="flex-1 space-y-1.5 py-1">
                            <div className="h-1.5 w-4/5 rounded bg-night-700" />
                            <div className="h-1.5 w-3/5 rounded bg-night-700/70" />
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </Reveal>
          </div>
        </section>

        {/* ---------- Sedang Tayang (data asli dari API) ---------- */}
        <section id="tayang" className="relative py-24 px-6 scroll-mt-24">
          <div className="absolute inset-0 pointer-events-none overflow-hidden">
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[400px] bg-brand-500/10 rounded-full blur-[150px]" />
          </div>
          <div className="relative max-w-6xl mx-auto">
            <Reveal>
              <SectionHeading
                eyebrow="Katalog Live"
                title={<>Sedang tayang <span className="text-gradient">sekarang</span></>}
                sub="Episode terbaru dan judul paling ditonton — diperbarui otomatis setiap hari."
              />
            </Reveal>

            <Reveal>
              <div className="relative glass rounded-3xl p-6 md:p-8">
                <Corners />
                <div className="flex items-center gap-3 mb-6">
                  <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse" />
                  <h3 className="font-display text-2xl">Episode Terbaru</h3>
                  <span className="ml-auto text-[11px] font-bold uppercase tracking-widest text-[#a7a2a7]">Live</span>
                </div>
                {latest === null ? (
                  <div className="flex gap-4 overflow-hidden">
                    {Array.from({ length: 7 }).map((_, i) => (
                      <div key={i} className="w-[150px] md:w-[172px] shrink-0 aspect-[2/3] animate-pulse rounded-2xl bg-night-800/70" />
                    ))}
                  </div>
                ) : latest.length === 0 ? (
                  <p className="py-10 text-center text-sm text-[#a7a2a7]">Katalog tidak tersedia saat ini.</p>
                ) : (
                  <div className="flex gap-4 overflow-x-auto no-scrollbar snap-x pb-2">
                    {latest.map((item) => <AnimeCard key={item.id} item={item} />)}
                  </div>
                )}

                <div className="flex items-center gap-3 mt-10 mb-6">
                  <Zap className="w-5 h-5 text-amber-400" />
                  <h3 className="font-display text-2xl">Paling Ditonton</h3>
                </div>
                {mostViewed === null ? (
                  <div className="flex gap-4 overflow-hidden">
                    {Array.from({ length: 7 }).map((_, i) => (
                      <div key={i} className="w-[150px] md:w-[172px] shrink-0 aspect-[2/3] animate-pulse rounded-2xl bg-night-800/70" />
                    ))}
                  </div>
                ) : mostViewed.length === 0 ? (
                  <p className="py-10 text-center text-sm text-[#a7a2a7]">Katalog tidak tersedia saat ini.</p>
                ) : (
                  <div className="flex gap-4 overflow-x-auto no-scrollbar snap-x pb-2">
                    {mostViewed.map((item, i) => <AnimeCard key={item.id} item={item} rank={i < 9 ? i + 1 : null} />)}
                  </div>
                )}

                <p className="mt-7 text-center text-xs text-[#a7a2a7]">
                  Tonton semua judul di atas — <a href="#download" className="font-bold text-brand-300 hover:text-brand-200">download aplikasinya</a>.
                </p>
              </div>
            </Reveal>
          </div>
        </section>

        {/* ---------- Download ---------- */}
        <section id="download" className="relative py-24 px-6 scroll-mt-24">
          <div className="absolute inset-0 pointer-events-none overflow-hidden">
            <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[600px] h-[400px] bg-brand-500/12 rounded-full blur-[140px]" />
          </div>
          <div className="relative max-w-4xl mx-auto">
            <Reveal>
              <SectionHeading eyebrow="Download" title={<>Pilih platform <span className="text-gradient">favoritmu</span></>} sub="Tersedia untuk Android via Google Play, Windows, dan Linux (Desktop)." />
            </Reveal>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {/* Play Store */}
              <Reveal>
                <TiltCard className="h-full" max={5}>
                  <div className="glow-card group relative glass rounded-3xl p-8 h-full flex flex-col hover:bg-night-800 transition-colors duration-300 overflow-hidden">
                    <Corners />
                    <div className="absolute -top-16 -right-16 w-40 h-40 bg-brand-500/20 rounded-full blur-3xl" />
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
                </TiltCard>
              </Reveal>

              {/* Windows */}
              <Reveal delay={120}>
                <TiltCard className="h-full" max={5}>
                  <div className="glow-card group relative glass rounded-3xl p-8 h-full flex flex-col hover:bg-night-800 transition-colors duration-300 overflow-hidden">
                    <Corners />
                    <div className="absolute -top-16 -right-16 w-40 h-40 bg-brand-500/10 rounded-full blur-3xl" />
                    <div className="relative flex flex-col h-full">
                      <div className="flex items-center justify-between mb-6">
                        <div className="w-14 h-14 rounded-2xl bg-brand-500 flex items-center justify-center shadow-lg shadow-brand-500/25">
                          <WindowsIcon className="w-7 h-7 text-white" />
                        </div>
                        <span className="text-[10px] font-bold tracking-widest uppercase text-brand-300 bg-brand-500/10 border border-brand-500/25 rounded-full px-3 py-1">v1.0.4</span>
                      </div>
                      <h3 className="text-2xl font-extrabold mb-1">Windows</h3>
                      <p className="text-sm text-[#a7a2a7] mb-4">Desktop — v1.0.4</p>
                      <ul className="space-y-2 text-sm text-[#a7a2a7] mb-8">
                        <li className="flex gap-2"><Check className="w-4 h-4 text-brand-400 shrink-0 mt-0.5" /> Nonton di layar besar</li>
                        <li className="flex gap-2"><Check className="w-4 h-4 text-brand-400 shrink-0 mt-0.5" /> Windows 10 / 11</li>
                        <li className="flex gap-2"><Check className="w-4 h-4 text-brand-400 shrink-0 mt-0.5" /> Update otomatis dalam app</li>
                      </ul>
                      <a href="https://cdn-stable.nanimeid.xyz/file/NanimeID-V2/Kira/Release/Desktop/NanimeID%20Desktop%20Setup%201.0.4.exe" target="_blank" rel="noopener noreferrer" className="mt-auto w-full inline-flex items-center justify-center gap-2 bg-brand-500 rounded-xl px-5 py-3 font-bold text-sm hover:bg-brand-600 hover:scale-[1.02] active:scale-95 transition-all shadow-lg shadow-brand-500/25">
                        <WindowsIcon className="w-5 h-5" /> Download untuk Windows
                      </a>
                    </div>
                  </div>
                </TiltCard>
              </Reveal>

              {/* Linux */}
              <Reveal delay={240}>
                <TiltCard className="h-full" max={5}>
                  <div className="glow-card group relative glass rounded-3xl p-8 h-full flex flex-col hover:bg-night-800 transition-colors duration-300 overflow-hidden">
                    <Corners />
                    <div className="absolute -top-16 -right-16 w-40 h-40 bg-brand-500/10 rounded-full blur-3xl" />
                    <div className="relative flex flex-col h-full">
                      <div className="flex items-center justify-between mb-6">
                        <div className="w-14 h-14 rounded-2xl bg-brand-500 flex items-center justify-center shadow-lg shadow-brand-500/25">
                          <LinuxIcon className="w-7 h-7 text-white" />
                        </div>
                        <span className="text-[10px] font-bold tracking-widest uppercase text-brand-300 bg-brand-500/10 border border-brand-500/25 rounded-full px-3 py-1">v1.0.4</span>
                      </div>
                      <h3 className="text-2xl font-extrabold mb-1">Linux</h3>
                      <p className="text-sm text-[#a7a2a7] mb-4">Desktop — v1.0.4</p>
                      <ul className="space-y-2 text-sm text-[#a7a2a7] mb-8">
                        <li className="flex gap-2"><Check className="w-4 h-4 text-brand-400 shrink-0 mt-0.5" /> Ubuntu / Debian (.deb)</li>
                        <li className="flex gap-2"><Check className="w-4 h-4 text-brand-400 shrink-0 mt-0.5" /> Fitur sama dengan Windows</li>
                        <li className="flex gap-2"><Check className="w-4 h-4 text-brand-400 shrink-0 mt-0.5" /> Update otomatis dalam app</li>
                      </ul>
                      <a href="https://cdn-stable.nanimeid.xyz/file/NanimeID-V2/Kira/Release/Desktop/NanimeID-Desktop-1.0.4-amd64.deb" target="_blank" rel="noopener noreferrer" className="mt-auto w-full inline-flex items-center justify-center gap-2 bg-brand-500 rounded-xl px-5 py-3 font-bold text-sm hover:bg-brand-600 hover:scale-[1.02] active:scale-95 transition-all shadow-lg shadow-brand-500/25">
                        <LinuxIcon className="w-5 h-5" /> Download untuk Linux
                      </a>
                    </div>
                  </div>
                </TiltCard>
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

        {/* ---------- Komunitas ---------- */}
        <section id="community" className="relative py-24 px-6 scroll-mt-24">
          <div className="max-w-4xl mx-auto">
            <Reveal>
              <div className="relative glass rounded-[2.5rem] p-10 md:p-14 text-center overflow-hidden">
                <Corners />
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
                    <WhatsApp className="w-5 h-5" /> Gabung di WhatsApp <ArrowRight className="w-5 h-5" />
                  </a>
                </div>
              </div>
            </Reveal>
          </div>
        </section>

        {/* ---------- Footer ---------- */}
        <footer className="relative border-t border-night-700 pt-14 pb-10 px-6 overflow-hidden">
          <div className="absolute -bottom-32 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-brand-500/10 rounded-full blur-[120px] pointer-events-none" />
          <div className="relative max-w-6xl mx-auto">
            <div className="grid gap-10 md:grid-cols-[1.4fr_1fr_1fr] mb-12">
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <img src="/icon.png" alt="NanimeID" className="w-10 h-10" />
                  <span className="font-display text-xl tracking-tight">NANIMEID</span>
                </div>
                <p className="text-sm text-[#a7a2a7] leading-relaxed max-w-xs">
                  Streaming anime dengan UI modern, bebas iklan, dan update harian.
                  Tersedia di Android, Windows, dan Linux.
                </p>
              </div>
              <div>
                <h4 className="text-xs font-bold uppercase tracking-[0.2em] text-white mb-4">Navigasi</h4>
                <ul className="space-y-2.5 text-sm text-[#a7a2a7]">
                  {navLinks.map((l) => (
                    <li key={l.href}><a href={l.href} className="hover:text-white transition-colors">{l.label}</a></li>
                  ))}
                </ul>
              </div>
              <div>
                <h4 className="text-xs font-bold uppercase tracking-[0.2em] text-white mb-4">Platform</h4>
                <ul className="space-y-2.5 text-sm text-[#a7a2a7]">
                  <li>
                    <a href="https://play.google.com/store/apps/details?id=com.nanime.id" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 hover:text-white transition-colors">
                      <GooglePlay className="w-4 h-4" /> Android — Play Store
                    </a>
                  </li>
                  <li>
                    <a href="https://cdn-stable.nanimeid.xyz/file/NanimeID-V2/Kira/Release/Desktop/NanimeID%20Desktop%20Setup%201.0.4.exe" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 hover:text-white transition-colors">
                      <Monitor className="w-4 h-4" /> Windows — v1.0.4
                    </a>
                  </li>
                  <li>
                    <a href="https://cdn-stable.nanimeid.xyz/file/NanimeID-V2/Kira/Release/Desktop/NanimeID-Desktop-1.0.4-amd64.deb" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 hover:text-white transition-colors">
                      <LinuxIcon className="w-4 h-4" /> Linux — v1.0.4 (.deb)
                    </a>
                  </li>
                  <li>
                    <a href="https://chat.whatsapp.com/DbwAK4QpGYu5h3dBUp3btc?mode=ems_copy_c" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 hover:text-white transition-colors">
                      <WhatsApp className="w-4 h-4" /> Grup WhatsApp
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="flex flex-col md:flex-row items-center justify-between gap-4 border-t border-night-700 pt-6">
              <div className="flex items-center gap-5 text-sm text-[#a7a2a7]">
                <span>© 2026 NANIMEID</span>
                <a href="/privacy" className="hover:text-white transition-colors">Kebijakan Privasi</a>
              </div>
              <div className="flex gap-2">
                {["bg-brand-500", "bg-brand-300", "bg-accent-500"].map((c, i) => (
                  <span key={i} className={`w-2 h-2 rounded-full ${c} animate-pulse`} style={{ animationDelay: `${i * 300}ms` }} />
                ))}
              </div>
            </div>
          </div>
        </footer>
      </main>
    </>
  );
}
