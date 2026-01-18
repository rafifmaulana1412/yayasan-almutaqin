import { useState } from "react";

export default function Donasi() {
  const [nominal, setNominal] = useState("");
  const [nama, setNama] = useState("");
  const [bukti, setBukti] = useState(null); // dipertahankan
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
      "_blank",
    );
  };

  // === MIDTRANS SNAP PAYMENT ===
  const handleMidtransPay = async () => {
    if (!nama || !nominal) {
      alert("Lengkapi nama dan nominal donasi!");
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
      <section className="bg-green-700 text-white">
        <div className="max-w-6xl mx-auto px-6 py-20 text-center">
          <h1 className="text-4xl md:text-5xl font-extrabold mb-6">
            Donasi Yayasan Al Muttaqin Taki Niode
          </h1>
          <p className="max-w-3xl mx-auto text-green-100 text-lg">
            Ulurkan tangan terbaik Anda untuk mendukung kegiatan pendidikan
            Islam, tahfidz Al-Qur’an, pengasuhan anak yatim dan dhuafa.
          </p>
        </div>
      </section>

      <section>
        <div className="max-w-3xl mx-auto px-4 py-16">
          <div className="bg-white p-8 rounded-lg shadow">
            <h2 className="text-2xl font-bold text-center mb-8">Form Donasi</h2>

            <div className="mb-6">
              <label className="font-semibold block mb-2">Pilih Nominal</label>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                {[25000, 50000, 100000, 250000].map((n) => (
                  <button
                    key={n}
                    type="button"
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

            <div className="mb-6">
              <label className="font-semibold block mb-2">
                Atau Masukkan Nominal
              </label>
              <input
                type="number"
                className="w-full border rounded px-3 py-2"
                value={nominal}
                onChange={(e) => setNominal(e.target.value)}
              />
            </div>

            <div className="mb-6">
              <label className="font-semibold block mb-2">Nama Donatur</label>
              <input
                type="text"
                className="w-full border rounded px-3 py-2"
                value={nama}
                onChange={(e) => setNama(e.target.value)}
              />
            </div>

            <button
              type="button"
              onClick={handleMidtransPay}
              className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-lg font-semibold"
            >
              Bayar Otomatis via Midtrans
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
