import { Link } from "react-router-dom";
import { useState } from "react";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="bg-green-700 text-white px-4 md:px-6 py-4">
      <div className="flex justify-between items-center max-w-6xl mx-auto">
        {/* LOGO */}
        <Link to="/" className="flex items-center gap-3">
          <img src="/logo.png" alt="Logo Yayasan" className="h-10 w-auto" />
          <h1 className="font-bold text-sm sm:text-lg">
            Yayasan Al Muttaqiin Taki Niode
          </h1>
        </Link>

        {/* DESKTOP MENU */}
        <div className="hidden md:flex gap-4 items-center">
          <Link to="/">Home</Link>
          <Link to="/profile">Profile</Link>
          <Link to="/program">Program</Link>
          <Link to="/galery">Galery</Link>
          <Link to="/kontak">Kontak</Link>
          <Link to="/profilLengkap">Profile Lembaga</Link>
          <Link
            to="/donasi"
            className="bg-yellow-400 text-black px-3 py-1 rounded font-semibold"
          >
            Pembayaran Internal
          </Link>
        </div>

        {/* MOBILE BUTTON */}
        <button className="md:hidden" onClick={() => setOpen(!open)}>
          ☰
        </button>
      </div>

      {/* MOBILE MENU */}
      {open && (
        <div className="md:hidden mt-4 flex flex-col gap-3 px-4">
          <Link to="/" onClick={() => setOpen(false)}>
            Home
          </Link>
          <Link to="/profile" onClick={() => setOpen(false)}>
            Profile
          </Link>
          <Link to="/program" onClick={() => setOpen(false)}>
            Program
          </Link>
          <Link to="/galery" onClick={() => setOpen(false)}>
            Galery
          </Link>
          <Link to="/kontak" onClick={() => setOpen(false)}>
            Kontak
          </Link>
          <Link to="/profilLengkap" onClick={() => setOpen(false)}>
            Profile Lembaga
          </Link>
          <Link
            to="/donasi"
            className="bg-yellow-400 text-black px-3 py-2 rounded font-semibold text-center"
            onClick={() => setOpen(false)}
          >
            Pembayaran Internal
          </Link>
        </div>
      )}
    </nav>
  );
}
