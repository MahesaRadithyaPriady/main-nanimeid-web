import Head from "next/head";

const Svg = ({ children, className = "w-5 h-5", strokeWidth = 2, ...props }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" {...props}>
    {children}
  </svg>
);

const Shield = (p) => <Svg {...p}><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" /></Svg>;
const Check = (p) => <Svg {...p}><polyline points="20,6 9,17 4,12" /></Svg>;
const ArrowLeft = (p) => <Svg {...p}><line x1="19" y1="12" x2="5" y2="12" /><polyline points="12,19 5,12 12,5" /></Svg>;
const Mail = (p) => <Svg {...p}><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" /><polyline points="22,6 12,13 2,6" /></Svg>;
const Trash = (p) => <Svg {...p}><polyline points="3,6 5,6 21,6" /><path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2" /><line x1="10" y1="11" x2="10" y2="17" /><line x1="14" y1="11" x2="14" y2="17" /></Svg>;
const Alert = (p) => <Svg {...p}><path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z" /><line x1="12" y1="9" x2="12" y2="13" /><line x1="12" y1="17" x2="12.01" y2="17" /></Svg>;
const Clock = (p) => <Svg {...p}><circle cx="12" cy="12" r="10" /><polyline points="12,6 12,12 16,14" /></Svg>;

const EMAIL = "mahesaradithyapriady@gmail.com";
const MAILTO = `mailto:${EMAIL}?subject=${encodeURIComponent("Request Penghapusan Akun NANIMEID")}&body=${encodeURIComponent(
  "Halo Tim NANIMEID,\n\nSaya ingin mengajukan penghapusan akun saya.\n\nUsername: \nEmail akun: \nAlasan (opsional): \n\nTerima kasih."
)}`;

const sections = [
  {
    icon: Mail,
    title: "Cara Mengajukan Penghapusan Akun",
    body: (
      <>
        <p>
          Untuk meminta penghapusan akun NANIMEID Anda, kirim email ke alamat resmi kami
          dengan subjek <span className="text-white font-semibold">"Request Penghapusan Akun NANIMEID"</span>.
        </p>
        <p>Sertakan informasi berikut di dalam email:</p>
        <ul className="space-y-2">
          {[
            "Username akun NANIMEID Anda.",
            "Alamat email yang terdaftar pada akun.",
            "Alasan penghapusan (opsional, membantu kami meningkatkan layanan).",
          ].map((li) => (
            <li key={li} className="flex gap-2"><Check className="w-4 h-4 text-brand-400 shrink-0 mt-1" /> {li}</li>
          ))}
        </ul>
      </>
    ),
  },
  {
    icon: Trash,
    title: "Data yang Akan Dihapus",
    body: (
      <>
        <p>Setelah permintaan diproses, data berikut akan dihapus secara permanen:</p>
        <ul className="list-disc pl-6 space-y-1">
          <li>Profil akun (username, avatar, banner, dan bio).</li>
          <li>Riwayat aktivitas akun (komentar, favorit, dan progres menonton).</li>
          <li>Data sosial (clan, teman, dan pesan yang terkait akun).</li>
          <li>Saldo coin, item, dan status VIP yang terikat pada akun.</li>
        </ul>
      </>
    ),
  },
  {
    icon: Alert,
    title: "Hal yang Perlu Diperhatikan",
    body: (
      <ul className="space-y-2">
        {[
          "Penghapusan akun bersifat permanen dan tidak dapat dibatalkan.",
          "Saldo coin, item, dan VIP yang tersisa akan hangus tanpa pengembalian.",
          "Pastikan email dikirim dari alamat yang terdaftar pada akun agar identitas dapat diverifikasi.",
        ].map((li) => (
          <li key={li} className="flex gap-2"><Alert className="w-4 h-4 text-amber-400 shrink-0 mt-1" /> {li}</li>
        ))}
      </ul>
    ),
  },
  {
    icon: Clock,
    title: "Waktu Pemrosesan",
    body: (
      <p>
        Permintaan penghapusan akun diproses secara manual oleh tim kami dalam waktu
        maksimal <span className="text-white font-semibold">7 hari kerja</span> sejak email diterima.
        Anda akan mendapatkan balasan konfirmasi setelah akun berhasil dihapus.
      </p>
    ),
  },
];

