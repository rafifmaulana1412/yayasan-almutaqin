export default function Galery() {
  const images = [
    "/galery/kegiatan1.jpg",
    "/galery/kegiatan2.jpg",
    "/galery/kegiatan3.jpg",
    "/galery/kegiatan4.jpg",
    "/galery/kegiatan5.jpg",
    "/galery/kegiatan6.jpg",
    "/galery/kegiatan9.jpg",
    "/galery/kegiatan10.jpg",
    "/galery/kegiatan11.jpg",
    "/galery/kegiatan12.jpg",
    "/galery/kegiatan13.jpg",
  ];

  return (
    <div className="bg-white min-h-screen">
      {/* HERO GALERY */}
      <section className="bg-green-700 text-white">
        <div className="max-w-6xl mx-auto px-6 py-20 text-center">
          <h1 className="text-4xl md:text-5xl font-extrabold mb-6">
            Galeri Kegiatan Yayasan Al Muttaqin Taki Niode
          </h1>
          <p className="max-w-3xl mx-auto text-green-100 text-lg">
            Dokumentasi berbagai kegiatan pembinaan, pendidikan, keagamaan, dan
            sosial yang dilaksanakan oleh Yayasan Al Muttaqin Taki Niode sebagai
            wujud komitmen dalam membina umat dan meningkatkan kesejahteraan
            masyarakat.
          </p>
        </div>
      </section>

      {/* GALERI */}
      <section className="bg-gray-50">
        <div className="max-w-6xl mx-auto px-6 py-16">
          <h2 className="text-3xl font-bold mb-10 text-center">
            Dokumentasi Kegiatan
          </h2>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {images.map((img, i) => (
              <div
                key={i}
                className="overflow-hidden rounded-lg shadow hover:scale-105 transition"
              >
                <img
                  src={img}
                  alt={`Galeri ${i + 1}`}
                  className="w-full h-48 object-cover"
                />
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
