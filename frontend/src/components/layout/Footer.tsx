import { Link } from "react-router-dom";
import { Clapperboard, Film, Heart } from "lucide-react";

const Footer = () => {
  return (
    <div className="border-t border-white/10 bg-[#080D1A] text-gray-400">
      <div className="mx-auto grid max-w-7xl gap-10 px-6 py-12 md:grid-cols-3">
        {/* Brand */}
        <div>
          <Link to="/" className="mb-4 flex items-center gap-2">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-amber-400 text-[#0B1020]">
              <Clapperboard size={23} />
            </div>

            <span className="text-xl font-extrabold text-white">
              Doomsday <span className="text-amber-400">Ready</span>
            </span>
          </Link>

          <p className="max-w-sm text-sm leading-7">
            Your movie journey starts here. Explore movies, plan your rewatches,
            and find the perfect seat bundles for your group.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="mb-5 text-lg font-bold text-white">Quick Links</h3>

          <ul className="space-y-3 text-sm">
            <li>
              <Link to="/" className="transition hover:text-amber-400">
                Home
              </Link>
            </li>
            <li>
              <Link to="/movies" className="transition hover:text-amber-400">
                Movies
              </Link>
            </li>
            <li>
              <Link
                to="/rewatch-plan"
                className="transition hover:text-amber-400"
              >
                Rewatch Plan
              </Link>
            </li>
            <li>
              <Link to="/booking" className="transition hover:text-amber-400">
                Booking
              </Link>
            </li>
          </ul>
        </div>

        {/* About */}
        <div>
          <h3 className="mb-5 text-lg font-bold text-white">
            Your Movie Experience
          </h3>

          <div className="flex items-center gap-3">
            <Film size={20} className="text-amber-400" />
            <span className="text-sm">Discover your next movie</span>
          </div>

          <p className="mt-4 text-sm leading-7">
            Plan what to watch, track your progress, and make group bookings
            easier.
          </p>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-3 px-6 py-5 text-center text-xs sm:flex-row sm:text-left">
          <p>
            © {new Date().getFullYear()} Doomsday Ready. All rights reserved.
          </p>

          <p className="flex items-center gap-1.5">
            Made with <Heart size={13} className="fill-red-500 text-red-500" />{" "}
            for movie lovers
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