export default function DeleteAccountPage() {
  return (
    <>
      <Head>
        <title>Penghapusan Akun — NANIMEID</title>
        <meta name="description" content="Ajukan penghapusan akun NANIMEID Anda melalui email resmi kami." />
        <link rel="icon" href="/icon.png" />
      </Head>

      <main className="min-h-screen bg-night-950 text-[#f5f2f3] font-sans overflow-x-hidden">
        {/* ---------- Navbar ---------- */}
        <header className="fixed top-0 inset-x-0 z-50">
          <nav className="max-w-6xl mx-auto mt-4 px-4">
            <div className="glass rounded-2xl px-5 py-3 flex items-center justify-between">
              <a href="/" className="flex items-center gap-3">
                <img src="/icon.png" alt="NanimeID" className="w-9 h-9 drop-shadow-[0_4px_12px_rgba(113,139,255,0.35)]" />
                <span className="font-display text-lg tracking-tight">NANIMEID</span>
              </a>
              <a href="/" className="inline-flex items-center gap-2 text-sm font-bold bg-brand-500 rounded-xl px-4 py-2 hover:bg-brand-600 transition-colors shadow-lg shadow-brand-500/25">
                <ArrowLeft className="w-4 h-4" /> Beranda
              </a>
            </div>
          </nav>
        </header>

        {/* ---------- Hero ---------- */}
        <section className="relative pt-36 pb-16 px-6">
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <div className="absolute -top-40 -left-40 w-[500px] h-[500px] bg-brand-500/20 rounded-full blur-[140px] animate-blob" />
            <div className="absolute top-20 right-0 w-[420px] h-[420px] bg-brand-700/15 rounded-full blur-[140px] animate-blob" style={{ animationDelay: "-4s" }} />
            <div className="absolute inset-0 bg-grid [mask-image:radial-gradient(ellipse_at_center,black_30%,transparent_75%)]" />
          </div>

          <div className="relative text-center max-w-2xl mx-auto">
            <span className="inline-flex items-center gap-2 text-xs font-bold tracking-[0.2em] uppercase text-brand-300 bg-brand-500/10 border border-brand-500/25 rounded-full px-4 py-1.5 mb-6">
              <Shield className="w-3.5 h-3.5" /> Permintaan Akun
            </span>
            <h1 className="font-display text-5xl md:text-6xl tracking-tight mb-5">
              Penghapusan <span className="text-gradient">Akun</span>
            </h1>
            <p className="text-[#a7a2a7] text-lg">
              Ajukan penghapusan akun NANIMEID Anda melalui email resmi kami.
            </p>
          </div>
        </section>

        {/* ---------- Content ---------- */}
        <section className="relative max-w-3xl mx-auto px-6 pb-24 space-y-5">
          {sections.map((s, i) => (
            <div key={s.title} className="glass rounded-3xl p-7 hover:bg-night-800 hover:border-night-600 transition-colors">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-10 h-10 shrink-0 rounded-xl bg-brand-500/15 border border-brand-500/25 flex items-center justify-center text-brand-300 font-display">
                  <s.icon className="w-5 h-5" />
                </div>
                <h2 className="text-xl font-extrabold">{s.title}</h2>
              </div>
              <div className="text-[#a7a2a7] leading-relaxed space-y-3">{s.body}</div>
            </div>
          ))}

          {/* Kontak */}
          <div id="kontak" className="glass rounded-3xl p-8 border-brand-500/30 scroll-mt-24">
            <div className="flex items-center gap-4 mb-4">
              <div className="w-10 h-10 shrink-0 rounded-xl bg-brand-500 flex items-center justify-center shadow-lg shadow-brand-500/25">
                <Mail className="w-5 h-5 text-white" />
              </div>
              <div>
                <h2 className="text-xl font-extrabold">Kirim Permintaan</h2>
                <p className="text-sm text-[#a7a2a7]">Email resmi untuk request penghapusan akun.</p>
              </div>
            </div>
            <div className="text-[#a7a2a7] leading-relaxed space-y-3">
              <p>
                Kirim permintaan Anda ke{" "}
                <a href={`mailto:${EMAIL}`} className="text-brand-300 font-semibold hover:text-brand-200 transition-colors break-all">
                  {EMAIL}
                </a>{" "}
                atau gunakan tombol di bawah untuk membuka aplikasi email dengan format yang sudah disiapkan.
              </p>
            </div>
            <a href={MAILTO} className="mt-6 inline-flex items-center gap-2 bg-brand-500 rounded-xl px-6 py-3 font-bold text-sm hover:bg-brand-600 hover:scale-[1.02] active:scale-95 transition-all shadow-lg shadow-brand-500/25">
              <Mail className="w-4 h-4" /> Ajukan Penghapusan Akun
            </a>
          </div>
        </section>

        {/* ---------- Footer ---------- */}
        <footer className="border-t border-night-700 py-10 px-6">
          <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <img src="/icon.png" alt="NanimeID" className="w-8 h-8" />
              <span className="font-display">NANIMEID</span>
            </div>
            <p className="text-sm text-[#a7a2a7]">© 2025 NANIMEID — Semua hak dilindungi.</p>
            <a href="/privacy" className="text-sm text-[#a7a2a7] hover:text-white transition-colors">Kebijakan Privasi</a>
          </div>
        </footer>
      </main>
    </>
  );
}
