export default function Kontak() {
  return (
    <div className="min-h-screen bg-gray-100">
      {/* HERO KONTAK */}
      <section className="bg-green-700 text-white">
        <div className="max-w-6xl mx-auto px-6 py-20 text-center">
          <h1 className="text-4xl md:text-5xl font-extrabold mb-6">
            Kontak Yayasan
          </h1>
          <p className="max-w-3xl mx-auto text-green-100 text-lg">
            Kami terbuka untuk silaturahmi, kerja sama, serta partisipasi dalam
            kegiatan keagamaan, pendidikan, dan sosial yang diselenggarakan oleh
            Yayasan Al Muttaqin Taki Niode.
          </p>
        </div>
      </section>

      {/* KONTEN KONTAK */}
      <section>
        <div className="max-w-5xl mx-auto px-6 py-16">
          <div className="grid md:grid-cols-2 gap-8">
            {/* INFO KONTAK */}
            <div className="bg-white p-6 rounded-lg shadow">
              <h2 className="text-2xl font-semibold mb-4">Informasi Kontak</h2>

              <p className="mb-3">
                <span className="font-semibold">Alamat:</span>
                <br />
                Limba U Dua, Kota Sel., Kota Gorontalo, Gorontalo 96136,
                Indonesia
              </p>

              <p className="mb-3">
                <span className="font-semibold">WhatsApp:</span>
                <br />
                <a
                  href="https://wa.me/+6281245494946"
                  target="_blank"
                  className="text-green-600 hover:underline"
                >
                  +6281245494946
                </a>
              </p>

              <p className="mb-3">
                <span className="font-semibold">Facebook:</span>
                <br />
                <a
                  href="http://facebook.com/ponpestakiniode/?locale=id_ID"
                  target="_blank"
                  className="text-blue-600 hover:underline"
                >
                  Yasayasan Al Muttaqin Taki Niode
                </a>
              </p>
            </div>

            {/* AJAKAN */}
            <div className="bg-white p-6 rounded-lg shadow flex flex-col justify-center">
              <h2 className="text-2xl font-semibold mb-4">Hubungi Kami</h2>

              <p className="mb-6 text-gray-700">
                Jika Anda ingin mengetahui lebih lanjut mengenai kegiatan
                yayasan, program keagamaan, pendidikan, atau ingin
                berpartisipasi dalam kegiatan sosial, silakan hubungi kami
                melalui kontak yang tersedia.
              </p>

              <a
                href="https://wa.me/089677332497"
                target="_blank"
                className="inline-block bg-green-600 text-white px-6 py-3 rounded-lg text-center hover:bg-green-700"
              >
                Chat via WhatsApp
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
