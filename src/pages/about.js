import Head from "next/head";

export default function About() {
  return (
    <>
      <Head>
        <title>Tentang NANIMEID</title>
        <meta
          name="description"
          content="Tentang aplikasi NANIMEID dan struktur organisasi tim."
        />
      </Head>

      <main className="min-h-screen bg-gradient-to-br from-yellow-200 via-yellow-300 to-yellow-400 p-6 font-mono">
        {/* Top Bar */}
        <nav className="max-w-6xl mx-auto flex items-center justify-between mb-8">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 bg-black border-4 border-black bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-yellow-300 to-yellow-400"></div>
            <span className="text-xl font-black tracking-tight">NANIMEID</span>
          </div>
          <div className="hidden sm:flex items-center gap-3">
            <a href="/" className="bg-white border-4 border-black px-4 py-2 font-black hover:translate-y-[-2px] transition-transform shadow-[4px_4px_0px_0px_#000]">Beranda</a>
          </div>
        </nav>

        {/* Header */}
        <section className="text-center mb-16 max-w-6xl mx-auto">
          <div className="relative inline-block">
            <h1 className="text-5xl md:text-7xl font-black text-black transform -rotate-1 mb-4 tracking-tight">
              TENTANG NANIMEID
            </h1>
            <div className="absolute -top-2 -right-2 w-8 h-8 bg-red-500 border-4 border-black transform rotate-12"></div>
            <div className="absolute -bottom-2 -left-2 w-6 h-6 bg-blue-500 border-4 border-black transform -rotate-12"></div>
          </div>

          <div className="mt-6 bg-black text-yellow-300 p-6 border-8 border-black transform rotate-1 inline-block max-w-3xl mx-auto shadow-[8px_8px_0px_0px_#000000]">
            <p className="text-lg md:text-xl font-bold">
              Aplikasi NANIMEID adalah platform streaming anime yang fokus pada pengalaman nonton yang cepat, bebas iklan mengganggu, dan mudah digunakan. Kami berkomitmen menghadirkan update anime terbaru, UI modern, serta fitur favorit untuk menemani harimu.
            </p>
          </div>
        </section>

        {/* Organization */}
        <section className="max-w-4xl mx-auto mb-20">
          <div className="bg-red-500 border-8 border-black p-6 transform -rotate-1 shadow-[12px_12px_0px_0px_#000000] mb-8">
            <h2 className="text-3xl md:text-4xl font-black text-white tracking-tight">Struktur Organisasi</h2>
          </div>

          <div className="space-y-6">
            {/* Founder */}
            <div className="bg-white border-8 border-black p-6 transform rotate-1 shadow-[8px_8px_0px_0px_#000000]">
              <h3 className="text-2xl font-black text-black mb-2">Founder</h3>
              <ul className="list-disc pl-6 font-bold text-black">
                <li>Mahesa Radithya Priady</li>
              </ul>
            </div>

            {/* Bendahara / Keuangan */}
            <div className="bg-blue-500 text-white border-8 border-black p-6 transform -rotate-1 shadow-[8px_8px_0px_0px_#000000]">
              <h3 className="text-2xl font-black mb-2">Bendahara / Keuangan</h3>
              <ul className="list-disc pl-6 font-bold">
                <li>Mutiara Khoerunnisa</li>
                <li>Syafira Amelia Nur Hidayat</li>
              </ul>
            </div>

            {/* Uploader */}
            <div className="bg-green-500 text-black border-8 border-black p-6 transform rotate-1 shadow-[8px_8px_0px_0px_#000000]">
              <h3 className="text-2xl font-black mb-2">Uploader</h3>
              <ul className="list-disc pl-6 font-bold">
                <li>Azriel Anwar</li>
                <li>Yori</li>
              </ul>
            </div>

            {/* Media Sosial */}
            <div className="bg-purple-500 text-white border-8 border-black p-6 transform -rotate-1 shadow-[8px_8px_0px_0px_#000000]">
              <h3 className="text-2xl font-black mb-2">Pengurus Media Sosial</h3>
              <ul className="list-disc pl-6 font-bold">
                <li>Rayhan Hanif Fauzy</li>
              </ul>
            </div>

            {/* Design */}
            <div className="bg-yellow-300 text-black border-8 border-black p-6 transform rotate-1 shadow-[8px_8px_0px_0px_#000000]">
              <h3 className="text-2xl font-black mb-2">Design</h3>
              <ul className="list-disc pl-6 font-bold">
                <li>Adya Ahmad Pramudya</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="w-full border-t-8 border-black pt-8">
          <div className="bg-black text-yellow-300 p-6 border-8 border-black transform rotate-1 shadow-[8px_8px_0px_0px_#FF0000] max-w-2xl mx-auto text-center">
            <p className="font-black text-lg uppercase tracking-wide mb-2">© 2025 NANIMEID</p>
            <p className="font-bold">Semua hak dilindungi undang-undang</p>
          </div>

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
