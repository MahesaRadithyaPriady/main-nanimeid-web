import Head from "next/head";
import { useEffect } from "react";

// Inline UI Components (duplicated to keep page self-contained as per project style)
const Button = ({ children, variant = "default", size = "md", className = "", asChild, ...props }) => {
  const baseClasses = "inline-flex items-center justify-center gap-2 rounded-md font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none ring-offset-background";
  
  const variants = {
    default: "bg-transparent text-white hover:bg-white/10 border border-gray-600",
    outline: "bg-transparent border border-gray-600 text-white hover:bg-white/10",
    gradient: "bg-transparent text-white hover:bg-white/10 border border-indigo-500",
    modern: "bg-transparent text-white hover:bg-white/10 border border-green-500"
  };
  
  const sizes = {
    sm: "h-9 px-3 text-sm",
    md: "h-10 py-2 px-4",
    lg: "h-11 px-8 text-lg"
  };
  
  const classes = `${baseClasses} ${variants[variant]} ${sizes[size]} ${className}`;
  
  if (asChild && props.href) {
    return <a className={classes} {...props}>{children}</a>;
  }
  
  return <button className={classes} {...props}>{children}</button>;
};

const Card = ({ children, className = "", ...props }) => (
  <div className={`rounded-lg border bg-gray-800/50 text-white shadow-lg p-4 ${className}`} {...props}>
    {children}
  </div>
);

const CardHeader = ({ children, className = "", ...props }) => (
  <div className={`flex flex-col space-y-2 mb-4 ${className}`} {...props}>
    {children}
  </div>
);

const CardTitle = ({ children, className = "", ...props }) => (
  <h3 className={`text-xl font-semibold leading-tight ${className}`} {...props}>
    {children}
  </h3>
);

const CardDescription = ({ children, className = "", ...props }) => (
  <p className={`text-sm text-gray-300 ${className}`} {...props}>
    {children}
  </p>
);

const CardContent = ({ children, className = "", ...props }) => (
  <div className={`${className}`} {...props}>
    {children}
  </div>
);

const Shield = ({ className = "w-5 h-5", strokeWidth = 2, ...props }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={strokeWidth} {...props}>
    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
  </svg>
);

const Check = ({ className = "w-5 h-5", strokeWidth = 2, ...props }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={strokeWidth} {...props}>
    <polyline points="20,6 9,17 4,12" />
  </svg>
);

