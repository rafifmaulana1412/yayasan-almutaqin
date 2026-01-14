import { useState } from "react";

export default function Donasi() {
  const [nominal, setNominal] = useState("");
  const [nama, setNama] = useState("");
  const [bukti, setBukti] = useState(null); // dipertahankan, tapi tidak dipakai
  const [metode, setMetode] = useState("");

  const handleSubmit = () => {
    if (!nama || !nominal || !metode) {
      alert("Lengkapi nama, nominal, dan metode pembayaran!");
      return;
    }

    const pesan = `
Assalamu’alaikum Admin Yayasan Al Muttaqin Taki Niode.

Saya telah melakukan donasi dengan rincian:
Nama Donatur: ${nama}
Nominal Donasi: Rp ${Number(nominal).toLocaleString("id-ID")}
Metode Pembayaran: ${metode.toUpperCase()}

Berikut saya lampirkan bukti transfer.
`;

    window.open(
      `https://wa.me/6289677332497?text=${encodeURIComponent(pesan)}`,
      "_blank"
    );
  };

  return (
    <div className="bg-gray-100 min-h-screen">
      {/* HERO DONASI */}
      <section className="bg-green-700 text-white">
        <div className="max-w-6xl mx-auto px-6 py-20 text-center">
          <h1 className="text-4xl md:text-5xl font-extrabold mb-6">
            Donasi Yayasan Al Muttaqin Taki Niode
          </h1>
          <p className="max-w-3xl mx-auto text-green-100 text-lg">
            Ulurkan tangan terbaik Anda untuk mendukung kegiatan pendidikan
            Islam, tahfidz Al-Qur’an, pengasuhan anak yatim dan dhuafa, serta
            program sosial yang diselenggarakan oleh Yayasan Al Muttaqin Taki
            Niode.
          </p>
        </div>
      </section>

      {/* DAMPAK DONASI */}
      <section className="bg-white">
        <div className="max-w-4xl mx-auto px-6 py-12 grid md:grid-cols-3 gap-6 text-center">
          <div className="p-4 border rounded-lg">
            <p className="font-bold text-green-700">Rp 25.000</p>
            <p className="text-sm text-gray-600">Konsumsi santri 1 hari</p>
          </div>
          <div className="p-4 border rounded-lg">
            <p className="font-bold text-green-700">Rp 100.000</p>
            <p className="text-sm text-gray-600">
              Operasional pendidikan tahfidz
            </p>
          </div>
          <div className="p-4 border rounded-lg">
            <p className="font-bold text-green-700">Rp 250.000</p>
            <p className="text-sm text-gray-600">Kebutuhan anak asuh & yatim</p>
          </div>
        </div>
      </section>

      {/* FORM DONASI */}
      <section>
        <div className="max-w-3xl mx-auto px-4 py-16">
          <div className="bg-white p-8 rounded-lg shadow">
            <h2 className="text-2xl font-bold text-center mb-8">Form Donasi</h2>

            {/* NOMINAL */}
            <div className="mb-6">
              <label className="font-semibold block mb-2">Pilih Nominal</label>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                {[25000, 50000, 100000, 250000].map((n) => (
                  <button
                    key={n}
                    onClick={() => setNominal(n)}
                    className={`border rounded py-2 font-medium ${
                      nominal == n
                        ? "bg-green-600 text-white"
                        : "hover:bg-green-100"
                    }`}
                  >
                    Rp {n.toLocaleString("id-ID")}
                  </button>
                ))}
              </div>
            </div>

            {/* INPUT MANUAL */}
            <div className="mb-6">
              <label className="font-semibold block mb-2">
                Atau Masukkan Nominal
              </label>
              <input
                type="number"
                className="w-full border rounded px-3 py-2"
                placeholder="Contoh: 100000"
                value={nominal}
                onChange={(e) => setNominal(e.target.value)}
              />
            </div>

            {/* NAMA */}
            <div className="mb-6">
              <label className="font-semibold block mb-2">Nama Donatur</label>
              <input
                type="text"
                className="w-full border rounded px-3 py-2"
                placeholder="Nama Lengkap"
                value={nama}
                onChange={(e) => setNama(e.target.value)}
              />
            </div>

            {/* METODE PEMBAYARAN */}
            <div className="mb-6">
              <label className="font-semibold block mb-2">
                Metode Pembayaran
              </label>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                <button
                  onClick={() => setMetode("qris")}
                  className={`border rounded py-2 ${
                    metode === "qris" && "bg-green-600 text-white"
                  }`}
                >
                  QRIS
                </button>

                <button
                  onClick={() => setMetode("bank")}
                  className={`border rounded py-2 ${
                    metode === "bank" && "bg-green-600 text-white"
                  }`}
                >
                  Transfer Bank
                </button>

                <button
                  onClick={() => setMetode("va")}
                  className={`border rounded py-2 ${
                    metode === "va" && "bg-green-600 text-white"
                  }`}
                >
                  Virtual Account
                </button>
              </div>
            </div>

            {/* QRIS */}
            {metode === "qris" && (
              <div className="mb-6">
                <label className="font-semibold block mb-2">QRIS</label>
                <div className="border rounded p-4 text-center text-gray-500">
                  (Simulasi QRIS)
                  <br />
                  Scan QR untuk pembayaran
                </div>
              </div>
            )}

            {/* BANK */}
            {metode === "bank" && (
              <div className="mb-6">
                <label className="font-semibold block mb-2">
                  Transfer Bank
                </label>
                <div className="border rounded p-4">
                  <p>
                    <b>Bank Mandiri</b> : 150-00-3528597-0
                  </p>
                  <p>a.n Yayasan Al Muttaqin Taki Niode</p>
                </div>
              </div>
            )}

            {/* VA 5 BANK RESPONSIF DENGAN COPY */}
            {metode === "va" && (
              <div className="mb-6 bg-yellow-50 border border-yellow-300 p-4 rounded">
                <p className="text-sm mb-2">
                  Virtual Account bersifat <b>sekali pakai</b> dan memiliki{" "}
                  <b>batas waktu 24 jam</b>.
                </p>
                <p className="text-sm mb-4 text-center">
                  Silakan transfer ke rekening Mandiri 150-00-3528597-0 melalui
                  bank pilihan Anda:
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-4 mb-4">
                  {[
                    { bank: "Mandiri", va: "1500035285970" },
                    { bank: "BRI", va: "0081500035285970" },
                    { bank: "BCA", va: "8801500035285970" },
                    { bank: "BNI", va: "0091500035285970" },
                    { bank: "BSI", va: "9021500035285970" },
                  ].map((item) => (
                    <div
                      key={item.bank}
                      className="border rounded p-3 bg-white text-center cursor-pointer hover:bg-green-50 transition"
                      onClick={() => {
                        navigator.clipboard.writeText(item.va);
                        alert(`Virtual Account ${item.va} berhasil dicopy!`);
                      }}
                    >
                      <p className="font-medium">{item.bank}</p>
                      <p className="text-xs">{item.va}</p>{" "}
                      {/* font nomor VA diperkecil */}
                      <p className="text-[10px] text-gray-500 mt-1">
                        Klik untuk copy
                      </p>
                    </div>
                  ))}
                </div>

                <button
                  onClick={handleSubmit} // tombol kirim bukti WA
                  className="w-full bg-green-600 text-white py-3 rounded-lg font-semibold"
                >
                  Kirim Bukti via WhatsApp
                </button>
                <p className="text-xs text-gray-600 mt-2 text-center">
                  Setelah klik, Anda akan diarahkan ke WhatsApp untuk konfirmasi
                  donasi.
                </p>
              </div>
            )}

            {/* AJAKAN DONASI */}
            {metode !== "va" && (
              <div className="mb-4 text-center">
                <p className="text-sm text-gray-700">
                  🤍 Donasi Anda akan digunakan untuk pendidikan tahfidz,
                  kebutuhan santri, dan kegiatan sosial yayasan.
                </p>
              </div>
            )}

            {/* KONFIRMASI VIA WHATSAPP (NON VA) */}
            {metode !== "va" && (
              <>
                <button
                  onClick={handleSubmit}
                  className="w-full bg-green-600 hover:bg-green-700 text-white py-3 rounded-lg font-semibold"
                >
                  Kirim Bukti via WhatsApp
                </button>

                <p className="text-sm text-gray-500 mt-3 text-center leading-relaxed">
                  Setelah WhatsApp terbuka, silakan lampirkan foto bukti
                  transfer Anda.
                  <br />
                  <span className="text-green-700 font-medium">
                    InsyaAllah donasi dikelola secara amanah & transparan.
                  </span>
                  <br />
                  <span className="italic">
                    “Semoga Allah membalas kebaikan Anda dengan pahala terbaik.”
                  </span>
                </p>
              </>
            )}
          </div>
        </div>
      </section>
    </div>
  );
}
