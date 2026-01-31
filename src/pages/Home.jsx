import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function Home() {
  // ===== DATA TESTIMONI =====
  const testimonials = [
    {
      nama: "Ahmad Fadli",
      quote:
        "Saya senang belajar tahfidz di Yayasan Al Muttaqin Taki Niode. Guru-gurunya sabar dan metode belajarnya menyenangkan!",
    },
    {
      nama: "Siti Rahma",
      quote:
        "Lingkungan pesantrennya Islami dan disiplin. Saya merasa nyaman belajar Al-Qur’an di sini.",
    },
    {
      nama: "Muhammad Rizky",
      quote:
        "Selain belajar tahfidz, saya juga belajar kepedulian sosial melalui kegiatan yayasan. Sangat bermanfaat!",
    },
    {
      nama: "Nur Aisyah",
      quote:
        "Di sini saya belajar sabar, disiplin, dan bertanggung jawab. Semua kegiatan sangat terstruktur.",
    },
    {
      nama: "Fahri Alwan",
      quote:
        "Program tahfidznya keren! Saya bisa menghafal dengan metode muraja’ah yang efektif.",
    },
    {
      nama: "Hani Putri",
      quote:
        "Suasana belajar nyaman dan mendukung perkembangan spiritual saya. Sangat menyenangkan!",
    },
  ];

  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const nextTestimoni = () =>
    setIndex((prev) => (prev + 1) % testimonials.length);
  const prevTestimoni = () =>
    setIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);

  return (
    <div className="bg-gray-50">
      {/* HERO */}
      <section className="relative bg-green-700 text-white">
        <div className="max-w-6xl mx-auto px-6 py-24 text-center">
          <h1 className="text-3xl sm:text-4xl md:text-6xl font-extrabold leading-snug md:leading-tight mb-6">
            Mencetak Generasi Qur’ani melalui Pendidikan Tahfidz Al-Qur’an
          </h1>

          <p className="max-w-2xl mx-auto text-lg text-green-100 mb-10">
            Yayasan Al Muttaqiin Taki Niode adalah lembaga pendidikan Islam yang
            berfokus pada pembinaan dan penghafalan Al-Qur’an melalui Pondok
            Pesantren Tahfidzul Qur’an di Kota Gorontalo.
          </p>

          <div className="flex justify-center gap-4 flex-wrap">
            <Link
              to="/donasi"
              className="bg-yellow-400 text-black px-8 py-3 rounded-lg font-semibold hover:bg-yellow-300 transition"
            >
              Kontribusi Program
            </Link>

            <Link
              to="/profile"
              className="border border-white px-8 py-3 rounded-lg hover:bg-white hover:text-green-700 transition"
            >
              Tentang Kami
            </Link>
          </div>
        </div>
      </section>

      {/* STATISTIK */}
      <section className="bg-white">
        <div className="max-w-6xl mx-auto px-6 py-16 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          <div>
            <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-green-700 leading-snug tracking-tight">
              Pembinaan hafalan Al-Qur’an secara terstruktur
            </h3>
            <p className="text-gray-600 mt-2">Pendidikan Tahfidz</p>
          </div>
          <div>
            <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-green-700 leading-snug tracking-tight">
              Muraja’ah dan evaluasi berkala
            </h3>
            <p className="text-gray-600 mt-2">Metode Terarah</p>
          </div>
          <div>
            <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-green-700 leading-snug tracking-tight">
              2010
            </h3>
            <p className="text-gray-600 mt-2">Tahun Berdiri</p>
          </div>
          <div>
            <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-green-700 leading-snug tracking-tight">
              Lingkungan Islami dan disiplin
            </h3>
            <p className="text-gray-600 mt-2">Berbasis Pesantren</p>
          </div>
        </div>
      </section>

      {/* TENTANG */}
      <section className="bg-gray-100">
        <div className="max-w-6xl mx-auto px-6 py-20 grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-bold mb-4">
              Tentang Yayasan Al Muttaqiin Taki Niode
            </h2>
            <p className="text-gray-700 mb-4">
              Yayasan Al Muttaqiin Taki Niode merupakan lembaga pendidikan Islam
              yang bergerak di bidang pembinaan dan pendidikan Al-Qur’an,
              khususnya dalam pengembangan tahfidzul Qur’an.
            </p>

            <Link
              to="/profilLengkap"
              className="inline-block bg-green-700 text-white px-6 py-3 rounded-lg hover:bg-green-800 transition"
            >
              Lihat Profil Lengkap
            </Link>
          </div>
        </div>
      </section>

      {/* CTA AKHIR */}
      <section className="bg-green-700 text-white">
        <div className="max-w-6xl mx-auto px-6 py-20 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Jadilah Bagian dari Pendidikan Qur’ani
          </h2>
          <p className="max-w-xl mx-auto text-green-100 mb-8">
            Partisipasi Anda membantu keberlangsungan pendidikan tahfidz
            Al-Qur’an dan pembinaan generasi Qur’ani.
          </p>

          <Link
            to="/donasi"
            className="bg-yellow-400 text-black px-10 py-4 rounded-lg font-semibold hover:bg-yellow-300 transition"
          >
            Kontribusi Program
          </Link>
        </div>
      </section>
    </div>
  );
}
