import { NavLink, Link } from "react-router-dom";

const Navbar = () => {
  const navLinkClass = ({ isActive }: { isActive: boolean }) =>
    `text-sm font-medium transition ${
      isActive ? "text-amber-400" : "text-gray-300 hover:text-white"
    }`;

  return (
    <div className="sticky top-0 z-50 border-b border-white/10 bg-[#0B1020]/95 backdrop-blur-xl">
      <nav className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6">
        <Link to="/" className="text-2xl font-black tracking-tight text-white">
          DOOMSDAY<span className="text-amber-400">.</span>
        </Link>

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

        <Link
          to="/booking"
          className="rounded-lg bg-amber-400 px-5 py-2.5 text-sm font-bold text-[#0B1020] transition hover:bg-amber-300"
        >
          Book Tickets
        </Link>
      </nav>
    </div>
  );
};

export default Navbar;
