const Navbar = () => {
  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-[#0B1020]/95 backdrop-blur-xl">
      <nav className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6">
        <a href="/" className="text-2xl font-black tracking-tight text-white">
          DOOMSDAY<span className="text-amber-400">.</span>
        </a>

        <div className="hidden items-center gap-8 md:flex">
          <a href="/" className="text-sm font-medium text-amber-400">
            Home
          </a>
          <a
            href="/movies"
            className="text-sm text-gray-300 transition hover:text-white"
          >
            Movies
          </a>
          <a
            href="/cinemas"
            className="text-sm text-gray-300 transition hover:text-white"
          >
            Cinemas
          </a>
        </div>

        <a
          href="/movies"
          className="rounded-lg bg-amber-400 px-5 py-2.5 text-sm font-bold text-[#0B1020] transition hover:bg-amber-300"
        >
          Book Tickets
        </a>
      </nav>
    </header>
  );
};

export default Navbar;
