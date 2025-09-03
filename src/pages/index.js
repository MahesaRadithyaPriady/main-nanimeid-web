import Head from "next/head";
import { useEffect, useState } from "react";
import { Play, Download, Star, Smartphone, Zap, Users, Clock, Shield } from "lucide-react";

export default function Home() {
  // Countdown to September 27 (local time). If already passed this year, target next year.
  const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });
  const [released, setReleased] = useState(false);

  useEffect(() => {
    const computeTarget = () => {
      const now = new Date();
      const year = now.getFullYear();
      const targetThisYear = new Date(year, 8, 27, 0, 0, 0); // Month is 0-indexed: 8 = September
      return targetThisYear.getTime() <= now.getTime()
        ? new Date(year + 1, 8, 27, 0, 0, 0)
        : targetThisYear;
    };

    let targetDate = computeTarget();

    const tick = () => {
      const diff = targetDate.getTime() - Date.now();
      if (diff <= 0) {
        setReleased(true);
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
        return;
      }
      const days = Math.floor(diff / (1000 * 60 * 60 * 24));
      const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
      const minutes = Math.floor((diff / (1000 * 60)) % 60);
      const seconds = Math.floor((diff / 1000) % 60);
      setTimeLeft({ days, hours, minutes, seconds });
    };

    tick();
    const id = setInterval(tick, 1000);
    return () => clearInterval(id);
  }, []);

  // JS fallback for browsers tanpa CSS smooth-scroll
  useEffect(() => {
    // Jika browser sudah support CSS smooth, tidak perlu JS
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
        <title>NANIMEID — Streaming Anime Terbaik</title>
        <meta
          name="description"
          content="Nonton dan download anime favoritmu dengan UI modern, bebas iklan, dan update harian."
        />
      </Head>
      <main className="min-h-screen bg-gradient-to-br from-yellow-200 via-yellow-300 to-yellow-400 p-6 font-mono">
        {/* Top Nav */}
        <nav className="max-w-6xl mx-auto flex items-center justify-between mb-8">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 bg-black border-4 border-black bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-yellow-300 to-yellow-400"></div>
            <span className="text-xl font-black tracking-tight">NANIMEID</span>
          </div>
          <div className="hidden sm:flex items-center gap-3">
            <a href="#countdown" className="bg-yellow-300 border-4 border-black px-4 py-2 font-black hover:translate-y-[-2px] transition-transform shadow-[4px_4px_0px_0px_#000]">Rilis</a>
            <a href="#features" className="bg-white border-4 border-black px-4 py-2 font-black hover:translate-y-[-2px] transition-transform shadow-[4px_4px_0px_0px_#000]">Fitur</a>
            <a href="#about" className="bg-white border-4 border-black px-4 py-2 font-black hover:translate-y-[-2px] transition-transform shadow-[4px_4px_0px_0px_#000]">Tentang</a>
            <a href="#download" className="bg-black text-yellow-300 border-4 border-black px-4 py-2 font-black hover:translate-y-[-2px] transition-transform shadow-[4px_4px_0px_#FF0000]">Download</a>
            <a href="#community" className="bg-green-500 text-black border-4 border-black px-4 py-2 font-black hover:translate-y-[-2px] transition-transform shadow-[4px_4px_0px_0px_#000]">Komunitas</a>
          </div>
        </nav>
      
      {/* Hero Section */}
      <section className="text-center mb-20 max-w-6xl mx-auto">
        <div className="relative inline-block">
          <h1 className="text-6xl md:text-8xl font-black text-black transform -rotate-1 mb-6 tracking-tight">
            NANIMEID
          </h1>
          <div className="absolute -top-2 -right-2 w-8 h-8 bg-red-500 border-4 border-black transform rotate-12"></div>
          <div className="absolute -bottom-2 -left-2 w-6 h-6 bg-blue-500 border-4 border-black transform -rotate-12"></div>
        </div>
        
        <div className="bg-black text-yellow-300 p-6 border-8 border-black transform rotate-1 inline-block max-w-2xl mx-auto shadow-[8px_8px_0px_0px_#000000]">
          <p className="text-xl md:text-2xl font-bold uppercase tracking-wide">
            STREAMING ANIME TERBAIK<br/>
            TANPA RIBET!!!
          </p>
        </div>
        <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
          <a href="#download" className="group relative bg-red-500 text-white border-8 border-black px-8 py-4 font-black text-xl hover:bg-white hover:text-black transition-all duration-200 transform hover:rotate-2 hover:scale-105 shadow-[8px_8px_0px_0px_#000000] uppercase tracking-wide">
            <Play className="inline-block w-6 h-6 mr-2" strokeWidth={3} /> Mulai Nonton
          </a>
          <a href="#features" className="group relative bg-white text-black border-8 border-black px-8 py-4 font-black text-xl hover:bg-yellow-300 transition-all duration-200 transform hover:-rotate-2 hover:scale-105 shadow-[8px_8px_0px_0px_#000000] uppercase tracking-wide">
            Lihat Fitur
          </a>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="text-center mb-20 max-w-6xl mx-auto">
        <div className="relative inline-block">
          <h2 className="text-4xl md:text-5xl font-black text-black transform -rotate-1 mb-4 tracking-tight">
            TENTANG NANIMEID
          </h2>
          <div className="absolute -top-2 -right-2 w-6 h-6 bg-red-500 border-4 border-black transform rotate-12"></div>
          <div className="absolute -bottom-2 -left-2 w-5 h-5 bg-blue-500 border-4 border-black transform -rotate-12"></div>
        </div>

        <div className="mt-6 bg-black text-yellow-300 p-6 border-8 border-black transform rotate-1 inline-block max-w-3xl mx-auto shadow-[8px_8px_0px_0px_#000000]">
          <p className="text-lg md:text-xl font-bold">
            Aplikasi NANIMEID adalah platform streaming anime yang fokus pada pengalaman nonton yang cepat, bebas iklan mengganggu, dan mudah digunakan. Kami berkomitmen menghadirkan update anime terbaru, UI modern, serta fitur favorit untuk menemani harimu.
          </p>
        </div>
      </section>

      {/* Struktur Organisasi */}
      <section className="max-w-4xl mx-auto mb-20">
        <div className="bg-red-500 border-8 border-black p-6 transform -rotate-1 shadow-[12px_12px_0px_0px_#000000] mb-8">
          <h3 className="text-3xl md:text-4xl font-black text-white tracking-tight">Struktur Organisasi</h3>
        </div>

        <div className="space-y-6">
          <div className="bg-white border-8 border-black p-6 transform rotate-1 shadow-[8px_8px_0px_0px_#000000]">
            <h4 className="text-2xl font-black text-black mb-2">Founder</h4>
            <ul className="list-disc pl-6 font-bold text-black">
              <li>Mahesa Radithya Priady</li>
            </ul>
          </div>

          <div className="bg-blue-500 text-white border-8 border-black p-6 transform -rotate-1 shadow-[8px_8px_0px_0px_#000000]">
            <h4 className="text-2xl font-black mb-2">Bendahara / Keuangan</h4>
            <ul className="list-disc pl-6 font-bold">
              <li>Mutiara Khairunnisa</li>
              <li>Syafira Amelia Nur Hidayat</li>
            </ul>
          </div>

          <div className="bg-green-500 text-black border-8 border-black p-6 transform rotate-1 shadow-[8px_8px_0px_0px_#000000]">
            <h4 className="text-2xl font-black mb-2">Uploader</h4>
            <ul className="list-disc pl-6 font-bold">
              <li>Azriel Anwar</li>
              <li>Yori</li>
            </ul>
          </div>

          <div className="bg-purple-500 text-white border-8 border-black p-6 transform -rotate-1 shadow-[8px_8px_0px_0px_#000000]">
            <h4 className="text-2xl font-black mb-2">Pengurus Media Sosial</h4>
            <ul className="list-disc pl-6 font-bold">
              <li>Rayhan Hanif Fauzy</li>
            </ul>
          </div>

          <div className="bg-yellow-300 text-black border-8 border-black p-6 transform rotate-1 shadow-[8px_8px_0px_0px_#000000]">
            <h4 className="text-2xl font-black mb-2">Design</h4>
            <ul className="list-disc pl-6 font-bold">
              <li>Adya Ahmad Pramudya</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Visi & Misi */}
      <section className="max-w-6xl mx-auto mb-20">
        <div className="bg-black text-yellow-300 p-6 border-8 border-black transform rotate-1 shadow-[12px_12px_0px_0px_#FF0000] mb-8 text-center">
          <h3 className="text-3xl md:text-4xl font-black tracking-wide">Visi & Misi</h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-white border-8 border-black p-6 transform -rotate-1 shadow-[8px_8px_0px_0px_#000000]">
            <h4 className="text-2xl font-black text-black mb-3">Visi</h4>
            <p className="font-bold text-black">
              Menjadi platform streaming anime pilihan utama di Indonesia dengan pengalaman nonton yang cepat, aman, dan menyenangkan untuk semua kalangan.
            </p>
          </div>

          <div className="bg-green-500 border-8 border-black p-6 transform rotate-1 shadow-[8px_8px_0px_0px_#000000] text-black">
            <h4 className="text-2xl font-black mb-3">Misi</h4>
            <ul className="list-disc pl-6 font-bold space-y-1">
              <li>Menyediakan update anime terbaru secara konsisten.</li>
              <li>Menghadirkan antarmuka modern yang mudah digunakan.</li>
              <li>Meminimalkan iklan mengganggu demi kenyamanan pengguna.</li>
              <li>Mendukung komunitas anime lokal melalui konten berkualitas.</li>
            </ul>
          </div>
        </div>
      </section>
      {/* Countdown Section */}
      <section id="countdown" className="mb-20 max-w-6xl mx-auto">
        <div className="bg-yellow-300 border-8 border-black p-8 transform rotate-1 shadow-[12px_12px_0px_0px_#000000] mb-8 text-center">
          <h2 className="text-3xl md:text-4xl font-black text-black tracking-tight mb-2">
            Menuju Rilis 27 September
          </h2>
          <p className="font-bold text-black opacity-80">Tandai kalendermu dan siap-siap nonton!</p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-6">
          <div className="bg-white border-8 border-black p-4 text-center transform -rotate-1 shadow-[8px_8px_0px_0px_#000000]">
            <div className="text-4xl md:text-5xl font-black text-black">{timeLeft.days}</div>
            <div className="text-sm md:text-base font-bold uppercase text-black">Hari</div>
          </div>
          <div className="bg-blue-500 border-8 border-black p-4 text-center transform rotate-1 shadow-[8px_8px_0px_0px_#000000] text-white">
            <div className="text-4xl md:text-5xl font-black">{String(timeLeft.hours).padStart(2, '0')}</div>
            <div className="text-sm md:text-base font-bold uppercase">Jam</div>
          </div>
          <div className="bg-green-500 border-8 border-black p-4 text-center transform -rotate-1 shadow-[8px_8px_0px_0px_#000000] text-black">
            <div className="text-4xl md:text-5xl font-black">{String(timeLeft.minutes).padStart(2, '0')}</div>
            <div className="text-sm md:text-base font-bold uppercase">Menit</div>
          </div>
          <div className="bg-red-500 border-8 border-black p-4 text-center transform rotate-1 shadow-[8px_8px_0px_0px_#000000] text-white">
            <div className="text-4xl md:text-5xl font-black">{String(timeLeft.seconds).padStart(2, '0')}</div>
            <div className="text-sm md:text-base font-bold uppercase">Detik</div>
          </div>
        </div>

        <div className="text-center mt-8">
          {released ? (
            <a href="#download" className="inline-block bg-black text-yellow-300 border-8 border-black px-8 py-4 font-black text-xl transform hover:rotate-2 hover:scale-105 transition-all shadow-[8px_8px_0px_0px_#FF0000]">
              Rilis hari ini! Download sekarang
            </a>
          ) : (
            <span className="inline-block bg-white border-8 border-black px-6 py-3 font-black text-lg transform hover:-rotate-1 transition-all shadow-[8px_8px_0px_0px_#000000]">
              Hitung mundur dimulai...
            </span>
          )}
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="mb-20 max-w-6xl mx-auto">
        <div className="bg-red-500 border-8 border-black p-8 transform -rotate-1 shadow-[12px_12px_0px_0px_#000000] mb-8">
          <h2 className="text-4xl md:text-5xl font-black text-white mb-6 transform rotate-1 tracking-tight">
            FITUR KEREN!
          </h2>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-white border-8 border-black p-6 transform rotate-1 shadow-[8px_8px_0px_0px_#000000] hover:translate-y-[-4px] transition-transform">
            <div className="flex items-center mb-4">
              <div className="w-12 h-12 bg-green-500 border-4 border-black mr-4 flex items-center justify-center">
                <Shield className="w-6 h-6 text-black" strokeWidth={3} />
              </div>
              <h3 className="text-2xl font-black text-black">BEBAS IKLAN</h3>
            </div>
            <p className="text-black font-bold text-lg">Nonton anime tanpa gangguan iklan yang menyebalkan!</p>
          </div>
          
          <div className="bg-blue-500 border-8 border-black p-6 transform -rotate-1 shadow-[8px_8px_0px_0px_#000000] hover:translate-y-[-4px] transition-transform">
            <div className="flex items-center mb-4">
              <div className="w-12 h-12 bg-yellow-300 border-4 border-black mr-4 flex items-center justify-center">
                <Zap className="w-6 h-6 text-black" strokeWidth={3} />
              </div>
              <h3 className="text-2xl font-black text-white">UPDATE HARIAN</h3>
            </div>
            <p className="text-white font-bold text-lg">Episode terbaru langsung tersedia setiap hari!</p>
          </div>
          
          <div className="bg-green-500 border-8 border-black p-6 transform rotate-1 shadow-[8px_8px_0px_0px_#000000] hover:translate-y-[-4px] transition-transform">
            <div className="flex items-center mb-4">
              <div className="w-12 h-12 bg-red-500 border-4 border-black mr-4 flex items-center justify-center">
                <Star className="w-6 h-6 text-white" strokeWidth={3} fill="white" />
              </div>
              <h3 className="text-2xl font-black text-black">DAFTAR FAVORIT</h3>
            </div>
            <p className="text-black font-bold text-lg">Simpan anime favorit & track history tontonanmu!</p>
          </div>
          
          <div className="bg-purple-500 border-8 border-black p-6 transform -rotate-1 shadow-[8px_8px_0px_0px_#000000] hover:translate-y-[-4px] transition-transform">
            <div className="flex items-center mb-4">
              <div className="w-12 h-12 bg-yellow-300 border-4 border-black mr-4 flex items-center justify-center">
                <Smartphone className="w-6 h-6 text-black" strokeWidth={3} />
              </div>
              <h3 className="text-2xl font-black text-white">UI MODERN</h3>
            </div>
            <p className="text-white font-bold text-lg">Interface keren yang mudah digunakan siapa aja!</p>
          </div>
        </div>
      </section>

      {/* Requirements Section */}
      <section className="mb-20 text-center max-w-6xl mx-auto">
        <div className="bg-black text-yellow-300 p-8 border-8 border-black transform rotate-1 shadow-[12px_12px_0px_0px_#FF0000] max-w-2xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-black mb-4 tracking-wide">
            SYARAT DOWNLOAD
          </h2>
          <div className="flex items-center justify-center mb-2">
            <Smartphone className="w-6 h-6 mr-3" strokeWidth={3} />
            <p className="text-xl font-bold">Android 5.0 ke atas</p>
          </div>
          <div className="flex items-center justify-center mb-2">
            <Download className="w-6 h-6 mr-3" strokeWidth={3} />
            <p className="text-xl font-bold">Minimal 100MB storage</p>
          </div>
          <div className="flex items-center justify-center">
            <Zap className="w-6 h-6 mr-3" strokeWidth={3} />
            <p className="text-xl font-bold">Koneksi internet stabil</p>
          </div>
        </div>
      </section>

      {/* Download Buttons */}
      <section id="download" className="flex flex-col lg:flex-row gap-12 mb-20 justify-center items-center max-w-6xl mx-auto">
        <a
          aria-disabled
          className="group relative bg-red-500 text-white border-8 border-black px-12 py-8 font-black text-2xl transition-all duration-200 transform shadow-[8px_8px_0px_0px_#000000] uppercase tracking-wide pointer-events-none opacity-60 cursor-not-allowed"
          title="Segera hadir"
        >
          <div className="absolute -top-2 -left-2 w-6 h-6 bg-yellow-300 border-4 border-black"></div>
          <div className="absolute -bottom-2 -right-2 w-6 h-6 bg-blue-500 border-4 border-black"></div>
          DOWNLOAD APK
          <br/>
          <span className="text-lg">🚧 Segera Hadir</span>
        </a>

        <a
          aria-disabled
          className="group relative bg-green-500 text-black border-8 border-black px-12 py-8 font-black text-2xl transition-all duration-200 transform shadow-[8px_8px_0px_0px_#000000] uppercase tracking-wide pointer-events-none opacity-60 cursor-not-allowed"
          title="Segera hadir"
        >
          <div className="absolute -top-2 -right-2 w-6 h-6 bg-purple-500 border-4 border-black"></div>
          <div className="absolute -bottom-2 -left-2 w-6 h-6 bg-red-500 border-4 border-black"></div>
          PLAY STORE
          <br/>
          <span className="text-lg">🚧 Segera Hadir</span>
        </a>
      </section>

      {/* Warning Section */}
      <section className="mb-20 w-full max-w-4xl mx-auto">
          <div className="bg-red-500 border-8 border-black p-8 transform -rotate-1 shadow-[12px_12px_0px_0px_#000000]">
          <div className="flex items-center justify-center mb-4">
            <div className="w-12 h-12 bg-yellow-300 border-4 border-black mr-4 flex items-center justify-center">
              <Shield className="w-8 h-8 text-black" strokeWidth={4} />
            </div>
            <h2 className="text-3xl md:text-4xl font-black text-white tracking-wide">
              PERHATIAN!
            </h2>
          </div>
          <p className="text-white font-bold text-xl text-center">
            HANYA DOWNLOAD DARI LINK RESMI DI ATAS!<br/>
            WASPADAI APLIKASI PALSU & MALWARE!
          </p>
        </div>
      </section>

      {/* Stats Section - temporarily disabled */}
      {false && (
        <section className="mb-20 w-full max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-yellow-300 border-8 border-black p-6 text-center transform rotate-2 shadow-[8px_8px_0px_0px_#000000] hover:translate-y-[-4px] transition-transform">
              <div className="flex items-center justify-center gap-2 text-5xl font-black text-black mb-2"><Play className="w-8 h-8" strokeWidth={3} />1000+</div>
              <div className="text-xl font-bold text-black uppercase">Anime Series</div>
            </div>
            
            <div className="bg-purple-500 border-8 border-black p-6 text-center transform -rotate-1 shadow-[8px_8px_0px_0px_#000000] hover:translate-y-[-4px] transition-transform">
              <div className="flex items-center justify-center gap-2 text-5xl font-black text-white mb-2"><Users className="w-8 h-8" strokeWidth={3} />50K+</div>
              <div className="text-xl font-bold text-white uppercase">Users Aktif</div>
            </div>
            
            <div className="bg-green-500 border-8 border-black p-6 text-center transform rotate-1 shadow-[8px_8px_0px_0px_#000000] hover:translate-y-[-4px] transition-transform">
              <div className="flex items-center justify-center gap-2 text-5xl font-black text-black mb-2"><Clock className="w-8 h-8" strokeWidth={3} />24/7</div>
              <div className="text-xl font-bold text-black uppercase">Server Online</div>
            </div>
          </div>
        </section>
      )}

      {/* Roadmap / Future Plans */}
      <section className="max-w-6xl mx-auto mb-20">
        <div className="bg-blue-500 border-8 border-black p-6 transform -rotate-1 shadow-[12px_12px_0px_0px_#000000] mb-8 text-center">
          <h3 className="text-3xl md:text-4xl font-black text-white tracking-wide">Rencana Besar ke Depan</h3>
        </div>

        <div className="grid grid-cols-1 gap-6">
          <div className="bg-white border-8 border-black p-6 transform rotate-1 shadow-[8px_8px_0px_0px_#000000]">
            <h4 className="text-2xl font-black text-black mb-2">1. Buat versi webnya</h4>
            <p className="font-bold text-black">Menghadirkan versi web NANIMEID agar bisa diakses langsung dari browser dengan performa cepat dan tampilan responsif.</p>
          </div>
          <div className="bg-green-500 border-8 border-black p-6 transform -rotate-1 shadow-[8px_8px_0px_0px_#000000] text-black">
            <h4 className="text-2xl font-black mb-2">2. Baca komik manga dalam 1 app</h4>
            <p className="font-bold">Menambahkan fitur pembaca manga terintegrasi, sehingga pengguna bisa streaming anime dan membaca manga dalam satu aplikasi.</p>
          </div>
        </div>
      </section>

      {/* Community Section */}
      <section id="community" className="max-w-4xl mx-auto mb-20 text-center">
        <div className="bg-green-500 border-8 border-black p-8 transform -rotate-1 shadow-[12px_12px_0px_0px_#000000] mb-6">
          <h3 className="text-3xl md:text-4xl font-black text-black tracking-wide">Gabung Komunitas WA</h3>
        </div>
        <div className="bg-white border-8 border-black p-6 transform rotate-1 shadow-[8px_8px_0px_0px_#000000] max-w-2xl mx-auto">
          <p className="font-bold text-black text-lg">
            Ayo gabung ke grup WhatsApp resmi NANIMEID untuk update terbaru, diskusi anime, dan info rilis!
          </p>
        </div>
        <div className="mt-8">
          <a
            href="https://chat.whatsapp.com/Goqy8OktkPN0ZLn6TXOimG?mode=ems_copy_c"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-black text-yellow-300 border-8 border-black px-10 py-5 font-black text-2xl transform hover:rotate-2 hover:scale-105 transition-all shadow-[8px_8px_0px_0px_#25D366]"
            title="Gabung Komunitas WhatsApp NANIMEID"
          >
            🚀 Gabung di WhatsApp
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="w-full border-t-8 border-black pt-8">
        <div className="bg-black text-yellow-300 p-6 border-8 border-black transform rotate-1 shadow-[8px_8px_0px_0px_#FF0000] max-w-2xl mx-auto text-center">
          <p className="font-black text-lg uppercase tracking-wide mb-2">
            © 2025 NANIMEID
          </p>
          <p className="font-bold">
            SEMUA HAK DILINDUNGI UNDANG-UNDANG
          </p>
        </div>
        
        {/* Decorative elements */}
        <div className="flex justify-center items-center mt-8 gap-4">
          <div className="w-8 h-8 bg-red-500 border-4 border-black transform rotate-45"></div>
          <div className="w-12 h-12 bg-blue-500 border-4 border-black transform -rotate-12"></div>
          <div className="w-6 h-6 bg-green-500 border-4 border-black transform rotate-12"></div>
          <div className="w-10 h-10 bg-purple-500 border-4 border-black transform rotate-45"></div>
          <div className="w-8 h-8 bg-yellow-300 border-4 border-black transform -rotate-12"></div>
        </div>
      </footer>
    </main>
    </>
  );
}