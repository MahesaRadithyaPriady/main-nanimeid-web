import Head from "next/head";
import { useEffect, useState } from "react";
import { Play, Download, Star, Smartphone, Zap, Users, Clock, Shield, Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { motion } from "framer-motion";

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
      <main className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-black p-6 font-sans">
        {/* Top Nav */}
        <nav className="max-w-6xl mx-auto flex items-center justify-between mb-8">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-lg shadow-lg"></div>
            <span className="text-xl font-bold tracking-tight text-white">NANIMEID</span>
          </div>
          <div className="hidden sm:flex items-center gap-3">
            <Button asChild variant="gradient" size="sm">
              <a href="#countdown">Rilis</a>
            </Button>
            <Button asChild variant="outline" size="sm">
              <a href="#features">Fitur</a>
            </Button>
            <Button asChild variant="outline" size="sm">
              <a href="#about">Tentang</a>
            </Button>
            <Button asChild variant="default" size="sm">
              <a href="#download">Download</a>
            </Button>
            <Button asChild variant="modern" size="sm">
              <a href="#community">Komunitas</a>
            </Button>
          </div>
        </nav>
      
      {/* Hero Section */}
      <section className="text-center mb-20 max-w-6xl mx-auto">
        <div className="relative inline-block">
          <h1 className="text-6xl md:text-8xl font-bold text-white mb-6 tracking-tight bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
            NANIMEID
          </h1>
          <div className="absolute -top-2 -right-2 w-4 h-4 bg-gradient-to-r from-pink-500 to-red-500 rounded-full animate-pulse"></div>
          <div className="absolute -bottom-2 -left-2 w-3 h-3 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full animate-pulse"></div>
        </div>
        
        <Card className="bg-gray-900/50 border-gray-700 backdrop-blur-lg max-w-2xl mx-auto">
          <CardContent className="p-6">
            <p className="text-xl md:text-2xl font-bold text-center text-white">
              STREAMING ANIME TERBAIK<br/>
              <span className="bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent">TANPA RIBET!</span>
            </p>
          </CardContent>
        </Card>
        <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            transition={{ type: "spring", stiffness: 400, damping: 17 }}
          >
            <Button asChild variant="outline" size="lg" className="text-lg px-8 py-6 bg-white text-black border-white hover:bg-gray-100">
              <a href="#download">
                <Check className="w-5 h-5 mr-2" /> Mulai Nonton
              </a>
            </Button>
          </motion.div>
          <Button asChild variant="outline" size="lg" className="text-lg px-8 py-6 border-gray-600 text-white hover:bg-gray-800">
            <a href="#features">
              Lihat Fitur
            </a>
          </Button>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="text-center mb-20 max-w-6xl mx-auto">
        <div className="relative inline-block mb-8">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4 tracking-tight bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
            TENTANG NANIMEID
          </h2>
          <div className="absolute -top-2 -right-2 w-3 h-3 bg-gradient-to-r from-red-500 to-pink-500 rounded-full animate-pulse"></div>
          <div className="absolute -bottom-2 -left-2 w-2 h-2 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full animate-pulse"></div>
        </div>

        <Card className="bg-gray-900/50 border-gray-700 backdrop-blur-lg max-w-3xl mx-auto">
          <CardContent className="p-8">
            <p className="text-lg md:text-xl text-gray-300 leading-relaxed">
              Aplikasi NANIMEID adalah platform streaming anime yang fokus pada pengalaman nonton yang cepat, bebas iklan mengganggu, dan mudah digunakan. Kami berkomitmen menghadirkan update anime terbaru, UI modern, serta fitur favorit untuk menemani harimu.
            </p>
          </CardContent>
        </Card>
      </section>

      {/* Struktur Organisasi */}
      <section className="max-w-4xl mx-auto mb-20">
        <Card className="bg-gradient-to-r from-red-900/50 to-pink-900/50 border-red-800 backdrop-blur-lg mb-8">
          <CardHeader>
            <CardTitle className="text-3xl md:text-4xl text-white text-center">Struktur Organisasi</CardTitle>
          </CardHeader>
        </Card>

        <div className="space-y-6">
          <Card className="bg-gray-900/50 border-gray-700 backdrop-blur-lg">
            <CardHeader>
              <CardTitle className="text-2xl text-white">Founder</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-300 mb-4">KIRA adalah Founder NANIMEID sejak 2025 dan terus memimpin pengembangan serta visi platform hingga sekarang.</p>
              <p className="text-gray-300">Fokus pada pengalaman nonton yang cepat, aman, dan bebas gangguan, KIRA mendorong inovasi fitur dan kualitas layanan untuk komunitas anime Indonesia.</p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Visi & Misi */}
      <section className="max-w-6xl mx-auto mb-20">
        <Card className="bg-gradient-to-r from-purple-900/50 to-indigo-900/50 border-purple-800 backdrop-blur-lg mb-8">
          <CardHeader>
            <CardTitle className="text-3xl md:text-4xl text-white text-center">Visi & Misi</CardTitle>
          </CardHeader>
        </Card>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <Card className="bg-gray-900/50 border-gray-700 backdrop-blur-lg">
            <CardHeader>
              <CardTitle className="text-2xl text-white">Visi</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-300">
                Menjadi platform streaming anime pilihan utama di Indonesia dengan pengalaman nonton yang cepat, aman, dan menyenangkan untuk semua kalangan.
              </p>
            </CardContent>
          </Card>

          <Card className="bg-gradient-to-br from-green-900/50 to-emerald-900/50 border-green-800 backdrop-blur-lg">
            <CardHeader>
              <CardTitle className="text-2xl text-white">Misi</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="list-disc pl-6 text-gray-300 space-y-2">
                <li>Menyediakan update anime terbaru secara konsisten.</li>
                <li>Menghadirkan antarmuka modern yang mudah digunakan.</li>
                <li>Meminimalkan iklan mengganggu demi kenyamanan pengguna.</li>
                <li>Mendukung komunitas anime lokal melalui konten berkualitas.</li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </section>
      {/* Countdown Section */}
      <section id="countdown" className="mb-20 max-w-6xl mx-auto">
        <Card className="bg-gradient-to-r from-yellow-900/50 to-orange-900/50 border-yellow-800 backdrop-blur-lg mb-8">
          <CardHeader className="text-center">
            <CardTitle className="text-3xl md:text-4xl text-white mb-2">
              Menuju Rilis 27 September
            </CardTitle>
            <CardDescription className="text-gray-300 text-lg">Tandai kalendermu dan siap-siap nonton!</CardDescription>
          </CardHeader>
        </Card>

        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-6">
          <Card className="bg-gray-900/50 border-gray-700 backdrop-blur-lg">
            <CardContent className="p-6 text-center">
              <div className="text-4xl md:text-5xl font-bold text-white">{timeLeft.days}</div>
              <div className="text-sm md:text-base font-medium uppercase text-gray-400">Hari</div>
            </CardContent>
          </Card>
          <Card className="bg-gradient-to-br from-blue-900/50 to-indigo-900/50 border-blue-800 backdrop-blur-lg">
            <CardContent className="p-6 text-center">
              <div className="text-4xl md:text-5xl font-bold text-white">{String(timeLeft.hours).padStart(2, '0')}</div>
              <div className="text-sm md:text-base font-medium uppercase text-gray-300">Jam</div>
            </CardContent>
          </Card>
          <Card className="bg-gradient-to-br from-green-900/50 to-emerald-900/50 border-green-800 backdrop-blur-lg">
            <CardContent className="p-6 text-center">
              <div className="text-4xl md:text-5xl font-bold text-white">{String(timeLeft.minutes).padStart(2, '0')}</div>
              <div className="text-sm md:text-base font-medium uppercase text-gray-300">Menit</div>
            </CardContent>
          </Card>
          <Card className="bg-gradient-to-br from-red-900/50 to-pink-900/50 border-red-800 backdrop-blur-lg">
            <CardContent className="p-6 text-center">
              <div className="text-4xl md:text-5xl font-bold text-white">{String(timeLeft.seconds).padStart(2, '0')}</div>
              <div className="text-sm md:text-base font-medium uppercase text-gray-300">Detik</div>
            </CardContent>
          </Card>
        </div>

        <div className="text-center mt-8">
          {released ? (
            <Button asChild variant="gradient" size="lg" className="text-xl px-8 py-6">
              <a href="#download">
                Rilis hari ini! Download sekarang
              </a>
            </Button>
          ) : (
            <Badge variant="secondary" className="text-lg px-6 py-3 bg-gray-800 text-gray-300 border-gray-600">
              Hitung mundur dimulai...
            </Badge>
          )}
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="mb-20 max-w-6xl mx-auto">
        <Card className="bg-gradient-to-r from-red-900/50 to-pink-900/50 border-red-800 backdrop-blur-lg mb-8">
          <CardHeader>
            <CardTitle className="text-4xl md:text-5xl text-white text-center">
              FITUR KEREN!
            </CardTitle>
          </CardHeader>
        </Card>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <Card className="bg-gray-900/50 border-gray-700 backdrop-blur-lg">
            <CardContent className="p-6">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-emerald-500 rounded-lg mr-4 flex items-center justify-center">
                  <Shield className="w-6 h-6 text-white" strokeWidth={2} />
                </div>
                <CardTitle className="text-white">BEBAS IKLAN</CardTitle>
              </div>
              <p className="text-gray-300">Nonton anime tanpa gangguan iklan yang menyebalkan!</p>
            </CardContent>
          </Card>
          
          <Card className="bg-gradient-to-br from-blue-900/50 to-indigo-900/50 border-blue-800 backdrop-blur-lg">
            <CardContent className="p-6">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-gradient-to-r from-yellow-500 to-orange-500 rounded-lg mr-4 flex items-center justify-center">
                  <Zap className="w-6 h-6 text-white" strokeWidth={2} />
                </div>
                <CardTitle className="text-white">UPDATE HARIAN</CardTitle>
              </div>
              <p className="text-gray-300">Episode terbaru langsung tersedia setiap hari!</p>
            </CardContent>
          </Card>
          
          <Card className="bg-gradient-to-br from-green-900/50 to-emerald-900/50 border-green-800 backdrop-blur-lg">
            <CardContent className="p-6">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-gradient-to-r from-red-500 to-pink-500 rounded-lg mr-4 flex items-center justify-center">
                  <Star className="w-6 h-6 text-white" strokeWidth={2} fill="white" />
                </div>
                <CardTitle className="text-white">DAFTAR FAVORIT</CardTitle>
              </div>
              <p className="text-gray-300">Simpan anime favorit & track history tontonanmu!</p>
            </CardContent>
          </Card>
          
          <Card className="bg-gradient-to-br from-purple-900/50 to-violet-900/50 border-purple-800 backdrop-blur-lg">
            <CardContent className="p-6">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-lg mr-4 flex items-center justify-center">
                  <Smartphone className="w-6 h-6 text-white" strokeWidth={2} />
                </div>
                <CardTitle className="text-white">UI MODERN</CardTitle>
              </div>
              <p className="text-gray-300">Interface keren yang mudah digunakan siapa aja!</p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Requirements Section */}
      <section className="mb-20 text-center max-w-6xl mx-auto">
        <Card className="bg-gradient-to-r from-gray-900/50 to-slate-900/50 border-gray-700 backdrop-blur-lg max-w-2xl mx-auto">
          <CardHeader>
            <CardTitle className="text-3xl md:text-4xl text-white mb-4">
              SYARAT DOWNLOAD
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex items-center justify-center">
              <Smartphone className="w-6 h-6 mr-3 text-indigo-400" strokeWidth={2} />
              <p className="text-xl text-gray-300">Android 5.0 ke atas</p>
            </div>
            <div className="flex items-center justify-center">
              <Download className="w-6 h-6 mr-3 text-green-400" strokeWidth={2} />
              <p className="text-xl text-gray-300">Minimal 100MB storage</p>
            </div>
            <div className="flex items-center justify-center">
              <Zap className="w-6 h-6 mr-3 text-yellow-400" strokeWidth={2} />
              <p className="text-xl text-gray-300">Koneksi internet stabil</p>
            </div>
          </CardContent>
        </Card>
      </section>

      {/* Download Buttons */}
      <section id="download" className="flex flex-col lg:flex-row gap-12 mb-20 justify-center items-center max-w-6xl mx-auto">
        <Card className="bg-gradient-to-br from-red-900/50 to-pink-900/50 border-red-800 backdrop-blur-lg hover:shadow-xl transition-all duration-300">
          <CardContent className="p-8 text-center">
            <div className="relative">
              <div className="absolute -top-2 -left-2 w-3 h-3 bg-gradient-to-r from-yellow-400 to-orange-400 rounded-full animate-pulse"></div>
              <div className="absolute -bottom-2 -right-2 w-3 h-3 bg-gradient-to-r from-blue-400 to-cyan-400 rounded-full animate-pulse"></div>
              <h3 className="text-2xl font-bold text-white mb-2">DOWNLOAD APK</h3>
              <p className="text-lg text-green-400 mb-4">✅ v1.0.0 Beta 2</p>
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                transition={{ type: "spring", stiffness: 400, damping: 17 }}
              >
                <Button asChild variant="outline" size="lg" className="w-full bg-white text-black border-white hover:bg-gray-100">
                  <a href="https://www.shorturl.at/SZScV" target="_blank" rel="noopener noreferrer">
                    <Check className="w-5 h-5 mr-2" /> Download Sekarang
                  </a>
                </Button>
              </motion.div>
            </div>
          </CardContent>
        </Card>

        <Card className="bg-gradient-to-br from-green-900/30 to-emerald-900/30 border-green-800/50 backdrop-blur-lg opacity-60">
          <CardContent className="p-8 text-center">
            <div className="relative">
              <div className="absolute -top-2 -right-2 w-3 h-3 bg-gradient-to-r from-purple-400 to-violet-400 rounded-full animate-pulse"></div>
              <div className="absolute -bottom-2 -left-2 w-3 h-3 bg-gradient-to-r from-red-400 to-pink-400 rounded-full animate-pulse"></div>
              <h3 className="text-2xl font-bold text-white mb-2">PLAY STORE</h3>
              <p className="text-lg text-gray-400">🚧 Segera Hadir</p>
            </div>
          </CardContent>
        </Card>
      </section>

      {/* Warning Section */}
      <section className="mb-20 w-full max-w-4xl mx-auto">
        <Card className="bg-gradient-to-r from-red-900/50 to-orange-900/50 border-red-800 backdrop-blur-lg">
          <CardContent className="p-8">
            <div className="flex items-center justify-center mb-4">
              <div className="w-12 h-12 bg-gradient-to-r from-yellow-500 to-orange-500 rounded-lg mr-4 flex items-center justify-center">
                <Shield className="w-8 h-8 text-white" strokeWidth={2} />
              </div>
              <CardTitle className="text-3xl md:text-4xl text-white">
                PERHATIAN!
              </CardTitle>
            </div>
            <p className="text-gray-300 text-xl text-center">
              HANYA DOWNLOAD DARI LINK RESMI DI ATAS!<br/>
              WASPADAI APLIKASI PALSU & MALWARE!
            </p>
          </CardContent>
        </Card>
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
        <Card className="bg-gradient-to-r from-blue-900/50 to-cyan-900/50 border-blue-800 backdrop-blur-lg mb-8">
          <CardHeader>
            <CardTitle className="text-3xl md:text-4xl text-white text-center">Rencana Besar ke Depan</CardTitle>
          </CardHeader>
        </Card>

        <div className="grid grid-cols-1 gap-6">
          <Card className="bg-gray-900/50 border-gray-700 backdrop-blur-lg">
            <CardHeader>
              <CardTitle className="text-2xl text-white">1. Buat versi webnya</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-300">Menghadirkan versi web NANIMEID agar bisa diakses langsung dari browser dengan performa cepat dan tampilan responsif.</p>
            </CardContent>
          </Card>
          <Card className="bg-gradient-to-br from-green-900/50 to-emerald-900/50 border-green-800 backdrop-blur-lg">
            <CardHeader>
              <CardTitle className="text-2xl text-white">2. Baca komik manga dalam 1 app</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-300">Menambahkan fitur pembaca manga terintegrasi, sehingga pengguna bisa streaming anime dan membaca manga dalam satu aplikasi.</p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Community Section */}
      <section id="community" className="max-w-4xl mx-auto mb-20 text-center">
        <Card className="bg-gradient-to-r from-green-900/50 to-emerald-900/50 border-green-800 backdrop-blur-lg mb-6">
          <CardHeader>
            <CardTitle className="text-3xl md:text-4xl text-white">Gabung Komunitas WA</CardTitle>
          </CardHeader>
        </Card>
        <Card className="bg-gray-900/50 border-gray-700 backdrop-blur-lg max-w-2xl mx-auto mb-8">
          <CardContent className="p-6">
            <p className="text-gray-300 text-lg">
              Ayo gabung ke grup WhatsApp resmi NANIMEID untuk update terbaru, diskusi anime, dan info rilis!
            </p>
          </CardContent>
        </Card>
        <div className="mt-8">
          <Button asChild variant="modern" size="lg" className="text-2xl px-10 py-6">
            <a
              href="https://chat.whatsapp.com/DbwAK4QpGYu5h3dBUp3btc?mode=ems_copy_c"
              target="_blank"
              rel="noopener noreferrer"
              title="Gabung Komunitas WhatsApp NANIMEID"
            >
              🚀 Gabung di WhatsApp
            </a>
          </Button>
        </div>
      </section>

      {/* Footer */}
      <footer className="w-full border-t border-gray-700 pt-8">
        <Card className="bg-gray-900/50 border-gray-700 backdrop-blur-lg max-w-2xl mx-auto text-center">
          <CardContent className="p-6">
            <p className="font-bold text-lg text-white mb-2">
              © 2025 NANIMEID
            </p>
            <p className="text-gray-400">
              SEMUA HAK DILINDUNGI UNDANG-UNDANG
            </p>
          </CardContent>
        </Card>
        
        {/* Decorative elements */}
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