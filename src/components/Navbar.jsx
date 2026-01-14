import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="bg-green-700 text-white px-6 py-4 flex justify-between items-center">
      {/* LOGO + NAMA */}
      <Link to="/" className="flex items-center gap-3">
        <img src="/logo.png" alt="Logo Yayasan" className="h-10 w-auto" />
        <h1 className="font-bold text-lg">Yayasan Al Muttaqiin Taki Niode</h1>
      </Link>

      {/* MENU */}
      <div className="hidden md:flex gap-4 items-center">
        <Link to="/" className="hover:underline">
          Home
        </Link>
        <Link to="/profile" className="hover:underline">
          Profile
        </Link>
        <Link to="/program" className="hover:underline">
          Program
        </Link>
        <Link to="/galery" className="hover:underline">
          Galery
        </Link>
        <Link to="/kontak" className="hover:underline">
          Kontak
        </Link>
        <Link to="/profilLengkap" className="hover:underline">
          Profil Lembaga
        </Link>

        <Link
          to="/donasi"
          className="bg-yellow-400 text-black px-3 py-1 rounded font-semibold hover:bg-yellow-300"
        >
          Donasi
        </Link>
      </div>
    </nav>
  );
}
