import { Link } from "react-router-dom";
import { useEffect, useState } from "react";

export default function Footer() {
  // === DAFTAR AYAT/HADITS ===
  const ayatHadits = [
    "“Dan orang-orang yang menafkahkan hartanya di malam dan siang hari secara sembunyi maupun terang-terangan, mereka mendapat pahala di sisi Allah.” – QS. Al-Baqarah: 274",
    "“Barangsiapa yang membangun masjid karena Allah walaupun sebesar sarang burung, Allah akan membangunkan baginya rumah di surga.” – HR. Bukhari & Muslim",
    "“Orang yang terbaik di antara kalian adalah yang belajar Al-Qur’an dan mengajarkannya.” – HR. Bukhari",
    "“Sedekah tidak akan mengurangi harta.” – HR. Muslim",
    "“Sebaik-baik manusia adalah yang paling bermanfaat bagi orang lain.” – HR. Ahmad",
  ];

  // === STATE UNTUK AYAT/HADITS TERPILIH ===
  const [currentAyat, setCurrentAyat] = useState(ayatHadits[0]);

  // === ROTASI AYAT/HADITS TIAP 10 DETIK ===
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentAyat((prev) => {
        let nextIndex = ayatHadits.indexOf(prev) + 1;
        if (nextIndex >= ayatHadits.length) nextIndex = 0;
        return ayatHadits[nextIndex];
      });
    }, 10000); // ganti tiap 10 detik
    return () => clearInterval(interval);
  }, []);

  return (
    <footer className="bg-green-800 text-white">
      {/* MAIN FOOTER */}
      <div className="max-w-6xl mx-auto px-6 py-12 grid md:grid-cols-4 gap-8">
        {/* IDENTITAS */}
        <div>
          <h3 className="text-xl font-bold mb-3">
            Yayasan Al Muttaqiin Taki Niode
          </h3>
          <p className="text-sm text-green-100 leading-relaxed">
            Lembaga pendidikan Islam yang bergerak di bidang tahfidz Al-Qur’an,
            pembinaan santri, dan pengasuhan anak yatim serta dhuafa.
          </p>
        </div>

        {/* MENU */}
        <div>
          <h4 className="font-semibold mb-3">Menu</h4>
          <ul className="space-y-2 text-sm text-green-100">
            <li>
              <Link to="/" className="hover:underline">
                Beranda
              </Link>
            </li>
            <li>
              <Link to="/profile" className="hover:underline">
                Profil Lembaga
              </Link>
            </li>
            <li>
              <Link to="/program" className="hover:underline">
                Program
              </Link>
            </li>
            <li>
              <Link to="/donasi" className="hover:underline">
                Donasi
              </Link>
            </li>
          </ul>
        </div>

        {/* PROGRAM */}
        <div>
          <h4 className="font-semibold mb-3">Program Unggulan</h4>
          <ul className="space-y-2 text-sm text-green-100">
            <li>Pondok Pesantren Tahfidz</li>
            <li>Rumah Tahfidz Al-Qur’an</li>
            <li>Panti Asuhan Yatim & Dhuafa</li>
            <li>Dakwah & Sosial Kemasyarakatan</li>
          </ul>
        </div>

        {/* KONTAK */}
        <div>
          <h4 className="font-semibold mb-3">Kontak</h4>
          <p className="text-sm text-green-100 leading-relaxed">
            Limba U Dua, Kota Sel.,
            <br />
            Kota Gorontalo, Gorontalo , Indonesia
            <br />
            Kode Pos 96136
          </p>
          <p className="text-sm text-green-100 mt-2">📞 +6281245494946</p>
        </div>
      </div>

      {/* AYAT/HADITS ROTASI */}
      <div className="bg-green-700 text-green-100 text-center px-6 py-4 italic text-sm transition-all duration-500">
        {currentAyat}
      </div>

      {/* COPYRIGHT */}
      <div className="border-t border-green-700 text-center py-4 text-sm text-green-100">
        © 2026 Yayasan Al Muttaqiin Taki Niode. All rights reserved.
      </div>
    </footer>
  );
}
