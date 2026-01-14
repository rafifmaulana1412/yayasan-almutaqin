export default function Program() {
  return (
    <div className="bg-white min-h-screen">
      {/* HERO PROGRAM */}
      <section className="bg-green-700 text-white">
        <div className="max-w-6xl mx-auto px-6 py-20 text-center">
          <h1 className="text-4xl md:text-5xl font-extrabold mb-6">
            Program Kegiatan Yayasan Al Muttaqin Taki Niode
          </h1>
          <p className="max-w-3xl mx-auto text-green-100 text-lg">
            Program-program Yayasan Al Muttaqin Taki Niode dirancang untuk
            mendukung pendidikan Islam, pembinaan akhlak, penguatan keimanan,
            serta pemberdayaan sosial umat secara berkelanjutan.
          </p>
        </div>
      </section>

      {/* PROGRAM UTAMA */}
      <section className="bg-gray-50">
        <div className="max-w-6xl mx-auto px-6 py-16 grid md:grid-cols-2 gap-10">
          {/* PROGRAM 1 */}
          <div className="bg-white p-8 rounded-lg shadow hover:shadow-lg transition">
            <h3 className="text-2xl font-semibold mb-4 text-green-700">
              Pendidikan & Pembinaan Keislaman
            </h3>
            <p className="text-gray-700 leading-relaxed">
              Menyelenggarakan kegiatan pendidikan Islam, tahfidz Al-Qur’an,
              pembinaan akhlak, serta pendampingan belajar bagi anak-anak dan
              remaja dalam lingkungan binaan yayasan.
            </p>
          </div>

          {/* PROGRAM 2 */}
          <div className="bg-white p-8 rounded-lg shadow hover:shadow-lg transition">
            <h3 className="text-2xl font-semibold mb-4 text-green-700">
              Pengelolaan Donasi ZISWAF
            </h3>
            <p className="text-gray-700 leading-relaxed">
              Mengelola dan menyalurkan dana Zakat, Infaq, Sedekah, dan Wakaf
              (ZISWAF) secara amanah, transparan, dan sesuai syariat Islam untuk
              mendukung seluruh program yayasan.
            </p>
          </div>

          {/* PROGRAM 3 */}
          <div className="bg-white p-8 rounded-lg shadow hover:shadow-lg transition">
            <h3 className="text-2xl font-semibold mb-4 text-green-700">
              Program Tahfidz Al-Qur’an
            </h3>
            <p className="text-gray-700 leading-relaxed">
              Program unggulan yayasan dalam mencetak generasi penghafal
              Al-Qur’an melalui setoran hafalan, muraja’ah, tahsin bacaan, serta
              pembinaan adab dan akhlak penghafal Al-Qur’an.
            </p>
          </div>

          {/* PROGRAM 4 */}
          <div className="bg-white p-8 rounded-lg shadow hover:shadow-lg transition">
            <h3 className="text-2xl font-semibold mb-4 text-green-700">
              Rumah Tahfidz
            </h3>
            <p className="text-gray-700 leading-relaxed">
              Program tahfidz non-mukim bagi anak-anak dan remaja sekitar
              yayasan sebagai sarana pembinaan Al-Qur’an, karakter Islami, dan
              kecintaan terhadap ilmu agama.
            </p>
          </div>

          {/* PROGRAM 5 */}
          <div className="bg-white p-8 rounded-lg shadow hover:shadow-lg transition">
            <h3 className="text-2xl font-semibold mb-4 text-green-700">
              Panti Asuhan & Pengasuhan Anak
            </h3>
            <p className="text-gray-700 leading-relaxed">
              Program pengasuhan anak yatim, piatu, dan dhuafa melalui pemenuhan
              kebutuhan dasar, pendidikan, pembinaan mental-spiritual, serta
              pendampingan menuju kemandirian.
            </p>
          </div>

          {/* PROGRAM 6 */}
          <div className="bg-white p-8 rounded-lg shadow hover:shadow-lg transition">
            <h3 className="text-2xl font-semibold mb-4 text-green-700">
              Pemberdayaan & Kemandirian
            </h3>
            <p className="text-gray-700 leading-relaxed">
              Program pendukung berupa pelatihan keterampilan, usaha produktif,
              dan pembinaan kemandirian santri serta warga binaan untuk
              mendukung keberlanjutan yayasan.
            </p>
          </div>
        </div>
      </section>

      {/* NILAI TAMBAH */}
      <section className="bg-white">
        <div className="max-w-6xl mx-auto px-6 py-16">
          <h2 className="text-3xl font-bold text-center mb-10">
            Nilai yang Kami Junjung
          </h2>
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div className="bg-gray-50 p-6 rounded-lg shadow">
              <h4 className="font-semibold text-xl mb-2">Profesional</h4>
              <p className="text-gray-600">
                Pengelolaan program dilakukan secara terencana, rapi, dan dapat
                dipertanggungjawabkan.
              </p>
            </div>
            <div className="bg-gray-50 p-6 rounded-lg shadow">
              <h4 className="font-semibold text-xl mb-2">Amanah</h4>
              <p className="text-gray-600">
                Setiap amanah donasi dan program dijalankan dengan penuh
                tanggung jawab.
              </p>
            </div>
            <div className="bg-gray-50 p-6 rounded-lg shadow">
              <h4 className="font-semibold text-xl mb-2">Berkelanjutan</h4>
              <p className="text-gray-600">
                Program disusun untuk memberikan dampak jangka panjang bagi anak
                asuh dan masyarakat.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
