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
const Sparkles = (p) => <Svg {...p}><path d="M12 3l1.9 5.1L19 10l-5.1 1.9L12 17l-1.9-5.1L5 10l5.1-1.9L12 3z" /><path d="M19 15l.9 2.1L22 18l-2.1.9L19 21l-.9-2.1L16 18l2.1-.9L19 15z" /></Svg>;

const sections = [
  {
    title: "Ringkasan",
    body: (
      <>
        <p>
          NANIMEID berkomitmen untuk melindungi privasi Anda. Kebijakan ini menjelaskan
          jenis data apa yang kami proses, bagaimana kami menggunakannya, dan pilihan yang Anda miliki.
        </p>
        <ul className="space-y-2">
          {["Kami tidak menjual data pengguna.", "Kami tidak meminta data pribadi sensitif.", "Data teknis anonim dapat diproses untuk meningkatkan kualitas layanan."].map((li) => (
            <li key={li} className="flex gap-2"><Check className="w-4 h-4 text-brand-400 shrink-0 mt-1" /> {li}</li>
          ))}
        </ul>
      </>
    ),
  },
  {
    title: "Informasi yang Kami Kumpulkan",
    body: (
      <>
        <p>
          Secara default, aplikasi tidak mengumpulkan informasi yang mengidentifikasi Anda secara langsung
          (seperti nama, email, atau nomor telepon) kecuali Anda secara sukarela memberikannya melalui fitur tertentu.
        </p>
        <p>Kami dapat memproses data teknis anonim, seperti:</p>
        <ul className="list-disc pl-6 space-y-1">
          <li>Data perangkat (model, versi OS, bahasa, negara).</li>
          <li>Log penggunaan aplikasi dan diagnosa crash.</li>
          <li>Informasi performa untuk perbaikan dan pengujian fitur.</li>
        </ul>
      </>
    ),
  },
  {
    title: "Cara Kami Menggunakan Data",
    body: (
      <ul className="list-disc pl-6 space-y-1">
        <li>Meningkatkan stabilitas, keamanan, dan performa aplikasi.</li>
        <li>Menganalisis fitur yang paling sering digunakan untuk prioritas pengembangan.</li>
        <li>Menangani bug, crash, dan dukungan teknis.</li>
      </ul>
    ),
  },
  {
    title: "Penyimpanan & Keamanan",
    body: (
      <p>
        Kami menerapkan langkah-langkah keamanan yang wajar untuk melindungi data. Data teknis disimpan
        hanya selama diperlukan untuk tujuan yang dijelaskan dan kemudian dihapus atau dianonimkan.
      </p>
    ),
  },
  {
    title: "Berbagi Informasi",
    body: (
      <p>
        Kami tidak menjual atau menyewakan data pengguna. Kami dapat berbagi data teknis anonim dengan penyedia layanan
        yang membantu kami menjalankan dan mengembangkan aplikasi (misal analitik atau pelaporan crash) sesuai perjanjian pemrosesan data.
      </p>
    ),
  },
  {
    title: "Hak Pengguna",
    body: (
      <p>
        Anda dapat meminta informasi, koreksi, atau penghapusan data yang Anda berikan secara sukarela (jika ada).
        Hubungi kami melalui kanal resmi di bawah ini.
      </p>
    ),
  },
  {
    title: "Anak di Bawah Umur",
    body: (
      <p>
        Aplikasi tidak ditujukan untuk anak di bawah 13 tahun. Kami tidak dengan sengaja mengumpulkan data pribadi anak.
        Jika Anda adalah orang tua/wali dan mengetahui anak memberikan data kepada kami, hubungi kami untuk penghapusan.
      </p>
    ),
  },
  {
    title: "Perubahan Kebijakan",
    body: (
      <p>
        Kami dapat memperbarui Kebijakan Privasi ini dari waktu ke waktu. Perubahan akan dipublikasikan di halaman ini
        beserta tanggal pembaruan terbaru di bagian atas dokumen.
      </p>
    ),
  },
];

export default function PrivacyPage() {
  return (
    <>
      <Head>
        <title>Kebijakan Privasi — NANIMEID</title>
        <meta name="description" content="Kebijakan Privasi NANIMEID untuk publikasi di Google Play Store." />
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
              <Sparkles className="w-3.5 h-3.5" /> Legal
            </span>
            <h1 className="font-display text-5xl md:text-6xl tracking-tight mb-5">
              Kebijakan <span className="text-gradient">Privasi</span>
            </h1>
            <p className="text-[#a7a2a7] text-lg">
              Terakhir diperbarui: <span className="text-white font-semibold">15 September 2025</span>
            </p>
          </div>
        </section>

        {/* ---------- Policy Content ---------- */}
        <section className="relative max-w-3xl mx-auto px-6 pb-24 space-y-5">
          {sections.map((s, i) => (
            <div key={s.title} className="glass rounded-3xl p-7 hover:bg-night-800 hover:border-night-600 transition-colors">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-10 h-10 shrink-0 rounded-xl bg-brand-500/15 border border-brand-500/25 flex items-center justify-center text-brand-300 font-display">
                  {String(i + 1).padStart(2, "0")}
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
                <h2 className="text-xl font-extrabold">Kontak</h2>
                <p className="text-sm text-[#a7a2a7]">Hubungi kami jika ada pertanyaan terkait privasi.</p>
              </div>
            </div>
            <div className="text-[#a7a2a7] leading-relaxed space-y-3">
              <p>
                Kanal resmi: Grup WhatsApp Komunitas NANIMEID. Tautan tersedia di halaman beranda bagian "Komunitas".
              </p>
              <p>
                Jika Anda membutuhkan saluran kontak tambahan (mis. email), silakan hubungi kami melalui komunitas untuk mendapatkan alamat resmi terbaru.
              </p>
            </div>
            <a href="/" className="mt-6 inline-flex items-center gap-2 bg-brand-500 rounded-xl px-6 py-3 font-bold text-sm hover:bg-brand-600 hover:scale-[1.02] active:scale-95 transition-all shadow-lg shadow-brand-500/25">
              <ArrowLeft className="w-4 h-4" /> Kembali ke Beranda
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
