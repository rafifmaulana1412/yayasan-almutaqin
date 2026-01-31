import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";

import Navbar from "./components/Navbar";
import PageTransition from "./components/PageTransition";

import Home from "./pages/Home";
import Profile from "./pages/Profile";
import Program from "./pages/Program";
import Galery from "./pages/Galery";
import Kontak from "./pages/Kontak";
import Donasi from "./pages/Donasi";
import ProfilLengkap from "./pages/ProfilLengkap";

function AnimatedRoutes() {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route
          path="/"
          element={
            <PageTransition>
              <Home />
            </PageTransition>
          }
        />
        <Route
          path="/profile"
          element={
            <PageTransition>
              <Profile />
            </PageTransition>
          }
        />
        <Route
          path="/program"
          element={
            <PageTransition>
              <Program />
            </PageTransition>
          }
        />
        <Route
          path="/Galery"
          element={
            <PageTransition>
              <Galery />
            </PageTransition>
          }
        />
        <Route
          path="/kontak"
          element={
            <PageTransition>
              <Kontak />
            </PageTransition>
          }
        />
        <Route
          path="/donasi"
          element={
            <PageTransition>
              <Donasi />
            </PageTransition>
          }
        />
        <Route
          path="/ProfilLengkap"
          element={
            <PageTransition>
              <ProfilLengkap />
            </PageTransition>
          }
        />
      </Routes>
    </AnimatePresence>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen flex flex-col">
        <Navbar />

        <main className="flex-1">
          <AnimatedRoutes />
        </main>
      </div>
    </BrowserRouter>
  );
}
