import { useState } from "react";
import { NavLink, Link } from "react-router-dom";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navLinkClass = ({ isActive }: { isActive: boolean }) =>
    `text-sm font-medium transition ${
      isActive ? "text-amber-400" : "text-gray-300 hover:text-white"
    }`;

  const mobileNavLinkClass = ({ isActive }: { isActive: boolean }) =>
    `block rounded-lg px-4 py-3 text-sm font-medium transition ${
      isActive
        ? "bg-amber-400/10 text-amber-400"
        : "text-gray-300 hover:bg-white/5 hover:text-white"
    }`;

  const closeMenu = () => setIsMenuOpen(false);

  return (
    <div className="sticky top-0 z-50 border-b border-white/10 bg-[#0B1020]/95 backdrop-blur-xl">
      <nav className="relative mx-auto flex h-20 max-w-7xl items-center justify-between px-4 sm:px-6">
        <Link
          to="/"
          onClick={closeMenu}
          className="text-2xl font-black tracking-tight text-white"
        >
          DOOMSDAY<span className="text-amber-400">.</span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden items-center gap-8 md:flex">
          <NavLink to="/" end className={navLinkClass}>
            Home
          </NavLink>

          <NavLink to="/movies" className={navLinkClass}>
            Movies
          </NavLink>

          <NavLink to="/rewatch-plan" className={navLinkClass}>
            Rewatch Plan
          </NavLink>

          <NavLink to="/booking" className={navLinkClass}>
            Booking
          </NavLink>
        </div>

        {/* Desktop Button */}
        <Link
          to="/booking"
          className="hidden rounded-lg bg-amber-400 px-5 py-2.5 text-sm font-bold text-[#0B1020] transition hover:bg-amber-300 md:block"
        >
          Book Tickets
        </Link>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="rounded-lg p-2 text-white transition hover:bg-white/10 md:hidden"
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
        >
          {isMenuOpen ? <X size={25} /> : <Menu size={25} />}
        </button>
      </nav>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="border-t border-white/10 bg-[#0B1020] px-4 py-4 md:hidden">
          <div className="flex flex-col gap-2">
            <NavLink
              to="/"
              end
              className={mobileNavLinkClass}
              onClick={closeMenu}
            >
              Home
            </NavLink>

            <NavLink
              to="/movies"
              className={mobileNavLinkClass}
              onClick={closeMenu}
            >
              Movies
            </NavLink>

            <NavLink
              to="/rewatch-plan"
              className={mobileNavLinkClass}
              onClick={closeMenu}
            >
              Rewatch Plan
            </NavLink>

            <NavLink
              to="/booking"
              className={mobileNavLinkClass}
              onClick={closeMenu}
            >
              Booking
            </NavLink>

            <Link
              to="/booking"
              onClick={closeMenu}
              className="mt-2 rounded-lg bg-amber-400 px-5 py-3 text-center text-sm font-bold text-[#0B1020] transition hover:bg-amber-300"
            >
              Book Tickets
            </Link>
          </div>
        </div>
      )}
    </div>
  );
};

export default Navbar;
