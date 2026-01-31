import { useState } from "react";

export default function Donasi() {
  const [nominal, setNominal] = useState("");
  const [nama, setNama] = useState("");

  const handleMidtransPay = async () => {
    if (!nama || !nominal) {
      alert("Lengkapi nama dan nominal kontribusi!");
      return;
    }

    if (!window.snap) {
      alert("Midtrans belum siap");
      return;
    }

    try {
      const res = await fetch("/api/create-transaction", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          nama,
          nominal: Number(nominal),
        }),
      });

      const data = await res.json();

      window.snap.pay(data.token, {
        onSuccess: () => (window.location.href = "/"),
        onPending: () => (window.location.href = "/"),
        onClose: () => (window.location.href = "/"),
        onError: () => alert("Pembayaran gagal"),
      });
    } catch (err) {
      alert("Gagal memproses pembayaran");
    }
  };

  return (
    <div className="bg-gray-100 min-h-screen">
      {/* HERO */}
      <section className="bg-green-700 text-white">
        <div className="max-w-5xl mx-auto px-6 py-20 text-center">
          <h1 className="text-4xl md:text-5xl font-extrabold mb-6">
            Kontribusi Program Pendidikan
          </h1>
          <p className="max-w-3xl mx-auto text-green-100 text-lg">
            Partisipasi masyarakat membantu keberlangsungan pendidikan tahfidz
            Al-Qur’an, pembinaan santri, serta kegiatan sosial Yayasan Al
            Muttaqiin Taki Niode.
          </p>
        </div>
      </section>

      {/* TUJUAN KONTRIBUSI */}
      <section className="bg-white">
        <div className="max-w-5xl mx-auto px-6 py-12 grid md:grid-cols-3 gap-6 text-center">
          <div className="border p-6 rounded-lg">
            <h3 className="font-semibold mb-2 text-green-700">
              Pendidikan Tahfidz
            </h3>
            <p className="text-sm text-gray-600">
              Mendukung kegiatan pembelajaran dan pembinaan hafalan Al-Qur’an
              santri.
            </p>
          </div>

          <div className="border p-6 rounded-lg">
            <h3 className="font-semibold mb-2 text-green-700">
              Operasional Santri
            </h3>
            <p className="text-sm text-gray-600">
              Membantu kebutuhan pendidikan, asrama, dan kegiatan harian santri.
            </p>
          </div>

          <div className="border p-6 rounded-lg">
            <h3 className="font-semibold mb-2 text-green-700">
              Program Sosial
            </h3>
            <p className="text-sm text-gray-600">
              Mendukung pembinaan sosial dan kegiatan dakwah masyarakat sekitar.
            </p>
          </div>
        </div>
      </section>

      {/* FORM */}
      <section>
        <div className="max-w-2xl mx-auto px-4 py-16">
          <div className="bg-white p-10 rounded-xl shadow-lg">
            <h2 className="text-2xl font-bold text-center mb-8">
              Form Kontribusi Program
            </h2>

            {/* NOMINAL */}
            <div className="mb-6">
              <label className="font-semibold block mb-3">
                Pilih Nominal Kontribusi
              </label>

              <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                {[25000, 50000, 100000, 250000].map((n) => (
                  <button
                    key={n}
                    type="button"
                    onClick={() => setNominal(n)}
                    className={`border rounded-lg py-3 font-medium transition ${
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

            {/* INPUT NOMINAL */}
            <div className="mb-6">
              <label className="font-semibold block mb-2">
                Atau Masukkan Nominal
              </label>
              <input
                type="number"
                className="w-full border rounded-lg px-4 py-3 focus:ring-2 focus:ring-green-600 outline-none"
                placeholder="Contoh: 100000"
                value={nominal}
                onChange={(e) => setNominal(e.target.value)}
              />
            </div>

            {/* NAMA */}
            <div className="mb-8">
              <label className="font-semibold block mb-2">
                Nama Kontributor
              </label>
              <input
                type="text"
                className="w-full border rounded-lg px-4 py-3 focus:ring-2 focus:ring-green-600 outline-none"
                placeholder="Nama lengkap"
                value={nama}
                onChange={(e) => setNama(e.target.value)}
              />
            </div>

            {/* BUTTON */}
            <button
              type="button"
              onClick={handleMidtransPay}
              className="w-full bg-blue-600 hover:bg-blue-700 text-white py-4 rounded-lg font-semibold text-lg transition"
            >
              Bayar via Midtrans
            </button>

            <p className="text-sm text-gray-500 text-center mt-4">
              Pembayaran diproses aman melalui sistem Midtrans
            </p>

            <p className="text-xs text-gray-400 text-center mt-3">
              Yayasan Al Muttaqiin Taki Niode • Kota Gorontalo
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