export default function PrivacyPage() {
  // Smooth anchor scroll fallback if needed (same behavior as index page style)
  useEffect(() => {
    if (typeof document === 'undefined' || 'scrollBehavior' in document.documentElement.style) return;
    const onClick = (e) => {
      const anchor = e.target.closest('a[href^="#"]');
      if (!anchor) return;
      const href = anchor.getAttribute('href');
      if (!href) return;
      const target = document.querySelector(href);
      if (target) {
        e.preventDefault();
        target.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    };
    document.addEventListener('click', onClick);
    return () => document.removeEventListener('click', onClick);
  }, []);

  return (
    <>
      <Head>
        <title>Kebijakan Privasi — NANIMEID</title>
        <meta name="description" content="Kebijakan Privasi NANIMEID untuk publikasi di Google Play Store." />
      </Head>

      <main className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-black p-6 font-sans">
        {/* Top Nav */}
        <nav className="max-w-6xl mx-auto flex items-center justify-between mb-8">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-lg shadow-lg"></div>
            <span className="text-xl font-bold tracking-tight text-white">NANIMEID</span>
          </div>
          <div className="hidden sm:flex items-center gap-3">
            <Button asChild variant="outline" size="sm">
              <a href="/">Beranda</a>
            </Button>
            <Button asChild variant="default" size="sm">
              <a href="#kontak">Kontak</a>
            </Button>
          </div>
        </nav>

        {/* Hero */}
        <section className="text-center mb-12 max-w-6xl mx-auto">
          <div className="relative inline-block">
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-4 tracking-tight bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
              Kebijakan Privasi
            </h1>
            <div className="absolute -top-2 -right-2 w-4 h-4 bg-gradient-to-r from-pink-500 to-red-500 rounded-full animate-pulse"></div>
            <div className="absolute -bottom-2 -left-2 w-3 h-3 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full animate-pulse"></div>
          </div>

          <Card className="bg-gray-900/50 border-gray-700 backdrop-blur-lg max-w-2xl mx-auto mt-6">
            <CardContent className="p-6">
              <p className="text-gray-300">
                Terakhir diperbarui: <span className="text-white font-semibold">15 September 2025</span>
              </p>
            </CardContent>
          </Card>
        </section>

        {/* Policy Content */}
        <section className="max-w-3xl mx-auto space-y-6 mb-20">
          <Card className="bg-gray-900/50 border-gray-700 backdrop-blur-lg">
            <CardHeader>
              <CardTitle className="text-2xl text-white flex items-center gap-2"><Shield className="w-6 h-6" />Ringkasan</CardTitle>
            </CardHeader>
            <CardContent className="text-gray-300 space-y-3">
              <p>
                NANIMEID berkomitmen untuk melindungi privasi Anda. Kebijakan ini menjelaskan
                jenis data apa yang kami proses, bagaimana kami menggunakannya, dan pilihan yang Anda miliki.
              </p>
              <ul className="list-disc pl-6 space-y-1">
                <li>Kami tidak menjual data pengguna.</li>
                <li>Kami tidak meminta data pribadi sensitif.</li>
                <li>Data teknis anonim dapat diproses untuk meningkatkan kualitas layanan.</li>
              </ul>
            </CardContent>
          </Card>

          <Card className="bg-gradient-to-br from-blue-900/50 to-indigo-900/50 border-blue-800 backdrop-blur-lg">
            <CardHeader>
              <CardTitle className="text-2xl text-white">Informasi yang Kami Kumpulkan</CardTitle>
            </CardHeader>
            <CardContent className="text-gray-300 space-y-3">
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
            </CardContent>
          </Card>

          <Card className="bg-gradient-to-br from-green-900/50 to-emerald-900/50 border-green-800 backdrop-blur-lg">
            <CardHeader>
              <CardTitle className="text-2xl text-white">Cara Kami Menggunakan Data</CardTitle>
            </CardHeader>
            <CardContent className="text-gray-300 space-y-2">
              <ul className="list-disc pl-6 space-y-1">
                <li>Meningkatkan stabilitas, keamanan, dan performa aplikasi.</li>
                <li>Menganalisis fitur yang paling sering digunakan untuk prioritas pengembangan.</li>
                <li>Menangani bug, crash, dan dukungan teknis.</li>
              </ul>
            </CardContent>
          </Card>

          <Card className="bg-gradient-to-br from-yellow-900/50 to-orange-900/50 border-yellow-800 backdrop-blur-lg">
            <CardHeader>
              <CardTitle className="text-2xl text-white">Penyimpanan & Keamanan</CardTitle>
            </CardHeader>
            <CardContent className="text-gray-300 space-y-2">
              <p>
                Kami menerapkan langkah-langkah keamanan yang wajar untuk melindungi data. Data teknis disimpan
                hanya selama diperlukan untuk tujuan yang dijelaskan dan kemudian dihapus atau dianonimkan.
              </p>
            </CardContent>
          </Card>

          <Card className="bg-gradient-to-br from-purple-900/50 to-violet-900/50 border-purple-800 backdrop-blur-lg">
            <CardHeader>
              <CardTitle className="text-2xl text-white">Berbagi Informasi</CardTitle>
            </CardHeader>
            <CardContent className="text-gray-300 space-y-2">
              <p>
                Kami tidak menjual atau menyewakan data pengguna. Kami dapat berbagi data teknis anonim dengan penyedia layanan
                yang membantu kami menjalankan dan mengembangkan aplikasi (misal analitik atau pelaporan crash) sesuai perjanjian pemrosesan data.
              </p>
            </CardContent>
          </Card>

          <Card className="bg-gray-900/50 border-gray-700 backdrop-blur-lg">
            <CardHeader>
              <CardTitle className="text-2xl text-white">Hak Pengguna</CardTitle>
            </CardHeader>
            <CardContent className="text-gray-300 space-y-2">
              <p>
                Anda dapat meminta informasi, koreksi, atau penghapusan data yang Anda berikan secara sukarela (jika ada).
                Hubungi kami melalui kanal resmi di bawah ini.
              </p>
            </CardContent>
          </Card>

          <Card className="bg-gradient-to-br from-red-900/50 to-pink-900/50 border-red-800 backdrop-blur-lg">
            <CardHeader>
              <CardTitle className="text-2xl text-white">Anak di Bawah Umur</CardTitle>
            </CardHeader>
            <CardContent className="text-gray-300 space-y-2">
              <p>
                Aplikasi tidak ditujukan untuk anak di bawah 13 tahun. Kami tidak dengan sengaja mengumpulkan data pribadi anak.
                Jika Anda adalah orang tua/wali dan mengetahui anak memberikan data kepada kami, hubungi kami untuk penghapusan.
              </p>
            </CardContent>
          </Card>

          <Card className="bg-gray-900/50 border-gray-700 backdrop-blur-lg">
            <CardHeader>
              <CardTitle className="text-2xl text-white">Perubahan Kebijakan</CardTitle>
            </CardHeader>
            <CardContent className="text-gray-300 space-y-2">
              <p>
                Kami dapat memperbarui Kebijakan Privasi ini dari waktu ke waktu. Perubahan akan dipublikasikan di halaman ini
                beserta tanggal pembaruan terbaru di bagian atas dokumen.
              </p>
            </CardContent>
          </Card>

          <Card id="kontak" className="bg-gray-900/50 border-gray-700 backdrop-blur-lg">
            <CardHeader>
              <CardTitle className="text-2xl text-white">Kontak</CardTitle>
              <CardDescription>Hubungi kami jika ada pertanyaan terkait privasi.</CardDescription>
            </CardHeader>
            <CardContent className="text-gray-300 space-y-2">
              <p>
                Kanal resmi: Grup WhatsApp Komunitas NANIMEID. Tautan tersedia di halaman beranda bagian "Komunitas".
              </p>
              <p>
                Jika Anda membutuhkan saluran kontak tambahan (mis. email), silakan hubungi kami melalui komunitas untuk mendapatkan alamat resmi terbaru.
              </p>
              <div className="pt-2">
                <Button asChild variant="modern" size="md">
                  <a href="/">Kembali ke Beranda</a>
                </Button>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Footer */}
        <footer className="w-full border-t border-gray-700 pt-8">
          <Card className="bg-gray-900/50 border-gray-700 backdrop-blur-lg max-w-2xl mx-auto text-center">
            <CardContent className="p-6">
              <p className="font-bold text-lg text-white mb-2">© 2025 NANIMEID</p>
              <p className="text-gray-400">SEMUA HAK DILINDUNGI UNDANG-UNDANG</p>
            </CardContent>
          </Card>
          <div className="flex justify-center items-center mt-8 gap-4">
            <div className="w-4 h-4 bg-gradient-to-r from-red-500 to-pink-500 rounded-full animate-pulse"></div>
            <div className="w-6 h-6 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full animate-pulse"></div>
            <div className="w-3 h-3 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full animate-pulse"></div>
            <div className="w-5 h-5 bg-gradient-to-r from-purple-500 to-violet-500 rounded-full animate-pulse"></div>
            <div className="w-4 h-4 bg-gradient-to-r from-yellow-500 to-orange-500 rounded-full animate-pulse"></div>
          </div>
        </footer>
      </main>
    </>
  );
}
